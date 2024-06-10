import axios, { AxiosResponse } from "axios";
import { IMemoir } from "../types/journal";
import { serverPort } from "../constants/serverPort";

export const deleteMemoir = (id: string) => {
  return axios.delete<IMemoir, AxiosResponse<IMemoir>>(
    `${serverPort}/memoirs/${id}`,
  );
};
