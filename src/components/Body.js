import RestaurentCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

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
      <div className="filter">
        <div className="search-container">
          <input
            className="search-input"
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="search-btn"
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
        <button
          className="filter-btn"
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
      <div className="res-container">
        {filteredRestaurants.map((restaurant) => (
          <Link to={"restaurant/" + restaurant.id} key={restaurant.id}>
            <RestaurentCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
