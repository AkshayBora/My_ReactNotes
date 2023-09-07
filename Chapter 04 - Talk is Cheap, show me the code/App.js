import React from "react";
import ReactDOM from "react-dom/client";
import image from "./Images/QuickByte.gif";
/**
 * HEADER
 ** - LOGO
 ** - NAV LINKS
 *
 * BODY
 ** - SEARCH BAR
 ** - RestaurantContainer
 ***  - Restaurant Cards
 ***    - Image
 ***    - Name of Restaurant
 ***    - Star rating
 ***    - cuising
 ***    - Delivery Time
 *
 * FOOTER
 ** - Copyright
 ** - Links
 ** - Address
 ** - Contact
 */

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          // src="https://static.vecteezy.com/system/resources/thumbnails/011/468/885/small/food-logo-spoon-fork-icon-illustration-symbol-for-fast-delivery-app-restaurant-template-free-vector.jpg"
          // src={image}
          src={image}
          alt="logo"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, feeDetails, sla } =
    resData?.info;

  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="res-logo"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
      />
      <h3>{name}</h3>
      <h4 className="description">{cuisines.join(", ")}</h4>
      <span>
        <h5>{avgRating} stars</h5>
        <h5>Rs.{feeDetails.totalFee / 100} For Two</h5>
        <h5>{sla.slaString}</h5>
      </span>
    </div>
  );
};

