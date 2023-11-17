// import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MenuShimmer } from "./Shimmer";
import useRestaurantMenu from "../Hooks/useRestaurantMenu";
import RestaurantMenuCard from "./RestaurantMenuCard";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  const [showIndex, setShowIndex] = useState(null);

  if (resInfo === null) return <MenuShimmer />;

  // const {
  //   name,
  //   cuisines,
  //   costForTwoMessage,
  //   nearestOutletNudge,
  //   cloudinaryImageId,
  //   avgRating,
  // } = resInfo?.cards[0]?.card?.card?.info;

  // console.log(resInfo?.cards);

  // const { itemCards } =
  //   resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  // console.log(itemCards);
  // console.log(resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
  // console.log(itemCards);

  const categories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  // console.log(categories);

  return (
    <>
      {/* <div className="restaurant_menu">
        <div className="restaurant_summary">
          <div className="restaurant_image">
            <img src={CDN_URL + cloudinaryImageId} alt={name}></img>
          </div>
          <div className="restaurant_summary_detail">
            <h2 className="restaurant_title">{name}</h2>
            <p className="restaurant_about">{cuisines.join(", ")}</p>
            <div className="restaurant_details">
              <div className="restaurant_rating">
                <i className="fa-regular fa-star"></i>
                <span>{avgRating}</span>
              </div>
              <div className="restaurant_slash">
                <i className="fa-solid fa-minus"></i>
              </div>
              <div className="restaurant_timing">
                {nearestOutletNudge?.nearestOutletInfo?.siblingOutlet?.sla
                  ?.slaString || "30 MINS"}
              </div>
              <div className="restaurant_slash">
                <i className="fa-solid fa-minus"></i>
              </div>
              <div className="restaurant_price">{costForTwoMessage}</div>
            </div>
          </div>
        </div>
      </div> */}

      {/* RESTURANT RECOMMENDED MENU CONTENT */}
      {/* <div className="z-[-1]">
        {itemCards.length > 0 && (
          <p className="text-xl text-[#3F4255] uppercase font-bold w-11/12 md:w-9/12 mx-auto pl-3 my-5">
            Recommended - ({itemCards.length})
          </p>
        )}
        {itemCards.map((item) => {
          return <RestaurantMenuCard item={item} key={item?.card?.info?.id} />;
        })}
      </div> */}

      <div className="z-[-1]">
        {categories.map((category, index) => (
          <RestaurantCategory
            key={category.card.card.title}
            data={category?.card?.card}
            showItems={index === showIndex ? true : false}
            setShowIndex={() => setShowIndex(index)}
          />
        ))}
      </div>

      {/* <div className="text-center">
        <h1 className="font-bold my-6 text-2xl">{name}</h1>
        <p className="font-bold text-lg">
          {cuisines.join(", ")} - {costForTwoMessage}
        </p>
        {categories.map((category, index) => (
          <RestaurantCategory
            key={category.card.card.title}
            data={category?.card?.card}
            showItems={index === showIndex ? true : false}
            setShowIndex={() => setShowIndex(index)}
          />
        ))}
      </div> */}
    </>
  );
};

export default RestaurantMenu;
