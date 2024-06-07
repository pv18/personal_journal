import axios, { AxiosResponse } from "axios";
import { IMemoir } from "../types/journal";

export const addMemoir = (payload: IMemoir) => {
  return axios.post<IMemoir, AxiosResponse<IMemoir>, IMemoir>(
    "http://localhost:3001/memoirs",
    { ...payload },
  );
};
