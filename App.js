import React from "react";
import ReactDOM from "react-dom/client";
import resList from "./ResData";

const Header = ()=>{
  return(
    <div className='header'>
      <div className="logo">
        <img src="https://img.freepik.com/premium-vector/food-ordering-app-logo-with-points-fork-shapes-center_666184-195.jpg" alt="Food Villa Logo"></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
      <div className="cart-icon">
        <img src="https://img.icons8.com/material-outlined/24/000000/shopping-cart.png" alt="Cart Icon"></img>
      </div>
    </div>
  )
}

const RestaurantCard = (props)=>{
  const {resData} = props;

  const {name, cuisine, avgRating, distance, costForTwo, image} = resData;
  return(
    <div className="res-card">
      <img className="res-img" src={image}></img>
      <h3>{name}</h3>
      <p>{cuisine.join(", ")}</p>
      <p>Average Rating: {avgRating}</p>
      <p>Distance: {distance} meters</p>
      <p>Cost for Two: ₹{costForTwo}</p>
    </div>
  )
}

const Body = ()=>{
  return(
  <div className="body">
    <div className="search">search</div>
    <div className="res-container">
     {resList.map((res) => (
       <RestaurantCard key={res.id} resData={res} />
     ))}
    </div>
  </div>
  )
}

  
const AppLayout = ()=>{
  return(
    <div className='app'>
      <Header />
      <Body />
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AppLayout />
);








