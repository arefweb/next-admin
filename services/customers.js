import axios from "axios";

export const getCustomers = async () => {
  let response = await axios.get(`/api/customers`);
  return response;
};
