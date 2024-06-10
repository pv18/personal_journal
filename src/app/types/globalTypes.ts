export type RequestMethodType = "post" | "patch";

export interface IRequest {
  id: string;
  url: string;
  method: RequestMethodType;
  payload: any;
}
