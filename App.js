import React from "react";
import ReactDOM from "react-dom/client";

/**
 *
 * Header
 *    - Logo
 *    - Nav Items
 * Body
 *    - Search bar
 *    - Restaurent cards
 *        - Restaurent card
 *            - Image
 *            - Name of res, start rating , eta
 * Footer
 *    - CopyRights
 *    - Links
 *    - Address
 *    - Contact
 */

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://thumbs.dreamstime.com/b/food-delivery-logo-design-template-fast-delivery-service-sign-food-delivery-app-vector-logo-design-template-167491511.jpg"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurentCard = (props) => {
  const { resName, cuisine } = props;
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo"
        alt="Meghana Biryani"
        src="https://media-assets.swiggy.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/xqwpuhgnsaf18te7zvtv"
      />
      <h3>{resName}</h3>
      <h4>{cuisine}</h4>
      <h4>4.4 star</h4>
      <h4>38 minutes</h4>
    </div>
  );
};

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

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
