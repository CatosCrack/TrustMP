This is the repo of the hackathon project for McHack 2025.

# Participants
Camilo Galvis - Data scrapping, data processing, Google Cloud Integrations
Vlad Glezin - Data scrapping
Nirmal Patel - Frontend development
Eric Scherpereel - Frontend development

# Objective
We wanted to develop a platform to enhance transparency in the Canadian legislative process.

To achieve our objective, TrustMP lets users see voting statistics for the memebers of parliament to assist them in uncovering trends. Additionally, visitors to the website
can see information about specific bills, condensed in short summaries and organized in categories by leveraging the capabilities of Google's Gemini. If a person has questions
about the bill and wants to learn more, users are able to chat with a Gemini chatbot grounded on the text of the bill, enabling them to interact with legislative projects
in an interactive and unprecedented way.

# Content

# How was the data collected and processed?
To collect and process the data, we created multiple python modules to help us scrap, organize and synthetize information in an efficient manner, leveraging information found
on the Canadian Parliement website (specifically we used this [XML data](#https://www.ourcommons.ca/Members/en/search/XML) and this [dataset](#https://www.ourcommons.ca/en/open-data#LegisInfo)).

## data_process.py
This module processes and analyzes data related to Members of Parliament (MPs) and legislative bills. 
It retrieves XML data from official sources, extracts relevant information, downloads bill-related PDFs, retrieves voting records, and structures information
to for upload to a NoSQL Firestore database.

### Dependencies
This module relies on the following libraries:
- requests: For making HTTP requests to retrieve XML and PDF files.
- os: For handling file operations.
- xml.etree.ElementTree: For parsing XML data.
- urllib.request: For opening URLs and retrieving HTML content.
- re: For pattern matching in HTML content.
- BeautifulSoup (bs4): For web scraping and parsing HTML.
- database.py: Custom module for database interactions using Google Cloud Storage and Firestore.
- ai_model.py: Custom module for AI-based text processing using Google's Gemini.

### Usage
To use the module, instantiate the Data_Process class by passing a database instance:
```
from database import Database
from data_process import Data_Process

db = Database()
data_processor = Data_Process(db)
```
- data_process.parse_mp_data(): Returns a list of dictionaries about Memebers of Parliament
```
mp_data = data_processor.parse_mp_data()
```
- data_process.parse_bill_data(): Fetches bill details, downloads PDFs, processes text, and uploads to the database.
```
data_processor.parse_bill_data()
```
- data_process.download_bill_pdf(String bill_name): Downloads and saves the PDF of a specified bill. Returns the path where the file was donwloaded.
```
pdf_path = data_processor.download_bill_pdf("c-10")
```
- data_process.get_votes(String bill_code, String session): Returns a list of MPs and their votes for a specified bill and session.
```
votes = data_processor.get_votes("c-10", "Second reading")
```

### Future Improvements
- Enhance error handling for web scraping and missing data.
- Implement logging instead of print statements for better debugging.

## ai_model.py
This module utilizes Google's Gemini AI to process and analyze PDF documents. It retrieves documents from a given URL, 
extracts text content, generates summaries, and categorizes documents based on predefined keywords.

### Dependencies
This module relies on the following libraries:
- google.generativeai: For interacting with the Gemini AI model.
- json: For handling API key storage.
- base64: For encoding document content.
- httpx: For fetching documents from URLs.

### Usage
To use the module, instantiate the Model class:
```
from ai_model import Model

model = Model()
```
ai_model.process_document(String document_url): Returns
- summary: A textual summary of the document.
- keywords: A list of relevant keywords for classification.
```
summary, keywords = model.process_document("https://example.com/document.pdf")
```

### Configuration
The API key for Gemini AI must be stored in secrets/gemini.json in the following format:
```
{
    "private_key": "YOUR_GEMINI_API_KEY"
}
```

### Future Improvements
- Improve keyword extraction with more refined categories.
- Implement additional AI-driven insights beyond summarization.
- Enhance error handling for failed document retrievals and API request failures.

## database.py
This module handles interactions with Google Firestore and Firebase Storage, allowing structured data storage and file uploads. 
It provides methods for uploading Members of Parliament (MP) data, bill information, and bill-related documents to Firestore and Cloud Storage.

### Dependencies
This module relies on the following libraries:
- firebase_admin: Imports credentials, firestore, initialize_app, storage to interact with Firestore and Google Cloud Storage

### Usage
The class initializes the Firestore client and Cloud Storage bucket using Firebase credentials.
```
import database

db = database.Database()
```
- database.upload_mp(List data_mp): Takes a list of MP as formatted by [data_process.parse_mp_data()](#data_process.py)
```
database.upload_mp(data_mp)
```
- database.upload_bill(data): Takes a list of bill information as formatted by [data_process.parse_bill_data()](#data_process.py)
```
database.upload_bill(data)
```
- database.upload_file(String path, String bill_code): Uploads a PDF file to Firebase Cloud Storage. Returns the public URL of the resource
```
file_url = db.upload_file("/path/to/bill.pdf", "C-10")
```

### Configuration
The firebase_admin client for Python must be installed in your system. To download it use:
```
pip install firebase-admin
```
Your service account key JSON file placed in secrets/firebase.json.

# Where is the data stored?
The Database module interacts with Google Firestore and Google Cloud Storage to handle structured data and document uploads.

- Bill and MP Data in Firestore: The Members of Parliament (MP) data and bill information are stored in Firestore, a NoSQL database. 
This allows for flexible, scalable storage of documents where each document (such as an MP's data or a bill's details) can be stored independently, 
with the ability to add new fields without affecting the entire database structure. This is ideal for dynamic data that can change over time, such as additional bill stages, 
voting records, or MP changes.

- PDF Files in Google Cloud Storage: The bill-related PDF files (such as those containing the full text of bills) are stored in Google Cloud Storage,
a highly durable and scalable object storage service. When a PDF file is uploaded, it is saved to a cloud bucket, and the public URL for each file is returned.
This approach ensures the files are easily accessible, can be retrieved at any time, and are securely stored with backup capabilities.

## Why we chose a NoSQL database service
- Flexibility and Intuitivity: Firestore allows you to store different types of documents with varying structures.
This is particularly useful when data changes frequently or when different types of entities (MPs and bills in this case) have different attributes.
Firestore’s ability to handle semi-structured data means you can store complex JSON-like documents without worrying about rigid schemas.

- Easy Integration: Firestore integrates seamlessly with other Google Cloud services, such as Firebase Storage (for PDFs) and Google’s AI services.
This makes it a good choice when building applications that need to process and store large datasets, as well as serve them quickly to users. Working within the Google Cloud
portfolio of services also means simplified management of IAM roles and avoidance of CORS policy issues. 
