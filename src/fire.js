import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyDstMCduysfcAOSuOVjQm5cTxZ1uOEu_Bw",
    authDomain: "glms-e42b5.firebaseapp.com",
    databaseURL: "https://glms-e42b5.firebaseio.com",
    projectId: "glms-e42b5",
    storageBucket: "glms-e42b5.appspot.com",
    messagingSenderId: "298195014450",
    appId: "1:298195014450:web:9ab4fcab9ddcd07db13d2b",
    measurementId: "G-VS5WKG0QCF"
};

const fire = firebase.initializeApp(firebaseConfig);
export default fire;