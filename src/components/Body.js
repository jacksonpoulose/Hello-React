import RestaurantCard from "./RestaurantCard";
import resList from "../utils/ResData";
import { useState, useEffect } from "react";

const Body = () => {
  const restaurant = resList[0].data.cards[4].card.card.gridElements.infoWithStyle.restaurants;
  const [res, setRes] = useState(restaurant);

  

  return (
    <div className="body">
      <input type="text" placeholder="Search..." />
      <button className="search">search</button>
      <div>
        <button
          className="filter-btn"
          onClick={() => {
            const filtered = res.filter((restaurant) => restaurant.info.avgRating > 4.4);
            setRes(filtered);
          }}
        >
          Top rated restaurants
        </button>
      </div>

      <div className="res-container">
        {res.map((restaurants) => (
          <RestaurantCard key={restaurants.info.id} resData={restaurants} />
        ))}
      </div>
    </div>
  );
};
export default Body;
