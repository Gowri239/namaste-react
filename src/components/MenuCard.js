import { useParams } from "react-router-dom";
import Shimmer from "./shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const MenuCard = () => {
  const { resId } = useParams();
  const menu = useRestaurantMenu(resId);

  const restaurantDetails = menu?.data?.cards?.find(
    (card) => card?.card?.card?.info?.name
  )?.card?.card?.info;

  if (!restaurantDetails) return <Shimmer />;

  const { name, cuisines } = restaurantDetails;

  const { itemCards } =
    menu?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card;

  return (
    <div>
      <h1>{name}</h1>
      <h3>{cuisines.join(",")}</h3>
      {itemCards?.map((item, index) => (
        <li key={index}>
          {item?.card?.info?.name} - {"Rs."}
          {item?.card?.info?.price / 100 ||
            item?.card?.info?.defaultPrice / 100}
        </li>
      ))}
    </div>
  );
};

export default MenuCard;
