import { MENU_URL } from "./constants";
import { useEffect, useState } from "react";

const useRestaurantMenu = async (resId) => {
  const [resInfo, setResInfo] = useState();
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const resp = await fetch(MENU_URL + resId);
    const data = resp.json();
    setResInfo(data);
  };
  return resInfo;
};

export default useRestaurantMenu;
