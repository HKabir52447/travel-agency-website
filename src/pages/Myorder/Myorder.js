import React, { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";
import "./Myorder.css";

const Myorder = () => {
  const {user} = useAuth();
  const [myorder, setMyorder] = useState([]);
  const [isDelete, setIsDelete] = useState(null)
  useEffect(() => {
    fetch(`http://localhost:4000/bookingPlace`)
      .then((res) => res.json())
      .then((data) => setMyorder(data));
  }, [isDelete]);
  const handleDelete =(id) =>{
fetch(`http://localhost:4000/deleteOrder/${id}`, {
    method: 'DELETE',
    headers: {'content-type': 'application/json'},
})
.then(res => res.json())
.then(data => {
  if(data.deletedCount){
    setIsDelete(true)
  } else{
    setIsDelete(false)
  }
});
console.log(id);
  };
  return (
    <div className="container">
      <h3 className='text-primary py-4'>My order</h3>
      <div className='border py-3 my-3'>
      <h4>User Name: {user.displayName}</h4>
      <p>User Email: {user.email}</p>
      </div>

      <div className="order-container pb-5">
        {myorder.map((order) => (
          <div className="order">
            <img className="img-fluid w-75" src={order.img} alt="" />
            <h3 className='text-primary pt-3'>{order.name}</h3>
            <h4>{order.country}</h4>
            <h5> ${order.price} </h5>
            <button onClick={()=> handleDelete(order._id)} className='btn btn-outline-danger px-4 fs-5'>Remove</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Myorder;
