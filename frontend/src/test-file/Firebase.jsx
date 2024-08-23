import React from "react";
import { getDatabase, ref, onValue, set, update } from "firebase/database";
import app from "../../firebase";

const db = getDatabase(app);

const Firebase = () => {
  // Reading data from Firebase database

  const starCountRef = ref(db, "bookings/");
  onValue(starCountRef, (snapshot) => {
    const data = snapshot.val();
    console.log(data);
  });

  // Writing data to Firebase database

  const carNum = "cars5";
  const writeCarData = (carNum) => {
    set(ref(db, "cars/" + carNum), {
      carId: 5,
      name: "Maruti",
      availability: true,
      price: 500,
    });
  };

  // Update data in Firebase database

  const updateCarNum = "cars4";
  const updateCarData = (updateCarNum) => {
    const carRef = ref(db, "cars/" + updateCarNum);
    update(carRef, {
      availability: false,
    });
  };

  return (
    <>
      <div className="container">Firebase</div>
      <div className="container mt-3">
        <button
          onClick={() => writeCarData(carNum)}
          className="btn btn-outline-success m-3"
        >
          Add New Car
        </button>
        <button
          onClick={() => updateCarData(updateCarNum)}
          className="btn btn-outline-danger m-3"
        >
          Book your Car
        </button>
      </div>
    </>
  );
};

export default Firebase;
