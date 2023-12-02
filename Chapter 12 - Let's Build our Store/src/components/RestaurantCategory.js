import RestaurantMenuCard from "./RestaurantMenuCard";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  const handleClick = () => {
    setShowIndex();
  };

  //console.log(setShowIndex);
  return (
    <div>
      <div className="w-10/12 mx-auto my-4 bg-gray-100 shadow-lg p-4">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="text-lg text-[#3F4255] uppercase font-bold pl-3">
            {data.title} ({data.itemCards.length})
          </span>
          <span>
            {showItems ? (
              <i className="fa-solid fa-angle-up"></i>
            ) : (
              <i className="fa-solid fa-angle-down"></i>
            )}
          </span>
        </div>
        {showItems && <RestaurantMenuCard items={data.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
