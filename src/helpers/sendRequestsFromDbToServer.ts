import { get, set } from "idb-keyval";
import axios from "axios";

export const sendRequestsOffline = async () => {
  const requests = await get("requests-offline");
  if (requests) {
    for (const request of requests) {
      try {
        if (request.method === "patch") {
          await axios.patch(request.url, { ...request.payload });
        }
        if (request.method === "post") {
          await axios.post(request.url, { ...request.payload });
        }
        if (request.method === "delete") {
          await axios.delete(request.url);
        }
      } catch (error) {
        console.error(`${error}`);
      }
    }

    await set("requests-offline", []);
  }
};
