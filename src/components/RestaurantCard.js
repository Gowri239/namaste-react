import { CDN_URL } from "../utils/constants";

const RestaurentCard = (props) => {
  const { resData } = props;

  const { name, rating, image, cuisines, price, deliveryTime } = resData;

  return (
    <div
      data-testid="resCard"
      className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200"
    >
      <img className="rounded-lg" alt="Meghana Biryani" src={CDN_URL + image} />
      <h3 className="font-bold py-3 text-lg">{name}</h3>
      <h4>{cuisines}</h4>
      <h4>{rating} starts</h4>
      <h4>{price}</h4>
      <h4>{deliveryTime} minutes</h4>
    </div>
  );
};

export const withPromotedLabel = (RestaurentCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg">
          Promoted
        </label>
        <RestaurentCard {...props} />
      </div>
    );
  };
};

export default RestaurentCard;
