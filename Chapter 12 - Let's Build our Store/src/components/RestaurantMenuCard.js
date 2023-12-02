import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import { CDN_URL } from "../utils/constants";

const RestaurantMenuCard = ({ items }) => {
  // console.log(props);
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    //dispatch an action
    dispatch(addItem(item));
  };

  return (
    <div className="relative">
      {items.map((item) => (
        <div className="flex justify-around w-11/12 md:w-11/12 mx-auto gap-4 p-3 m-4 shadow-2xl bg-white hover:shadow-stone-300 transition ease-in-out delay-50 hover:scale-105 md:hover:scale-103 duration-200 rounded-md">
          <div className="w-9/12">
            <div className="my-1 rounded-md">
              <img
                width="20"
                height="20"
                src="https://img.icons8.com/color/48/vegetarian-food-symbol.png"
                alt="vegetarian"
              />
            </div>
            <h2 className="font-2xl font-bold text-[#3F4255] mb-1">
              {item?.card?.info?.name}
            </h2>
            <p className="text-zinc-600 tracking-wider text-sm md:block">
              {item?.card?.info?.category}
            </p>
            <p className="text-slate-800 my-2 font-semibold">
              ₹
              {item?.card?.info?.price / 100 ||
                item?.card?.info?.defaultPrice / 100}
            </p>
          </div>
          <div className="relative flex flex-col gap-2">
            <img
              className="w-42 h-16 object-cover rounded-md"
              src={CDN_URL + item?.card?.info?.imageId}
            />

            <button
              className=" bg-lime-200 text-slate-600 hover:bg-lime-300 font-bold p-2 uppercase transition ease-in-out delay-50 hover:scale-105 duration-200 rounded-md"
              onClick={() => handleAddItem(item)}
            >
              Add Item +
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RestaurantMenuCard;
