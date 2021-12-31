import axios from "axios";

axios.defaults.baseURL = "http://wengyifan.com:8080/";

export const instance = axios.create({
  baseURL: "http://wengyifan.com:8080/",
});

