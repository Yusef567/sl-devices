import axios from "axios";

const apiUrl =
  "https://pzv500llz9.execute-api.eu-west-2.amazonaws.com/production";

export const api = axios.create({
  baseURL: apiUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  (config) => {
    const jwtToken = "productionJwtToken";

    config.headers.Authorization = `Bearer ${jwtToken}`;
    return config;
  },
  (error) => {
    throw new Error(error);
  }
);
