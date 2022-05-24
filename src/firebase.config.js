// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDxAJnEOW0Au9-9cniw_KHXNBJ_GkeH-2Q",
  authDomain: "userlist-db91b.firebaseapp.com",
  projectId: "userlist-db91b",
  storageBucket: "userlist-db91b.appspot.com",
  messagingSenderId: "644330381954",
  appId: "1:644330381954:web:589db28df22ee5a5df8a9b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// async function getCities(db) {
//     const citiesCol = collection(db, 'cities');
//     const citySnapshot = await getDocs(citiesCol);
//     const cityList = citySnapshot.docs.map(doc => doc.data());
//     return cityList;
//   }
