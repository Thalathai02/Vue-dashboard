import { firebase } from "@firebase/app";
import "@firebase/firestore";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBsuyAKSorFTEDKjMCZqrA_BkgwBUudYaA",
    authDomain: "myvue-7708f.firebaseapp.com",
    databaseURL: "https://myvue-7708f.firebaseio.com",
    projectId: "myvue-7708f",
    storageBucket: "myvue-7708f.appspot.com",
    messagingSenderId: "83849386716",
    appId: "1:83849386716:web:9a1160d8d6a13332abb219",
    measurementId: "G-4PGFGZRBKE"
});

export const db = firebaseApp.firestore();