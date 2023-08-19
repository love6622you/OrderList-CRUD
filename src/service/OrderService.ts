import { TOrder } from "@/model/order";

import axios from "axios";

export const getOrderList = () => {
  return axios("http://localhost:3000/order", {
    method: "GET"
  }).then((res) => res.data);
};
export const addOrder = (data: TOrder) => {
  return axios("http://localhost:3000/order", {
    method: "POST",
    data
  });
};
export const editOrder = (id: string) => {
  return axios(`http://localhost:3000/order/${id}`, {
    method: "PUT"
  });
};
export const deleteOrder = (id: string) => {
  return axios(`http://localhost:3000/order/${id}`, {
    method: "DELETE"
  });
};
