// Import Firebase functions
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

// Reference to the "Bills" collection
const billsCollectionRef = collection(database, "Bills");

// Fetch data from Firestore
async function fetchFirstBill() {
  try {
    const snapshot = await getDocs(billsCollectionRef);
    const bills = [];
    snapshot.forEach((doc) => {
      bills.push(doc.data());
    });
    return bills.length > 4 ? bills[4] : null; // Return the first bill
  } catch (error) {
    console.error("Error fetching bills:", error);
  }
}

// Populate bill details in the HTML
async function populateBillDetails() {
  const bill = await fetchFirstBill();

  if (!bill) {
    console.error("No bills found in Firestore.");
    return;
  }

  // Extract details
  const billName = bill.name || "Unknown Bill";
  const billNumber = bill.bill_number || "N/A";
  const billDate = bill.date_submitted
    ? new Date(bill.date_submitted).toLocaleDateString()
    : "N/A";
  const billCategories = bill.categories
    ? bill.categories.map((category) => category.trim()).join(", ")
    : "N/A";
  const billSummary = bill.summary || "No summary available.";

  // Find Anita Anand's vote
  const anitaVote = bill.votes.find(
    (vote) => vote["Anita Anand"]
  )?.["Anita Anand"] || "No Vote";

  // Update the HTML
  document.querySelector(".title h1").textContent = billName;
  document.querySelector(".title p").textContent = `Bill Date: ${billDate}`;
  document.querySelector(".bill-id h2").textContent = billNumber;
  document.querySelector(".category h1").textContent = billCategories;
  document.querySelector(".category p").textContent = `Vote: ${anitaVote}`;

  // Update the summary in the middle section
  const responseBox = document.querySelector(".response-box");
  responseBox.innerHTML = `<p>${billSummary}</p>`;
}

// Call the function to populate bill details
populateBillDetails();

document.querySelector("#submitButton").addEventListener("click", () => {
  window.location.href = "../html/chatbot.html";
})

document.querySelector(".back-button").addEventListener('click', () => {
  window.location.href = '../html/mp_person.html';
})
