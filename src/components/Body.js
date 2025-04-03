import RestaurentCard from "./RestaurantCard";

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <RestaurentCard
          resName="Meghana Foods"
          cuisine="Biryani, South Indian Food, Asian"
        />
        <RestaurentCard
          resName="KFC"
          cuisine="Biryani, South Indian Food, Asian"
        />
      </div>
    </div>
  );
};

export default Body;
