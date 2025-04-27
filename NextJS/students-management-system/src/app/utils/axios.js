import { getCookie } from "cookies-next";
const { default: axios } = require("axios");

const baseURL = "http://localhost:8000/api";

export const axiosInstance = axios.create({
  baseURL,
});

axiosInstance.interceptors.request.use(
  function (config) {
    if (typeof window !== "undefined") {
      config.headers.Accept = "application/json";
      const user = getCookie("mern-stack-user")
        ? JSON.parse(getCookie("mern-stack-user"))
        : null;

      if (user?.token) {
        config.headers.Authorization = `Bearer ${user?.token}`;
      }
    }

    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosInstance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    console.log("STatus code: ", error);
    if (typeof window !== "undefined") {
      if (error.status === 401) {
        window.location.href = "http://localhost:3000/";
      }
    }
    return Promise.reject(error);
  }
);
