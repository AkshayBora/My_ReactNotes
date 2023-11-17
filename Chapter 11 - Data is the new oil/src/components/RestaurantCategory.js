import { useState } from "react";
import ItemList from "./ItemList";
import RestaurantMenuCard from "./RestaurantMenuCard";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setShowIndex();
    // setOpen(!open);
  };

  console.log(data);
  return (
    // <div>
    //   {/* Header  */}
    //   <div className="w-7/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
    //     <div
    //       className="flex justify-between cursor-pointer"
    //       onClick={handleClick}
    //     >
    //       <span className="font-bold text-lg">
    //         {data.title} ({data.itemCards.length})
    //       </span>
    //       <span>🔽</span>
    //     </div>
    //     {showItems && <ItemList items={data.itemCards} />}
    //   </div>
    // </div>
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
              <i class="fa-solid fa-angle-up"></i>
            ) : (
              <i class="fa-solid fa-angle-down"></i>
            )}
          </span>
        </div>
        {showItems && <RestaurantMenuCard items={data.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
