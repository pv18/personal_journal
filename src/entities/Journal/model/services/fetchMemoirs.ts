import axios, { AxiosResponse } from "axios";
import { IMemoir } from "../types/journal";

export const fetchMemoirs = () => {
  return axios.get<IMemoir[], AxiosResponse<IMemoir[]>>(
    "http://localhost:3000/memoirs",
  );
};
