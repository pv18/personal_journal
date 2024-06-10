export type RequestMethodType = "post" | "patch" | "delete";

export interface IRequest {
  id: string;
  url: string;
  method: RequestMethodType;
  payload?: any;
}
