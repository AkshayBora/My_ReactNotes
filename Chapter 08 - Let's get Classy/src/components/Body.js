import RestaurantCard from "./RestaurantCard";
import { Swiggy_Api_URL } from "../utils/constants";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

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

  return listOfRestaurant?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="newbody">
        <div className="search-container">
          <input
            type="text"
            className="search-input"
            placeholder="Search a restaurant you want..."
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
              // console.log(e.target.value);
            }}
          />
          <button
            className="search-btn"
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
            className="Restaurant-btn"
            onClick={() => {
              const filteredList = listOfRestaurant.filter(
                (res) => res.info.avgRating > 4
              );
              setFilteredRestaurant(filteredList);
            }}
          >
            Top_Restaurant
          </button>
        </div>
        <div className="res-container">
          {filteredRestaurant?.map((restaurant) => (
            <Link
              key={restaurant.info.id}
              to={"/restaurants/" + restaurant.info.id}
            >
              <RestaurantCard resData={restaurant} />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Body;
