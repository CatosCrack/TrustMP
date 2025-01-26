document.querySelector("#bill-one").addEventListener("click", ()=> {
    window.location.href = '../html/bill_details.html';

})

document.querySelector(".back-button").addEventListener('click', () => {
    window.location.href = '../index.html';
})

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

// Fetch all bills from Firestore
async function fetchBills() {
  try {
    const snapshot = await getDocs(billsCollectionRef);
    const bills = [];
    snapshot.forEach((doc) => {
      bills.push(doc.data());
    });
    return bills;
  } catch (error) {
    console.error("Error fetching bills:", error);
    return [];
  }
}

// Update a specific bill container with Firestore data
function updateBillHTML(container, bill, memberName) {
  if (!container || !bill) return;

  // Extract details from the bill
  const billName = bill.name || "Unknown Bill";
  const billNumber = bill.bill_number || "N/A";
  const billDate = bill.date_submitted
    ? new Date(bill.date_submitted).toLocaleDateString()
    : "N/A";
  const billCategories = bill.categories
    ? bill.categories.map((category) => category.trim()).join(", ")
    : "N/A";

  // Find the vote of the specified member
  const memberVote = bill.votes.find((vote) => vote[memberName])?.[memberName] || "No Vote";

  // Update the HTML content of the container
  container.querySelector(".bill-title").textContent = `${billNumber} ${billName}`;
  container.querySelector(".bill-details p:nth-child(2)").textContent = `Bill Date: ${billDate}`;
  container.querySelector(".bill-details p:nth-child(3)").textContent = `Vote: ${memberVote}`;
  container.querySelector(".bill-category").textContent = billCategories;
}

// Populate the HTML with specific bills
async function populateBills() {
  const bills = await fetchBills();

  if (bills.length < 3) {
    console.warn("Not enough bills in the database to populate the required divs.");
    return;
  }

  // Target the first and second bill containers
  const firstBillContainer = document.getElementById("bill-one");
  const secondBillContainer = document.querySelectorAll(".bill")[1]; // Target the second div

  // Use the 1st bill for the first div and the 3rd bill for the second div
  const firstBill = bills[4]; // First bill from the Firestore collection
  const thirdBill = bills[6]; // Third bill from the Firestore collection

  // Update the HTML for both bill containers
  updateBillHTML(firstBillContainer, firstBill, "Anita Anand");
  updateBillHTML(secondBillContainer, thirdBill, "Anita Anand");
}

// Call the function to populate bills
populateBills();
