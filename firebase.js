import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBP5In534aR2Z5BZf5Mp86QFrmXfWfCJMs",
  authDomain: "vroom-ride.firebaseapp.com",
  databaseURL:
    "https://vroom-ride-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "vroom-ride",
  storageBucket: "vroom-ride.appspot.com",
  messagingSenderId: "313872603412",
  appId: "1:313872603412:web:94f9cdd9d354e671974a01",
  measurementId: "G-K93MFB0MHE",
};

const app = initializeApp(firebaseConfig);

export default app;
