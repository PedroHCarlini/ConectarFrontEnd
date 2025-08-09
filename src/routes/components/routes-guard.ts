import { jwtDecode } from "jwt-decode";

export const isTokenValid = () => {
  const token = localStorage.getItem("token");
  if (!token) return false;

  try {
    const { exp } = jwtDecode(token);
    if (!exp) return false;

    const currentTime = Date.now() / 1000;
    return exp > currentTime;
  } catch {
    return false;
  }
};
