import requests, os
import xml.etree.ElementTree as ET

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
    
    # TODO: Add Vlad's code here
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

    # Parse bill data and return a list of dictionaries
    def parse_bill_data(self, url, votes, categories, summary):
        bills = []
        for bill in self.__billdata:
            # Create a dictionary to append to the list
            if "C-" not in bill.find("BillNumberFormatted").text and "First reading" in bill.find("LatestCompletedMajorStageEn"):
                print(f"Name: {bill.find("BillNumberFormatted").text}. Stage: {bill.find("LatestCompletedMajorStageEn").text}")
                continue
            else:
                data = {
                    "bill_number": bill.find("BillNumberFormatted").text,
                    "categories": categories,
                    "name": bill.find("LongTitleEn").text,
                    "date_submitted": bill.find("PassedHouseFirstReadingDateTime").text,
                    "summary": summary,
                    "url": url,
                    "votes": votes,
                    "stage": bill.find("LatestCompletedMajorStageEn").text,
                    "session": bill.find("ParlSessionCode").text
                }

                # Append the dictionary to the list
                bills.append(data)

        return bills
