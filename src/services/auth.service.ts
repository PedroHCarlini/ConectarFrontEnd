import { apiService } from "../shared/api-service";

export const authenticateUser = async (email: string, password: string) => {
  console.log("authenticateUser", email, password);
  const { data } = await apiService().post("/auth", { email, password });
  return data;
};
