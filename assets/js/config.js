var firebaseConfig = {
    //CUbuntu
    apiKey: "AIzaSyBEkQ7bTpJT-6SYL3fg60YMqVmeGNF_wfY",
    authDomain: "chatapp-59082.firebaseapp.com",
    databaseURL: "https://chatapp-59082.firebaseio.com",
    projectId: "chatapp-59082",
    storageBucket: "chatapp-59082.appspot.com",
    messagingSenderId: "710294834145",
    appId: "1:710294834145:web:497edc71447fb2304560a0",
    measurementId: "G-9EQ1W8XGDC"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
const db = firebase.firestore();
const storage = firebase.storage();
