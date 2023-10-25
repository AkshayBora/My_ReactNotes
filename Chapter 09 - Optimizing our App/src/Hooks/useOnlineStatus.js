import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  const [onlineStatus, setOnlineStatus] = useState(true);

  // Check If Online
  useEffect(() => {
    const handleOnline = () => {
      setOnlineStatus(true);
    };

    const handleOffline = () => {
      setOnlineStatus(false);
    };

    // window.addEventListener("offline", () => {
    //   setOnlineStatus(false);
    // });

    // window.addEventListener("online", () => {
    //   setOnlineStatus(true);
    // });
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  // return boolean value
  return onlineStatus;
};

export default useOnlineStatus;
