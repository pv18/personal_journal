import { set, get } from "idb-keyval";
import { IRequest } from "app/types/globalTypes";

export async function saveRequestToIndexedDB(
  request: IRequest,
  callback?: () => void,
) {
  const res = await get("requests-offline").then((res) => res || []);

  await set("requests-offline", [...res, request])
    .then(() => {
      console.log(`Данные успешно сохранены в indexed DB!`);
      callback && callback();
    })
    .catch((err) => {
      console.log(`${err}`);
    });
}
