import axios, { AxiosResponse } from "axios";
import { IMemoir } from "../types/journal";

export const deleteMemoir = (id: string) => {
  return axios.delete<IMemoir, AxiosResponse<IMemoir>>(
    `http://localhost:3001/memoirs/${id}`,
  );
};
