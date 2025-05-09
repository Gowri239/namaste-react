import { useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const MenuCard = () => {
  const { resId } = useParams();
  const menu = useRestaurantMenu(resId);
  const [showIndex, setShowIndex] = useState(null);

  const handleAccordian = (index) => {
    if (index === showIndex) {
      setShowIndex(null);
    } else {
      setShowIndex(index);
    }
  };

  const restaurantDetails = menu?.data?.cards?.find(
    (card) => card?.card?.card?.info?.name
  )?.card?.card?.info;

  if (!restaurantDetails) return <Shimmer />;

  const { name, cuisines } = restaurantDetails;

  const categories =
    menu?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (card) =>
        card?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <h3 className="font-bold text-lg">{cuisines.join(",")}</h3>
      {categories.map((category, index) => (
        // controlled component
        <RestaurantCategory
          key={index}
          category={category?.card?.card}
          showItems={index === showIndex ? true : false}
          handleAccordian={() => handleAccordian(index)}
        />
      ))}
    </div>
  );
};

export default MenuCard;
