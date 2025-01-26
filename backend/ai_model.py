import google.generativeai as genai
import json
import base64, httpx

class Model():
    def __init__(self):
        #Load api key
        with open("secrets/gemini.json") as f:
            file = json.load(f)
        
        # Configure model
        genai.configure(api_key=file["private_key"])
        self.__model = genai.GenerativeModel("gemini-2.0-flash-exp")

    def process_document(self, url):
        # Process document from url
        doc_data = base64.standard_b64encode(httpx.get(url).content).decode("utf-8")

        # Generate summary
        prompt = "Summarize the document in less than 250,000 characters"
        response = self.__model.generate_content([{'mime_type':'application/pdf', 'data': doc_data}, prompt])
        summary = response.text

        # Generate keywords
        prompt = """
                Please return a list of keywords that would apply to this document from the following options: 
                Housing, Defense, Immigration, Economy, Infrastructure, Environment, Law. 

                Reply only with the keywords, separated by commas. Do not say anything else.
                """
        
        response = self.__model.generate_content([{'mime_type':'application/pdf', 'data': doc_data}, prompt])
        
        # Create a list of keywords
        if "," in response.text:
            keywords = response.text.split(",")
        else:
            keywords = response.text

        return summary, keywords
        
        


