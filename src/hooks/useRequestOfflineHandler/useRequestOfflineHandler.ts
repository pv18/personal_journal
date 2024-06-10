import { useEffect } from "react";
import { sendRequestsOffline } from "helpers/sendRequestsFromDbToServer";

export const useRequestOfflineHandler = () => {
  useEffect(() => {
    const handleOnline = async () => {
      await sendRequestsOffline();
    };

    window.addEventListener("online", handleOnline);

    return () => {
      window.removeEventListener("online", handleOnline);
    };
  }, []);
};
