def scrape_votes(url, output_file):
    try:
        # Fetch the page content
        response = requests.get(url)
        if response.status_code != 200:
            raise Exception(f"Failed to fetch page. Status code: {response.status_code}")
        
        # Parse the page content with BeautifulSoup
        soup = BeautifulSoup(response.text, 'html.parser')
        
        # Debugging: Save the HTML to inspect it
        with open("page_debug.html", "w", encoding="utf-8") as file:
            file.write(soup.prettify())
        print("Debug HTML saved to page_debug.html")
        
        # Locate the voting table
        table = soup.find('table')  # Use a general selector since the class isn't specified
        if not table:
            raise Exception("Could not locate the voting table on the page.")
        
        # Extract table rows
        rows = table.find_all('tr')
        if len(rows) < 2:
            raise Exception("No valid rows found in the voting table.")
        
        # Prepare to extract data
        vote_data = {
            "vote_id": "44-1-415",  # Update this to match the actual vote ID
            "votes": []
        }
        
        # Process each row
        for row in rows[1:]:  # Skip the header row
            cells = row.find_all('td')
            if len(cells) < 3:
                continue  # Skip incomplete rows
            
            # Extract name, party, and vote
            name = cells[0].text.strip()
            party = cells[1].text.strip()
            vote = cells[2].text.strip()
            
            # Optional: Handle paired MPs (if the 4th column exists)
            paired = cells[3].text.strip() if len(cells) > 3 else None
            
            vote_entry = {
                "name": name,
                "party": party,
                "vote": vote,
            }
            if paired:
                vote_entry["paired"] = paired
            
            vote_data["votes"].append(vote_entry)
        
        # Save to JSON
        with open(output_file, "w", encoding="utf-8") as file:
            json.dump(vote_data, file, indent=4)
        print(f"Data saved to {output_file}")

    except Exception as e:
        print(f"Error occurred: {e}")

# Example usage
url = "https://www.ourcommons.ca/Members/en/votes/44/1/415"
output_file = "vote_44_1_415.json"
scrape_votes(url, output_file)
