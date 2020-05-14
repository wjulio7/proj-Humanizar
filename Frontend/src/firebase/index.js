import firebase from "firebase/app"
import "firebase/storage"

const firebaseConfig = {
    apiKey: "AIzaSyDQxzxffEU8f7unkgIlqUSVMmiDKrZE5ck",
    authDomain: "webell.firebaseapp.com",
    databaseURL: "https://webell.firebaseio.com",
    projectId: "webell",
    storageBucket: "webell.appspot.com",
    messagingSenderId: "956637174378",
    appId: "1:956637174378:web:fc3958b6c722f54eb98813",
    measurementId: "G-PGT5QGWTCG"
};

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();

export {storage,  firebase as default}