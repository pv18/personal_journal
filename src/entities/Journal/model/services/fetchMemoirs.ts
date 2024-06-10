import axios, { AxiosResponse } from "axios";
import { IMemoir } from "../types/journal";
import { serverPort } from "../constants/serverPort";

export const fetchMemoirs = () => {
  return axios.get<IMemoir[], AxiosResponse<IMemoir[]>>(
    `${serverPort}/memoirs`,
  );
};
