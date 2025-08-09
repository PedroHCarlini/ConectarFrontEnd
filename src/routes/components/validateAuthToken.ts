import { jwtDecode } from "jwt-decode";

type JwtPayload = { exp?: number };

export const isTokenValid = (): boolean => {
  const token = localStorage.getItem("token");
  if (!token) return false;

  try {
    const { exp } = jwtDecode<JwtPayload>(token);
    const isValid = !!exp && exp * 1000 > Date.now();
    if (!isValid) {
      localStorage.removeItem("token");
    }
    return isValid;
  } catch (err) {
    console.error("[isTokenValid] decode error:", err);
    return false;
  }
};
