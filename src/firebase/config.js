import * as firebase from 'firebase/app'
import 'firebase/storage'
import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyBWbdCP9rnlbF4OuuZTuRcE5Bc3ieC-Rig",
    authDomain: "ninja-firegram-542c3.firebaseapp.com",
    databaseURL: "https://ninja-firegram-542c3.firebaseio.com",
    projectId: "ninja-firegram-542c3",
    storageBucket: "ninja-firegram-542c3.appspot.com",
    messagingSenderId: "288765036284",
    appId: "1:288765036284:web:a253c5155efe07cb6ab979"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage=firebase.storage()
const projectFirestore =firebase.firestore()
const timestamp=firebase.firestore.FieldValue.serverTimestamp

export {projectStorage,projectFirestore,timestamp}