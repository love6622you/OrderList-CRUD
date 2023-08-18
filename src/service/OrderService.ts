import axios from "axios";

export const getOrderList = () => {
  return axios("http://localhost:3000/order", {
    method: "GET"
  }).then((res) => res.data);
};
export const addOrder = () => {
  return axios("http://localhost:3000/order", {
    method: "POST"
  }).then((res) => res.data);
};
export const editOrder = () => {
  return axios("http://localhost:3000/order", {
    method: "PUT"
  }).then((res) => res.data);
};
export const deleteOrderList = () => {
  return axios("http://localhost:3000/order", {
    method: "DELETE"
  }).then((res) => res.data);
};
