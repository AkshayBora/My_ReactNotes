import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { Swiggy_Api_URL } from "../utils/constants";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../Hooks/useOnlineStatus";
import UserOffline from "./UserOffline";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  console.log("Body", listOfRestaurant);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(Swiggy_Api_URL);
    const json = await data.json();
    console.log(json);
    //Optional Chaining
    setListOfRestaurant(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();

  if (!onlineStatus) return <UserOffline />;

  return listOfRestaurant?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="mb-8 z-[-1]">
        <div className="flex justify-center items-center max-w-full m-[30px]">
          <input
            type="text"
            className="w-2/5 box-border text-black bg-white border text-[large] font-medium shadow-[1px_2px_4px_rgba(0,0,0,0.08)] pl-3 pr-[15px] py-2 rounded-tl-[5px] rounded-bl-[5px] border-r-0 border-solid border-[#aabcca] focus:border-[#c26100] focus:outline-none"
            placeholder="Search a restaurant you want..."
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
              // console.log(e.target.value);
            }}
          />
          <button
            className="bg-[#c26100] text-white cursor-pointer shadow-[1px_2px_4px_rgba(0,0,0,0.08)] transition-all duration-[0.4s] ease-linear -ml-1 px-[22px] py-3 rounded-tr-[5px] rounded-br-[5px] border-[none] hover:bg-[rgb(58,58,218)] outline-none"
            onClick={() => {
              // Filter the restaurant card and update the UI
              // console.log(searchText);
              const SearchedRestaurant = listOfRestaurant.filter((res) =>
                res?.info?.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurant(SearchedRestaurant);
            }}
          >
            Search
          </button>
          <button
            className="bg-[#c26100] text-white cursor-pointer shadow-[1px_2px_4px_rgba(0,0,0,0.08)] transition-all duration-[0.4s] ease-linear ml-4 px-3.5 py-3 rounded-[5px] border-[none] hover:bg-[rgb(58,58,218)] outline-none"
            onClick={() => {
              const filteredList = listOfRestaurant.filter(
                (res) => res.info.avgRating > 4.2
              );
              setFilteredRestaurant(filteredList);
            }}
          >
            Top_Restaurant
          </button>
        </div>
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredRestaurant?.map((restaurant) => (
            <Link
              className="text-inherit no-underline list-none"
              key={restaurant.info.id}
              to={"/restaurants/" + restaurant.info.id}
            >
              {/* {restaurant.info.promoted?<RestaurantCardPromoted resData={restaurant} />:<RestaurantCard resData={restaurant} />} */}
              <RestaurantCard resData={restaurant} />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Body;
