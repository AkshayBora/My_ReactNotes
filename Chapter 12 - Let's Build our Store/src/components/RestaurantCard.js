import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, feeDetails, sla } =
    resData?.info;

  return (
    <>
      {/* <div className="res-card">
        <img
          className="res-logo"
          alt="res-logo"
          src={CDN_URL + cloudinaryImageId}
        />
        <h3>{name}</h3>
        <h4 className="description">{cuisines.join(", ")}</h4>
        <span>
          <h5>{avgRating} stars</h5>
          <h5>Rs.{feeDetails.totalFee / 100} For Two</h5>
          <h5>{sla.slaString}</h5>
        </span>
      </div> */}

      <div className="res-card h-[320px] mx-6 bg-white shadow-md rounded-lg overflow-hidden md:mx-0 md:h-[310px] hover:shadow-lg">
        <img
          className="w-5/6 m-auto mt-2 sm:mt-4 mb-0 h-36 object-cover object-center md:h-42"
          src={CDN_URL + cloudinaryImageId}
          alt="Food_Image"
        />
        <div className="p-2 ml-2">
          <h2 className="text-xl mb-4 font-bold md:mb-2 xl:mb-1 md:text-sm sm:text-base lg:mb-2 xl:text-xl 2xl:mb-4 2xl:text-lg">
            {name}
          </h2>
          <p className="description text-gray-700">{cuisines.join(", ")}</p>
          <div className="flex items-center justify-between 2xl:text-lg">
            <span className=" text-gray-900 text-base font-bold 2xl:text-lg">
              {avgRating < 4.2 ? (
                <i className="fa-solid fa-star text-red-500"></i>
              ) : (
                <i className="fa-solid fa-star text-green-500"></i>
              )}
              {avgRating}
            </span>
            <span className="text-gray-900 text-base font-bold ml-2 2xl:text-lg">
              Rs.{feeDetails.totalFee / 100} For Two
            </span>
            {/* <span class="text-gray-900 font-bold">{sla.slaString}</span> */}
            <button className="px-1 py-1 bg-red-500 text-base text-white rounded-md hover:bg-red-600">
              Order Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

// Higher Order Function
// input - RestaurantCard ==>> RestaurantCardPromoted
export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label>Promoted</label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
