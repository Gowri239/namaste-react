import { CDN_URL } from "../utils/constants";

const RestaurentCard = (props) => {
  const { resData } = props;

  const { name, rating, image, cuisines, price, deliveryTime } = resData;

  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img className="res-logo" alt="Meghana Biryani" src={CDN_URL + image} />
      <h3>{name}</h3>
      <h4>{cuisines}</h4>
      <h4>{rating} starts</h4>
      <h4>{price}</h4>
      <h4>{deliveryTime} minutes</h4>
    </div>
  );
};

export default RestaurentCard;
