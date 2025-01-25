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