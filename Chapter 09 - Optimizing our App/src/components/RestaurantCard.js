import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, feeDetails, sla } =
    resData?.info;

  return (
    <>
      <div className="res-card">
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
      </div>
    </>
  );
};

export default RestaurantCard;
