import axios from "axios";

const apiUrl = import.meta.env.VITE_API_URL;
export const apiService = () => {
  console.log("apiUrl", apiUrl);
  const instance = axios.create({
    baseURL: apiUrl,
    headers: {
      "Content-Type": "application/json",
      // "Authorization": `Bearer ${localStorage.getItem("token")}`,
    },
  });
  return instance;
};
