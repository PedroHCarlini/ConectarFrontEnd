import { apiService } from "../shared/api-service";

export const authenticateUser = async (email: string, password: string) => {
  const { data } = await apiService().post("/auth", { email, password });
  return data;
};
