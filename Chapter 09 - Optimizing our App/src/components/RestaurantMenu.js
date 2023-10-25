// import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MenuShimmer } from "./Shimmer";
import { CDN_URL } from "../utils/constants";
import useRestaurantMenu from "../Hooks/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <MenuShimmer />;

  const {
    name,
    cuisines,
    costForTwoMessage,
    nearestOutletNudge,
    cloudinaryImageId,
    avgRating,
  } = resInfo?.cards[0]?.card?.card?.info;

  console.log(resInfo?.cards);

  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
  // console.log(resInfo?.cards[2]);
  // console.log(itemCards);

  return (
    <>
      <div className="restaurant_menu">
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
      </div>

      {/* RESTURANT RECOMMENDED MENU CONTENT */}
      <div className="restaurant_menu_content">
        <div className="restaurant_menu_item_container">
          <div className="menu_small_content">
            <h3 className="menu_title">RECOMMENDED</h3>
            <p className="menu_para">
              ({itemCards.length}) {"ITEMS"}
            </p>
          </div>
          <div className="restaurant_menu_list">
            {itemCards.map((item) => (
              <div className="menu_items" key={item?.card?.info?.id}>
                <div className="menu_item_content">
                  <h3>{item.card.info.name}</h3>
                  <p>{item.card.info.category}</p>
                  <p>
                    ₹
                    {item.card.info.price / 100 ||
                      item.card.info.defaultPrice / 100}
                  </p>
                  <p>
                    {item.card.info.description ||
                      "Best Item serve by our Restaurant you love it."}
                  </p>
                </div>
                <div className="menu_item_img_btn">
                  <img
                    src={CDN_URL + item.card.info.imageId}
                    alt={item.card.info.name}
                  />
                  <button className="menu_add_btn">
                    <h4>ADD</h4>
                    <i className="fa-solid fa-plus"></i>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default RestaurantMenu;
