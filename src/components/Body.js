import RestaurentCard from "./RestaurantCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { withPromotedLabel } from "./RestaurantCard";
import UserContext from "../utils/useContext";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  const { loggedInUser, setUserName } = useContext(UserContext);

  const RestaurentWithLabel = withPromotedLabel(RestaurentCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.97530&lng=77.59100&page_type=DESKTOP_WEB_LISTING"
    );
    const res = await data.json();
    const restaurants =
      res?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

    const transformedData = restaurants?.map((res) => {
      const info = res?.info;

      return {
        id: info?.id,
        name: info?.name,
        image: info?.cloudinaryImageId,
        rating: info?.avgRating,
        price: info?.costForTwo,
        rating: info?.avgRating,
        cuisines: info?.cuisines.join(", "),
        deliveryTime: info?.sla.deliveryTime,
      };
    });
    setListOfRestaurants(transformedData);
    setFilteredRestaurants(transformedData);
  };

  const onlineStatus = useOnlineStatus();

  if (!onlineStatus) {
    return (
      <h1>
        Looks like you are offline!!! Please check your internet connection
      </h1>
    );
  }

  return listOfRestaurants.length == 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="flex items-center">
        <div className="m-4 p-4">
          <input
            className="h-8 border border-solid border-black p-2"
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="px-4 py-1 bg-green-100 m-4 rounded-lg cursor-pointer"
            onClick={() => {
              const searchRestaurants = listOfRestaurants.filter((res) =>
                res.name.toLowerCase().includes(searchText.toLocaleLowerCase())
              );
              setFilteredRestaurants(searchRestaurants);
            }}
          >
            Search
          </button>
        </div>
        <div>
          <button
            className="px-4 py-1 bg-gray-200 rounded-lg cursor-pointer"
            onClick={() => {
              const filRestaurants = filteredRestaurants.filter(
                (restaurant) => restaurant.rating > 4.3
              );
              setFilteredRestaurants(filRestaurants);
            }}
          >
            Top rated Restaurants
          </button>
        </div>
        <div className="m-4 p-4">
          user name:
          <input
            className="border border-solid border-black p-2 h-8 cursor-pointer"
            type="text"
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurants.map((restaurant) => (
          <Link to={"restaurant/" + restaurant.id} key={restaurant.id}>
            {restaurant.rating > 4.2 ? (
              <RestaurentWithLabel resData={restaurant} />
            ) : (
              <RestaurentCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
