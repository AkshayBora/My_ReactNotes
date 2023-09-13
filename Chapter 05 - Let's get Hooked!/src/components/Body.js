// not using keys(not acceptable) <<<<< index as key <<<<<<< unique id(best practice)
import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  //Local State variable,It is a superPowerfull variable
  // const [listOfRestaurant, setListOfRestaurant] = useState([
  //   {
  //     info: {
  //       id: "356627",
  //       name: "KFC",
  //       cloudinaryImageId: "d2zhmkic7glofbpvzqt1",
  //       costForTwo: "₹250 for two",
  //       cuisines: ["Fast Food", "Snacks", "Street Food"],
  //       avgRating: 3.8,
  //       feeDetails: {
  //         restaurantId: "356627",
  //         totalFee: 4000,
  //       },
  //       sla: {
  //         deliveryTime: 25,
  //         slaString: "25 mins",
  //       },
  //     },
  //   },
  //   {
  //     info: {
  //       id: "356628",
  //       name: "Dominos",
  //       cloudinaryImageId: "d2zhmkic7glofbpvzqt1",
  //       costForTwo: "₹250 for two",
  //       cuisines: ["Fast Food", "Snacks", "Street Food"],
  //       avgRating: 4.5,
  //       feeDetails: {
  //         restaurantId: "356627",
  //         totalFee: 4000,
  //       },
  //       sla: {
  //         deliveryTime: 25,
  //         slaString: "25 mins",
  //       },
  //     },
  //   },
  //   {
  //     info: {
  //       id: "356629",
  //       name: "MCD",
  //       cloudinaryImageId: "d2zhmkic7glofbpvzqt1",
  //       costForTwo: "₹250 for two",
  //       cuisines: ["Fast Food", "Snacks", "Street Food"],
  //       avgRating: 4.1,
  //       feeDetails: {
  //         restaurantId: "356627",
  //         totalFee: 4000,
  //       },
  //       sla: {
  //         deliveryTime: 25,
  //         slaString: "25 mins",
  //       },
  //     },
  //   },
  // ]);

  const [listOfRestaurant, setListOfRestaurant] = useState(resList);

  //Normal JS variable
  // let listOfRestaurantJS = [
  //   {
  //     info: {
  //       id: "356627",
  //       name: "KFC",
  //       cloudinaryImageId: "d2zhmkic7glofbpvzqt1",
  //       costForTwo: "₹250 for two",
  //       cuisines: ["Fast Food", "Snacks", "Street Food"],
  //       avgRating: 3.8,
  //       feeDetails: {
  //         restaurantId: "356627",
  //         totalFee: 4000,
  //       },
  //       sla: {
  //         deliveryTime: 25,
  //         slaString: "25 mins",
  //       },
  //     },
  //   },
  //   {
  //     info: {
  //       id: "356628",
  //       name: "Dominos",
  //       cloudinaryImageId: "d2zhmkic7glofbpvzqt1",
  //       costForTwo: "₹250 for two",
  //       cuisines: ["Fast Food", "Snacks", "Street Food"],
  //       avgRating: 4.5,
  //       feeDetails: {
  //         restaurantId: "356627",
  //         totalFee: 4000,
  //       },
  //       sla: {
  //         deliveryTime: 25,
  //         slaString: "25 mins",
  //       },
  //     },
  //   },
  //   {
  //     info: {
  //       id: "356629",
  //       name: "MCD",
  //       cloudinaryImageId: "d2zhmkic7glofbpvzqt1",
  //       costForTwo: "₹250 for two",
  //       cuisines: ["Fast Food", "Snacks", "Street Food"],
  //       avgRating: 4.1,
  //       feeDetails: {
  //         restaurantId: "356627",
  //         totalFee: 4000,
  //       },
  //       sla: {
  //         deliveryTime: 25,
  //         slaString: "25 mins",
  //       },
  //     },
  //   },
  // ];

  return (
    <div className="body">
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search a restaurant you want..."
          // value=""
        />
        <button className="search-btn">Search</button>
        <button
          className="search-btn"
          onClick={() => {
            //Filter Logic Here
            // listOfRestaurant = listOfRestaurant.filter(
            //   (res) => res.info.avgRating > 4
            // );
            // console.log(listOfRestaurant);
            const filteredList = listOfRestaurant.filter(
              (res) => res.info.avgRating > 4
            );
            setListOfRestaurant(filteredList);
          }}
        >
          Top_Rated
        </button>
      </div>
      <div className="res-container">
        {/* <RestaurantCard resData={resList[0]} /> */}
        {/* {resList.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))} */}
        {listOfRestaurant.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
