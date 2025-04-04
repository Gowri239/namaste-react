import RestaurentCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./shimmer";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);

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
    console.log("restaurents", restaurants[0].info);
    setListOfRestaurants(transformedData);
  };

  if (listOfRestaurants.length == 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredRestaurants = listOfRestaurants.filter(
              (restaurant) => restaurant.rating > 4.5
            );
            setListOfRestaurants(filteredRestaurants);
          }}
        >
          Top rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurentCard key={restaurant.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
