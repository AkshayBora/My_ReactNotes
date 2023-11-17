import { shimmer_card_length, shimmer_card_menu } from "../utils/constants";

const CardShimmer = () => {
  return (
    <div className="basis-[200px] shadow-[0_4px_7px_0_rgb(218_220_230_/_60%)] mb-2.5 p-2.5 border-[#d3d5df]">
      <div className="shimmer-img stroke animate"></div>
      <div className="sw-3/5 mt-2.5 stroke animate"></div>
      <div className="w-4/5 mt-1 stroke animate "></div>
      <div className="w-full mt-[18px] stroke animate "></div>
    </div>
  );
};

const Shimmer = () => {
  return (
    <div className="shimmer-container relative flex flex-wrap gap-[30px] justify-center top-[50px]">
      {new Array(shimmer_card_length).fill(0).map((element, index) => {
        return <CardShimmer key={index} />;
      })}
    </div>
  );
};

export const MenuShimmer = () => {
  return (
    // <div className="restaurant-menu">
    //   <div className="restaurant-summary stroke-color animate">
    //     <img className="shimmer-img stroke animate" />
    //     <div className="restaurant-summary-details">
    //       <h2 className="shimmer-w40  stroke animate"></h2>
    //       <p className="shimmer-w20 stroke animate"></p>
    //       <div className="shimmer-w60  stroke animate"></div>
    //     </div>
    //   </div>

    //   <div className="restaurant-menu-content">
    //     <div className="menu-items-container">
    //       <div className="menu-title-wrap">
    //         <h3 className="shimmer-w40 stroke animate"></h3>
    //         <p className="shimmer-w20 stroke animate"></p>
    //       </div>
    //       <div className="menu-items-list">
    //         {Array(shimmer_card_menu)
    //           .fill("")
    //           .map((element, index) => (
    //             <div className="shimmer-menu-card" key={index}>
    //               <div className="shimmer-item-details">
    //                 <h3 className="shimmer-w40  stroke animate"></h3>
    //                 <p className="shimmer-w20  stroke animate"> </p>
    //                 <p className="shimmer-w60  stroke animate"></p>
    //               </div>
    //               <div className="shimmer-img-wrapper">
    //                 <img className="shimmer-img stroke animate" />
    //                 <div className="shimmer-btn stroke animate"> </div>
    //               </div>
    //             </div>
    //           ))}
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="flex flex-col justify-center items-center m-4 rounded-md">
      {Array(shimmer_card_menu)
        .fill("")
        .map((e, index) => (
          <div
            key={index}
            className="flex justify-around w-11/12 md:w-9/12 h-48 mx-auto gap-14 p-3 m-6 shadow-2xl bg-slate-200 rounded-md animate-pulse"
          >
            <div className="w-3/6 my-2 h-40 grid grid-rows-4 gap-4">
              <div className="h-8 bg-slate-500 rounded row-span-1"></div>
              <div className="h-8 bg-slate-300 rounded row-span-1"></div>
              <div className="h-8 bg-slate-500 rounded row-span-1"></div>
            </div>
            <div className="w-2/12 my-2 h-40 grid grid-rows-4 gap-2">
              <div className="h-18 bg-slate-400 animate-pulse rounded-md row-span-2"></div>
              <div className="h-8 bg-slate-500 animate-pulse rounded-md row-span-1"></div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Shimmer;
