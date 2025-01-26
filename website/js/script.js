document.querySelector("#anitaAnandDiv").addEventListener('click', () => {
    window.location.replace("../website/html/mp_person.html");
});

const suggestionsData = [
    {
        text: "Rachel Bendayan",
        subtitle: "Liberal Party of Canada",
        description: "Outremont",
        image: "https://www.pm.gc.ca/sites/pm/files/styles/portrait_square/public/media/minister/2025-01/Bendayan.jpg?itok=d9qoWO68"
    },
    {
        text: "Bill Blair",
        subtitle: "Conservative Party of Canada",
        description: "Scarborough Southwest",
        image: "https://www.pm.gc.ca/sites/pm/files/styles/portrait_square/public/media/minister/no-date/blair_200x200_1.jpg?itok=I19h4LMp"
    },
    {
        text: "Élisabeth Brière",
        subtitle: "Liberal Party of Canada",
        description: "Sherbrooke",
        image: "https://www.pm.gc.ca/sites/pm/files/styles/portrait_square/public/media/minister/2024-12/Briere.png?itok=D3_TZrKU"
    },
    {
        text: "François-Philippe Champagne",
        subtitle: "Conservative Party of Canada",
        description: "Saint-Maurice—Champlain",
        image: "https://www.pm.gc.ca/sites/pm/files/styles/portrait_square/public/media/minister/no-date/champagne_200x200_0.jpg?itok=0qhpFKQe"
    },
    {
        text: "Jean-Yves Duclos",
        subtitle: "Liberal Party of Canada",
        description: "Laval",
        image: "https://www.pm.gc.ca/sites/pm/files/styles/portrait_square/public/media/minister/no-date/duclos_200x200_0_0.jpg?itok=kIvfvFPD"
    },
    {
        text: "Terry Duguid",
        subtitle: "Conservative Party of Canada",
        description: "Winnipeg South",
        image: "https://www.pm.gc.ca/sites/pm/files/styles/portrait_square/public/media/minister/2024-12/Duguid_v1.jpg?itok=H7t4DFut"
    },
    {
        text: " Nate Erskine-Smith",
        subtitle: "Conservative Party of Canada",
        description: "Beaches—East York",
        image: "https://www.pm.gc.ca/sites/pm/files/styles/portrait_square/public/media/minister/2024-12/Erskine-Smith.jpg?itok=P2TQtFiu"
    }
];

const searchBar = document.getElementById('search-bar');
const suggestionsBox = document.getElementById('suggestions');

searchBar.addEventListener('input', () => {
    const query = searchBar.value.toLowerCase();
    suggestionsBox.innerHTML = ''; // Clear previous suggestions
    
    if (query) {
        const filteredSuggestions = suggestionsData.filter(item =>
            item.text.toLowerCase().includes(query) ||
            item.subtitle.toLowerCase().includes(query) ||
            item.description.toLowerCase().includes(query)
        );

        filteredSuggestions.forEach(suggestion => {
            const suggestionDiv = document.createElement('div');
            suggestionDiv.classList.add('suggestion-item');

            const img = document.createElement('img');
            img.src = suggestion.image;

            const content = document.createElement('div');
            content.classList.add('suggestion-content');

            const title = document.createElement('div');
            title.classList.add('suggestion-title');
            title.textContent = suggestion.text;

            const subtitle = document.createElement('div');
            subtitle.classList.add('suggestion-subtitle');
            subtitle.textContent = suggestion.subtitle;

            const description = document.createElement('div');
            description.classList.add('suggestion-description');
            description.textContent = suggestion.description;

            content.appendChild(title);
            content.appendChild(subtitle);
            content.appendChild(description);
            
            suggestionDiv.appendChild(img);
            suggestionDiv.appendChild(content);

            suggestionDiv.addEventListener('click', () => {
                searchBar.value = suggestion.text;
                suggestionsBox.innerHTML = ''; // Clear suggestions after selection
            });

            suggestionsBox.appendChild(suggestionDiv);
        });
    }
});



import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-firestore.js";

// Firebase configuration
const firebaseConfig = {
    apiKey: precess.env.FIREBASE_API,
    authDomain: "hackathon-448621.firebaseapp.com",
    projectId: "hackathon-448621",
    storageBucket: "hackathon-448621.firebasestorage.app",
    messagingSenderId: "27974807699",
    appId: "1:27974807699:web:6f8916629526d75438dd66",
    measurementId: "G-9N4TEVCL0Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getFirestore(app);

// Reference the MPS collection
const mpsCollection = collection(database, "MPS");

// Fetch MPs data
async function fetchMPsData() {
  const snapshot = await getDocs(mpsCollection);
  const mpsData = {};
  snapshot.forEach((doc) => {
    mpsData[doc.id] = doc.data(); // Document ID is the MP's name
  });
  return mpsData;
}

// Update MP cards dynamically
async function updateMPCards() {
  const mpsData = await fetchMPsData();

  // Loop through the existing cards
  const cards = document.querySelectorAll(".card");
  cards.forEach((card) => {
    const nameElement = card.querySelector(".name");
    const partyElement = card.querySelector(".info p:nth-child(2)");
    const districtElement = card.querySelector(".info p:nth-child(3)");

    // Match the card's MP name with Firestore data
    const mpName = nameElement.textContent.trim();
    if (mpsData[mpName]) {
      const mpData = mpsData[mpName];
      partyElement.textContent = mpData.party || "Party not available";
      districtElement.textContent = `${mpData.riding}, ${mpData.riding_province}` || "District not available";
    }
  });
}

// Call the function to update the cards
updateMPCards();