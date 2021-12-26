import axios from "axios";
import { getCustomers } from "./customers";

/**
 * injecting headers to API request
 * calling a particular API with methods like GET, POST ...
 * adding response tokens, etc to localStorage or cookie
 * handling errors if we erceive them
 **/

axios.interceptors.request.use(
  function (request) {
    let token = localStorage.getItem("token")
    // request.headers["Cookie"] = "name=Aref";
    request.headers["x-access-token"] = token;
    return request;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    console.log("Interceptor success response");
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    console.warn("Interceptor failure");
    return Promise.reject(error);
  }
);


const callAPI = {
  getCustomers,
};

export default callAPI;