import axios, { AxiosResponse } from "axios";
import { IMemoir } from "../types/journal";
import { serverPort } from "../constants/serverPort";

export const addMemoir = (payload: IMemoir) => {
  return axios.post<IMemoir, AxiosResponse<IMemoir>, IMemoir>(
    `${serverPort}/memoirs"`,
    { ...payload },
  );
};
