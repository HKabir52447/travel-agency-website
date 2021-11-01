import React, { useEffect, useState } from "react";
import Places from "../Places/Places";
import "./Services.css";
const Services = () => {
  const [places, setPlaces] = useState([]);
  useEffect(() => {
    fetch("https://shocking-dungeon-19775.herokuapp.com/Tourist-Places")
      .then((res) => res.json())
      .then((data) => setPlaces(data));
  }, []);
  return (
    <div className="container">
      <div className="row pb-5">
        <div className="col-md-12">
          <h2 className="text-primary pt-4">Famous Tourist Places</h2>
          <div className="places-container">
            {places.map((place, index) => (
              <Places key={places.id} place={place} index={index}></Places>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
