import RestaurantCard from "./RestaurantCard";
import resList from "../utils/ResData";
import { useState } from "react";

const Body = () => {
const [res,setRes] =useState(resList);
 
const filtered = res.filter((res) => res.avgRating > 4);


const testfilter = res.filter((res) =>
  res.cuisine.some((cuisine) => cuisine.includes("burger"))
);

console.log(testfilter);



  
  return(
  <div className="body">
    <div className="search">search</div>
    <div>
      <button className="filter-btn" onClick={() => {setRes(filtered)} }>Top rated restaurants</button>
    </div>
    <button className="filter-test" onClick={() => {setRes(testfilter)}}>Test Filter</button>

    <div className="res-container">
     {res.map((res) => (
       <RestaurantCard key={res.id} resData={res} />
     ))}
    </div>
  </div>
  )
}
export default Body;