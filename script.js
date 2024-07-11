// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Firebase configuration
// const firebaseConfig = {
//     apiKey: "AIzaSyD8Ffp_sLk1X_1iuGINHlNNv7QJPfeOmv0",
//     authDomain: "online-portfolio-wd.firebaseapp.com",
//     databaseURL: "https://YOUR_PROJECT_ID.firebaseio.com",
//     projectId: "online-portfolio-wd",
//     storageBucket: "online-portfolio-wd.appspot.com",
//     messagingSenderId: "429912322354",
//     appId: "1:429912322354:web:4c6636f222ecfea4c5e72b",
//     measurementId: "G-GS3F95T324"
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

document.getElementById('contact-form').addEventListener('submit', submitForm);

function submitForm(e) {
    e.preventDefault();

    // Get values
    var name = getInputVal('name');
    var email = getInputVal('email');
    var phone = getInputVal('phone');

    // Validate form
    if (!validateEmail(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    // Save contact info
    saveContactInfo(name, email, phone);

    // Show success message
    document.getElementById('success-message').style.display = 'block';

    // Hide success message after 3 seconds
    setTimeout(function() {
        document.getElementById('success-message').style.display = 'none';
    }, 3000);

    // Clear form
    document.getElementById('contact-form').reset();
}

// Function to get form values
function getInputVal(id) {
    return document.getElementById(id).value;
}

// Save contact info to firebase
function saveContactInfo(name, email, phone) {
    var newContactInfoRef = firebase.database().ref('contacts').push();
    newContactInfoRef.set({
        name: name,
        email: email,
        phone: phone
    });
}

// Function to validate email
function validateEmail(email) {
    var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}
