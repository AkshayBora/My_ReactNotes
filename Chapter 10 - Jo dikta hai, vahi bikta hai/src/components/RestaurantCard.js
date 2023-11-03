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
          className="w-full h-40 object-cover object-center md:h-42"
          src={CDN_URL + cloudinaryImageId}
          alt="Food_Image"
        />
        <div className="p-2">
          <h2 className="text-xl mb-4 font-bold md:mb-2 xl:mb-1 md:text-sm sm:text-base lg:mb-2 xl:text-xl 2xl:mb-4 2xl:text-lg">
            {name}
          </h2>
          <p className="description text-gray-700">{cuisines.join(", ")}</p>
          <div className="flex items-center justify-between 2xl:text-lg">
            <span className="text-gray-900 text-base font-bold 2xl:text-lg">
              {avgRating}
            </span>
            <span className="text-gray-900 text-base font-bold ml-6 2xl:text-lg">
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

export default RestaurantCard;
