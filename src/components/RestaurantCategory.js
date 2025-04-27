import ItemList from "./itemList";

const RestaurantCategory = ({ category, showItems, handleAccordian }) => {
  const handleClick = () => {
    handleAccordian();
  };
  return (
    <div>
      <div className="w-8/12 p-4 mx-auto my-4 bg-gray-100 shadow-lg rounded-lg">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-lg">
            {category?.title} ({category?.itemCards?.length})
          </span>
          <span>⬇️</span>
        </div>
        {showItems && <ItemList items={category.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