const resList = [
  {
    info: {
      id: "356627",
      name: "Rollsome",
      cloudinaryImageId: "d2zhmkic7glofbpvzqt1",
      locality: "Naharpur",
      areaName: "Rohini",
      costForTwo: "₹250 for two",
      cuisines: ["Fast Food", "Snacks", "Street Food"],
      avgRating: 4,
      feeDetails: {
        restaurantId: "356627",
        fees: [
          {
            name: "BASE_TIME",
          },
          {
            name: "BASE_DISTANCE",
            fee: 4000,
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 4000,
      },
      parentId: "171215",
      avgRatingString: "4.0",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 25,
        lastMileTravel: 2.4,
        serviceability: "SERVICEABLE",
        slaString: "25 mins",
        lastMileTravelString: "2.4 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-09-06 03:45:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹125 OFF",
        subHeader: "ABOVE ₹249",
        discountTag: "FLAT DEAL",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-4fd6a000-e14b-419d-bdbd-40b88f1bc900",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/rollsome-naharpur-rohini-delhi-356627",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "349931",
      name: "Billu's Pasta Hut",
      cloudinaryImageId: "hd6uixw1ykomliddvyap",
      locality: "Aggarwal Metro Heights",
      areaName: "Netaji Subhash Place",
      costForTwo: "₹150 for two",
      cuisines: ["Continental", "Pizzas", "Italian"],
      avgRating: 3.8,
      feeDetails: {
        restaurantId: "349931",
        fees: [
          {
            name: "BASE_TIME",
          },
          {
            name: "BASE_DISTANCE",
            fee: 7600,
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 7600,
      },
      parentId: "46040",
      avgRatingString: "3.8",
      totalRatingsString: "5K+",
      sla: {
        deliveryTime: 30,
        lastMileTravel: 6.8,
        serviceability: "SERVICEABLE",
        slaString: "30 mins",
        lastMileTravelString: "6.8 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-09-06 05:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹125 OFF",
        subHeader: "ABOVE ₹249",
        discountTag: "FLAT DEAL",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-4fd6a000-e14b-419d-bdbd-40b88f1bc900",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/billus-pasta-hut-aggarwal-metro-heights-netaji-subhash-place-delhi-349931",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "252104",
      name: "Sardar Ji Late Night Kitchen (Rajouri Garden)",
      cloudinaryImageId: "j0kv8rp155o0s426id71",
      locality: "C Block",
      areaName: "Tagore Garden",
      costForTwo: "₹300 for two",
      cuisines: [
        "North Indian",
        "Punjabi",
        "Tandoor",
        "Chinese",
        "Indian",
        "Kebabs",
        "Beverages",
        "Biryani",
      ],
      avgRating: 4.2,
      feeDetails: {
        restaurantId: "252104",
        fees: [
          {
            name: "BASE_DISTANCE",
            fee: 10100,
          },
          {
            name: "BASE_TIME",
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 10100,
      },
      parentId: "178225",
      avgRatingString: "4.2",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 34,
        lastMileTravel: 8.9,
        serviceability: "SERVICEABLE",
        slaString: "34 mins",
        lastMileTravelString: "8.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-09-06 04:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-4fd6a000-e14b-419d-bdbd-40b88f1bc900",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/sardar-ji-late-night-kitchen-rajouri-garden-c-block-tagore-garden-delhi-252104",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "175782",
      name: "Go Pappe",
      cloudinaryImageId: "oatgpxnuuezpzfvwcuma",
      locality: "Sector 6",
      areaName: "Rohini",
      costForTwo: "₹300 for two",
      cuisines: ["North Indian", "Chinese", "Snacks"],
      avgRating: 3.8,
      feeDetails: {
        restaurantId: "175782",
        fees: [
          {
            name: "BASE_TIME",
          },
          {
            name: "BASE_DISTANCE",
            fee: 4000,
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 4000,
      },
      parentId: "16483",
      avgRatingString: "3.8",
      totalRatingsString: "5K+",
      sla: {
        deliveryTime: 23,
        lastMileTravel: 1.1,
        serviceability: "SERVICEABLE",
        slaString: "23 mins",
        lastMileTravelString: "1.1 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-09-06 03:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹125 OFF",
        subHeader: "ABOVE ₹249",
        discountTag: "FLAT DEAL",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-4fd6a000-e14b-419d-bdbd-40b88f1bc900",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/go-pappe-sector-6-rohini-delhi-175782",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "674128",
      name: "Punjab Grill Express",
      cloudinaryImageId: "4a7f0900be3c6c985170b08f61bada4b",
      locality: "Pitampura",
      areaName: "Netaji Subhash Place",
      costForTwo: "₹200 for two",
      cuisines: [
        "North Indian",
        "Chinese",
        "Mughlai",
        "Tandoor",
        "Biryani",
        "Punjabi",
        "Seafood",
        "Barbecue",
        "Snacks",
        "Tibetan",
        "Nepalese",
        "Indian",
        "Afghani",
        "Kebabs",
        "Lucknowi",
        "Beverages",
        "Desserts",
        "Home Food",
        "Grill",
        "Asian",
        "Fast Food",
        "Thai",
        "Pan-Asian",
        "Thalis",
      ],
      avgRating: 3.7,
      feeDetails: {
        restaurantId: "674128",
        fees: [
          {
            name: "BASE_TIME",
          },
          {
            name: "BASE_DISTANCE",
            fee: 7600,
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 7600,
      },
      parentId: "353849",
      avgRatingString: "3.7",
      totalRatingsString: "100+",
      sla: {
        deliveryTime: 30,
        lastMileTravel: 6.8,
        serviceability: "SERVICEABLE",
        slaString: "30 mins",
        lastMileTravelString: "6.8 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-09-06 04:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹125 OFF",
        subHeader: "ABOVE ₹249",
        discountTag: "FLAT DEAL",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-4fd6a000-e14b-419d-bdbd-40b88f1bc900",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/punjab-grill-express-pitampura-netaji-subhash-place-delhi-674128",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "555831",
      name: "Only At 129",
      cloudinaryImageId: "a6c5d1936ff122a825c43524225adc9f",
      locality: "CSC Market",
      areaName: "Paschim Vihar",
      costForTwo: "₹400 for two",
      cuisines: ["Chaat", "Chinese", "North Indian", "Snacks"],
      avgRating: 3.3,
      feeDetails: {
        restaurantId: "555831",
        fees: [
          {
            name: "BASE_TIME",
          },
          {
            name: "BASE_DISTANCE",
            fee: 6600,
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 6600,
      },
      parentId: "334442",
      avgRatingString: "3.3",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 21,
        lastMileTravel: 5,
        serviceability: "SERVICEABLE",
        slaString: "21 mins",
        lastMileTravelString: "5.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-09-06 04:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "60% OFF",
        subHeader: "UPTO ₹120",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-4fd6a000-e14b-419d-bdbd-40b88f1bc900",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/only-at-129-csc-market-paschim-vihar-delhi-555831",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "592250",
      name: "Amritsari chaap & naan",
      cloudinaryImageId: "rzph48i1vnfzowsqrrwb",
      locality: "Jwala Heri",
      areaName: "Paschim Vihar",
      costForTwo: "₹300 for two",
      cuisines: ["Tandoor", "North Indian", "Beverages"],
      avgRating: 3.2,
      feeDetails: {
        restaurantId: "592250",
        fees: [
          {
            name: "BASE_TIME",
          },
          {
            name: "BASE_DISTANCE",
            fee: 6600,
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 6600,
      },
      parentId: "354115",
      avgRatingString: "3.2",
      totalRatingsString: "500+",
      sla: {
        deliveryTime: 22,
        lastMileTravel: 5,
        serviceability: "SERVICEABLE",
        slaString: "22 mins",
        lastMileTravelString: "5.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-09-06 04:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "60% OFF",
        subHeader: "UPTO ₹120",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-4fd6a000-e14b-419d-bdbd-40b88f1bc900",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/amritsari-chaap-and-naan-jwala-heri-paschim-vihar-delhi-592250",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "676811",
      name: "Game Of Shawarma",
      cloudinaryImageId: "70eecd23176aef515b87fe4d7e54c0c2",
      locality: "Bharti Vidyapeeth University",
      areaName: "Paschim Vihar",
      costForTwo: "₹308 for two",
      cuisines: ["Fast Food", "Snacks", "Burgers", "Chinese", "Beverages"],
      avgRating: 3.9,
      feeDetails: {
        restaurantId: "676811",
        fees: [
          {
            name: "BASE_TIME",
          },
          {
            name: "BASE_DISTANCE",
            fee: 6600,
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 6600,
      },
      parentId: "356535",
      avgRatingString: "3.9",
      totalRatingsString: "50+",
      sla: {
        deliveryTime: 22,
        lastMileTravel: 5,
        serviceability: "SERVICEABLE",
        slaString: "22 mins",
        lastMileTravelString: "5.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-09-06 04:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "60% OFF",
        subHeader: "UPTO ₹120",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-4fd6a000-e14b-419d-bdbd-40b88f1bc900",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/game-of-shawarma-bharti-vidyapeeth-university-paschim-vihar-delhi-676811",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "9736",
      name: "Pandey Chinese Hut (Since 1985)",
      cloudinaryImageId: "7d809636fc193342ff61e1e5edab0d07",
      locality: "GU block",
      areaName: "Pitampura",
      costForTwo: "₹200 for two",
      cuisines: [
        "Chinese",
        "Snacks",
        "Continental",
        "Beverages",
        "Italian",
        "Tibetan",
        "Desserts",
        "Nepalese",
        "Fast Food",
        "Italian-American",
        "American",
        "Salads",
        "Mughlai",
        "Pan-Asian",
        "Thai",
        "Pizzas",
        "Pastas",
        "Burgers",
        "Barbecue",
        "Grill",
      ],
      avgRating: 3.5,
      feeDetails: {
        restaurantId: "9736",
        fees: [
          {
            name: "BASE_TIME",
          },
          {
            name: "BASE_DISTANCE",
            fee: 7600,
          },
          {
            name: "ANCILLARY_SURGE_FEE",
          },
        ],
        totalFee: 7600,
      },
      parentId: "154365",
      avgRatingString: "3.5",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 28,
        lastMileTravel: 6.1,
        serviceability: "SERVICEABLE",
        slaString: "28 mins",
        lastMileTravelString: "6.1 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2023-09-06 03:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹125 OFF",
        subHeader: "ABOVE ₹249",
        discountTag: "FLAT DEAL",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: "seo-data-4fd6a000-e14b-419d-bdbd-40b88f1bc900",
    },
    cta: {
      link: "https://www.swiggy.com/restaurants/pandey-chinese-hut-since-1985-gu-block-pitampura-delhi-9736",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
];

// not using keys(not acceptable) <<<<< index as key <<<<<<< unique id(best practice)

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {/* <RestaurantCard resData={resList[0]} /> */}
        {resList.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
