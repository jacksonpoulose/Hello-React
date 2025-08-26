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
export default RestaurantCard;