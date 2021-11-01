import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import "./Places.css";

const Places = (props) => {
  const {user, logOut} = useAuth();
  const { name, description, country, img, price } = props.place;
  const index = props.index;

  const [booking, setBooking] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/Tourist-Places")
      .then((res) => res.json())
      .then((data) => setBooking(data));
  }, []);
  const handleBooking =(index) =>{
    const data = booking[index];
    data.email = `${user.email}`;
    
    fetch("http://localhost:4000/bookingPlace", {
    method: "POST",
    headers:{"content-type": "application/json"},
    body: JSON.stringify(data)  
    });
  }
  return (
    <div className='places'>
      <div className='place'>
          <img className='img-fluid' src={img} alt=''/>
      <h3 className='pt-3'> {name}</h3>
      <h4>Country: {country}</h4>
      <p>{description}</p>
      <NavLink to='/myorder'>
      <button onClick={()=> handleBooking(index)} className='btn btn-outline-primary px-4 fs-5 fw-bold mt-2'>Booking</button>
      </NavLink>
      </div>
    </div>
  );
};

export default Places;
