import { IMG_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;

  const img = IMG_URL + resData.info.cloudinaryImageId;

  return (
    <div className="res-card">
      <img className="res-img" src={img}></img>
      <h3>{resData.info.name}</h3>
      <p>{resData.info.cuisines.join(",")}</p>
      <p>Average Rating: {resData.info.avgRating}</p>
      <p>Distance: {resData.info.distance} meters</p>
      <p>Cost: {resData.info.costForTwo}</p>
    </div>
  );
};
export default RestaurantCard;
