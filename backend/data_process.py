import requests, os
import xml.etree.ElementTree as ET
from urllib.request import urlopen
import re
import requests
from bs4 import BeautifulSoup
import database

db = database.Database()

class Data_Process:
    def __init__(self) -> None:
        try:
            # Get XML data for MPs
            response = requests.get("https://www.ourcommons.ca/Members/en/search/XML")
            response.raise_for_status()
            self.__mpdata = ET.fromstring(response.text)
            
            # Get XML data for bills
            tree = ET.parse("backend/datasets/bills.xml")
            self.__billdata = tree.getroot()

            print("Data fetched successfully")
        except:
            print("Error fetching data")

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
        pdf_url = f"https://www.parl.ca/Content/Bills/441/Private/{bill_code}/{bill_code}_1/{bill_code}_1.PDF"
        
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
        #Open the URL and get HTML
        url = f"https://www.parl.ca/LegisInfo/en/bill/44-1/{bill_code}"
        page = urlopen(url)
        html = page.read().decode("utf-8")

        # Find the vote section for the right session
        if session == "Second reading":
            pattern = r'<div id="house-second-reading.*?Vote'
        elif session == "Third reading":
            pattern = r'<div id="house-third-reading.*?Vote'

        # Fetch the div section
        div = re.search(pattern, html, re.DOTALL)

        # Fetch the vote link
        pattern_vote = r'<a href=.*?>'
        links = re.findall(pattern_vote, div[0], re.DOTALL)
        for link in links:
            # Only get vote link
            if "vote" in link:
                pattern_link = r'w.*?"'
                vote_link = re.findall(pattern_link, link, re.DOTALL)
                vote_link = vote_link[0][:-1]

        # Get voting data
        try:
            # Fetch the page content
            response = requests.get(vote_link)
            if response.status_code != 200:
                raise Exception(f"Failed to fetch page. Status code: {response.status_code}")
            
        except Exception as e:
            print(f"Error occurred: {e}")
        
        # Parse the page content with BeautifulSoup
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
            vote = cells[2].text.strip()

            # Handle paired MPs (if the 4th column exists)
            paired = cells[3].text.strip() if len(cells) > 3 else None

            vote_entry = {
                name: vote
            }

            votes.append(vote_entry)

        return votes

    # Parse bill data and return a list of dictionaries
    def parse_bill_data(self, url, votes, categories, summary):
        bills = []

        for bill in self.__billdata:
            # Create a dictionary to append to the list
            if "C-" not in bill.find("BillNumberFormatted").text and "First reading" in bill.find("LatestCompletedMajorStageEn"):
                print(f"Name: {bill.find("BillNumberFormatted").text}. Stage: {bill.find("LatestCompletedMajorStageEn").text}")
                continue
            else:

                bill_number = bill.find("BillNumberFormatted").text.lower()
                session = bill.find("ParlSessionCode").text

                # Download bill pdf
                path = self.download_bill_pdf(bill_number)

                # Upload the PDF to Cloud Storage
                url = db.upload_file(path, bill_number)
                
                # Get voting data
                votes = self.get_votes(bill_number, session)

                data = {
                    "bill_number": bill_number,
                    "categories": categories,
                    "name": bill.find("LongTitleEn").text,
                    "date_submitted": bill.find("PassedHouseFirstReadingDateTime").text,
                    "summary": summary,
                    "url": url,
                    "votes": votes,
                    "stage": bill.find("LatestCompletedMajorStageEn").text,
                    "session": session
                }

                # Append the dictionary to the list
                bills.append(data)

        return bills
