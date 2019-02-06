import Firebase from 'firebase'

const firebaseApp = Firebase.initializeApp({
    apiKey: "AIzaSyAwL0nt7CiIqDFCMpWjYEZGGkt-1mQK6j8",
    authDomain: "aaronmcguireportfolio.firebaseapp.com",
    databaseURL: "https://aaronmcguireportfolio.firebaseio.com",
    projectId: "aaronmcguireportfolio",
    storageBucket: "aaronmcguireportfolio.appspot.com",
    messagingSenderId: "873723005678"
});

// Export the database for components to use.
// If you want to get fancy, use mixins or provide / inject to avoid redundant imports.
export const db = firebaseApp.database();