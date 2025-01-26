import requests, os
import xml.etree.ElementTree as ET
from urllib.request import urlopen
import re
import requests
from bs4 import BeautifulSoup
import database
import ai_model

model = ai_model.Model()

class Data_Process:
    def __init__(self, db) -> None:
        # Get XML data for MPs
        response = requests.get("https://www.ourcommons.ca/Members/en/search/XML")
        response.raise_for_status()
        self.__mpdata = ET.fromstring(response.text)
            
        # Get XML data for bills
        tree = ET.parse("datasets/bills.xml")
        self.__billdata = tree.getroot()

        print("Data fetched successfully")

        # Set database instance
        self.__db=db

    # Parse MP data and return a list of dictionaries
    def parse_mp_data(self):
        mps = []
        for mp in self.__mpdata:
            # Structure name data
            fname = mp.find("PersonOfficialFirstName").text
            lname = mp.find("PersonOfficialLastName").text
            name = fname + " " + lname

            # Create a dictionary to append to the list
            data = {
                "name": name,
                "date_elected": mp.find("FromDateTime").text,
                "party": mp.find("CaucusShortName").text,
                "riding": mp.find("ConstituencyName").text,
                "riding_province": mp.find("ConstituencyProvinceTerritoryName").text
            }

            # Append the dictionary to the list
            mps.append(data)

        return mps
    
    # Download the PDF from the bill website
    def download_bill_pdf(self, bill_code):
        #Open the URL and get HTML
        url = f"https://www.parl.ca/LegisInfo/en/bill/44-1/{bill_code}"
        page = urlopen(url)
        html = page.read().decode("utf-8")

        # Define search pattern
        pattern = r'<a.*?>'
        links = re.findall(pattern, html, re.DOTALL)

        flag = False

        for link in links:
            if flag:
                break
            try:
                soup = BeautifulSoup(link, 'html.parser')
                link = soup.find('a')['href']
            except:
                continue
            if "DocumentViewer" in link and "bill" in link:
                page = urlopen(f"https://www.parl.ca{link}")
                html = page.read().decode("utf-8")
                pattern = r'<a.*?>'
                links = re.findall(pattern, html, re.DOTALL)
                for link in links:
                    try:
                        soup = BeautifulSoup(link, 'html.parser')
                        link = soup.find('a')['href']
                        if "PDF" in link:
                            flag = True
                            pdf_url = f"https://www.parl.ca{link}"
                            print(pdf_url)
                            break 
                    except:
                        continue        
        
        try:
            response = requests.get(pdf_url)
            # Raise an error for failed HTTP requests
            response.raise_for_status()
            
            # Save the PDF locally
            file_path = "temp/bill.pdf"
            with open(file_path, "wb") as pdf_file:
                pdf_file.write(response.content)
            
            print(f"PDF downloaded successfully: {file_path}")
            
            return file_path
        
        except requests.HTTPError as http_err:
            print(f"HTTP error occurred: {http_err}")
        except Exception as e:
            print(f"An error occurred: {e}")

    # Get the votes of each member of parliament
    def get_votes(self, bill_code, session):
        print("Fetching votes")
        #Open the URL and get HTML
        url = f"https://www.parl.ca/LegisInfo/en/bill/44-1/{bill_code}"
        page = urlopen(url)
        html = page.read().decode("utf-8")

        # Find the vote section for the right session
        print("Session:" + session)
        if session == "Second reading":
            pattern = r'<div id="house-second-reading.*?Vote'
            print("Created pattern")
        elif session == "Third reading" or session == "Royal assent":
            pattern = r'<div id="house-third-reading.*?Vote'
            print("Created pattern")

        # Fetch the div section
        div = re.search(pattern, html, re.DOTALL)

        # Fetch the vote link
        pattern_vote = r'<a href=.*?>'
        links = re.findall(pattern_vote, div[0], re.DOTALL)
        vote_link = None
        for link in links:
            # Only get vote link
            try:
                if "vote" in link:
                    pattern_link = r'w.*?"'
                    vote_link = re.findall(pattern_link, link, re.DOTALL)
                    vote_link = f"https://{vote_link[0][:-1]}"
                    print("Vote link: " + vote_link)
            except:
                continue

        # Get voting data
        response = None
        try:
            if vote_link is None:
                return None
            # Fetch the page content
            response = requests.get(vote_link)
            if response.status_code != 200:
                raise Exception(f"Failed to fetch page. Status code: {response.status_code}")
            
        except Exception as e:
            print(f"Error occurred: {e}")
        
        # Parse the page content with BeautifulSoup
        if response is None:
            return None
        soup = BeautifulSoup(response.text, 'html.parser')

         # Locate the voting table
        table = soup.find('table')  # Use a general selector since the class isn't specified
        if not table:
            raise Exception("Could not locate the voting table on the page.")
        
        # Extract table rows
        rows = table.find_all('tr')
        if len(rows) < 2:
            raise Exception("No valid rows found in the voting table.")
        
        # Prepare to extract data
        votes = []

        # Process each row
        for row in rows[1:]:  # Skip the header row
            cells = row.find_all('td')
            if len(cells) < 3:
                continue  # Skip incomplete rows

            # Extract name, party, and vote
            name = cells[0].text.strip()
            idx = name.find("(")
            name = name[:idx]
            if "Mr. " in name or "Ms. " in name:
                name = name[4:]
            elif "Mrs. " in name:
                name = name[5:]
            vote = cells[2].text.strip()

            vote_entry = {
                name: vote
            }

            votes.append(vote_entry)

        return votes

    # Parse bill data and return a list of dictionaries
    def parse_bill_data(self):
        bills = []

        for bill in self.__billdata:
            # Create a dictionary to append to the list
            if "c-" not in bill.find("BillNumberFormatted").text.lower() or "First" in bill.find("LatestCompletedMajorStageEn").text:
                print(f"Name: {bill.find("BillNumberFormatted").text}. Stage: {bill.find("LatestCompletedMajorStageEn").text}")
                continue
            else:
                bill_number = bill.find("BillNumberFormatted").text.lower()
                session = bill.find("ParlSessionCode").text
                stage = bill.find("LatestCompletedMajorStageEn").text
                print(bill_number, stage)

                # Download bill pdf
                path = self.download_bill_pdf(bill_number)
                print(path)

                if path:
                    print("Path exists")
                    # Upload the PDF to Cloud Storage
                    url = self.__db.upload_file(path, bill_number)
                    print(url)

                    # Get categories and summary
                    summary, categories = model.process_document(url)
                else:
                    url = "Not available"
                    summary = "Not available"
                    categories = "Not available"

                # Get voting data
                votes = self.get_votes(bill_number, stage)
                if votes is None:
                    votes = "Not available"
                
                print("votes: ")
                print(votes)

                data = {
                    "bill_number": bill_number,
                    "categories": categories,
                    "name": bill.find("LongTitleEn").text,
                    "date_submitted": bill.find("PassedHouseFirstReadingDateTime").text,
                    "summary": summary,
                    "url": url,
                    "votes": votes,
                    "stage": stage,
                    "session": session
                }

                # Upload the bill to Firestore
                self.__db.upload_bill(data)

        return bills
