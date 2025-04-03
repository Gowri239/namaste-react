import { CUISINE_LOGO } from "../utils/constants";

const RestaurentCard = (props) => {
  const { resName, cuisine } = props;
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img className="res-logo" alt="Meghana Biryani" src={CUISINE_LOGO} />
      <h3>{resName}</h3>
      <h4>{cuisine}</h4>
      <h4>4.4 star</h4>
      <h4>38 minutes</h4>
    </div>
  );
};

export default RestaurentCard;
