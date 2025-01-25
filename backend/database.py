from firebase_admin import credentials, firestore, initialize_app, storage

class Database:
    def __init__(self) -> None:
        # Create an instance of the the Firestore app
        cred = credentials.Certificate("secrets/firebase.json")
        self.__bucket = "hackathon-448621.firebasestorage.app" # Defined Cloud storage bucket
        self.__app = initialize_app(cred, {"storageBucket":self.__bucket})

        # Check if app was initialized  
        if (self.__app):
            print("App initialized")

        # Access the firestore service
        self.__store = firestore.client()

    # Uploads an structured document to the MPS collection in Firestore
    def upload_mp(self, data):
        data = {
            "date_elected": data["date_elected"],
            "party": data["party"],
            "riding": data["riding"],
            "riding_province": data["riding_province"],
        }

        # Upload a document with the name of the MP as the document ID
        update_time, doc_ref = self.__store.collection("MPS").document(data["name"]).add(data)

    # Upload an structured document to the Bills collection in Firestore
    def upload_bill(self, data):
        data = {
            "bill_number": data["bill_number"],
            "categories": data["categories"],
            "date_submitted": data["date_submitted"],
            "summary": data["summary"],
            "file_url": data["url"],
            "votes": data["votes"]
        }

        update_time, doc_ref = self.__store.collection("Bills").add(data)

    # Upload a PDF file to the Cloud Storage data
    def upload_file(self, path, bill_code):
        # Define the name based on the bill code
        filename = bill_code + ".pdf"

        # Get the bucket and upload the file
        bucket = storage.bucket()
        blob = bucket.blob(filename)
        blob.upload_from_filename(path)

        # Make the file public and get the public URL
        blob.make_public()
        url = blob.public_url
        
        return url


    
        