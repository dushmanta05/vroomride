import React from "react";
import { getDatabase, ref, onValue } from "firebase/database";
import app from "../../firebase";

const db = getDatabase(app);
const starCountRef = ref(db, "bookings/");
onValue(starCountRef, (snapshot) => {
  const data = snapshot.val();
  console.log(data);
});

console.log("Hello");
const Firebase = () => {
  return <div>Firebase</div>;
};

export default Firebase;
