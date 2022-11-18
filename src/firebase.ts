import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDh0qNs1-68LvmF5flGu65Z85ubT6tRqYY",
  authDomain: "react-to-do-list-lite-50378.firebaseapp.com",
  projectId: "react-to-do-list-lite-50378",
  storageBucket: "react-to-do-list-lite-50378.appspot.com",
  messagingSenderId: "889099543713",
  appId: "1:889099543713:web:9ae80928f84247cfa0fce0",
  measurementId: "G-8GRBQ5E9DE"
}

initializeApp(firebaseConfig)

export const db = getFirestore()
