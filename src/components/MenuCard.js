import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { MENU_URL } from "../utils/constants";
import Shimmer from "./shimmer";

const MenuCard = () => {
  const { resId } = useParams();
  const [menu, setMenu] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const resp = await fetch(MENU_URL + resId);
    const data = await resp.json();
    console.log("data", data);
    setMenu(data);
  };

  if (menu === null) {
    return <Shimmer />;
  }

  const { name, cuisines } = menu?.data?.cards[2]?.card?.card?.info;

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
