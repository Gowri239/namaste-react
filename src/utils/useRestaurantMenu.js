import { MENU_URL } from "./constants";
import { useEffect, useState } from "react";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState();
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const resp = await fetch(MENU_URL + resId);
    const data = await resp.json();
    setResInfo(data);
  };
  return resInfo;
};

export default useRestaurantMenu;
