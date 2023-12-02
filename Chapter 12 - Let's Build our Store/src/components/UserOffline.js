import React from "react";
import offline from "../Images/offline.png";
import offline from "../Images/Offline.jpg";

const UserOffline = () => {
  return (
    // <div className="user-offline-container">
    //   <h1 className="user-offline-heading">🔴 Offline!</h1>
    //   {/* <img className="offline-image" src={offline} alt="Offline" /> */}
    //   <img className="offline-image" src={offline} alt="Offline" />
    //   <p className="user-offline-message">
    //     Sorry, it seems that you are currently offline. Please Check your
    //     internet connection.
    //   </p>
    // </div>
    <div class="container mx-auto p-8">
      <div class="bg-white p-8 rounded-lg shadow-md">
        <div class="flex flex-col items-center">
          <img
            src={offline}
            alt="Offline Image"
            class="rounded-full h-40 w-40 object-cover mb-4"
          />
          <h1 class="text-3xl font-bold mb-4">🔴 Offline!</h1>
          <p class="text-gray-700 text-center">
            Oops! It seems you're offline. Please check your internet connection
            and try again.
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserOffline;
