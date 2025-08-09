import { apiService } from "../shared/api-service";

export const getCustomers = async (params: Record<string, any>) => {
  const { data } = await apiService().get("/customers", { params });
  return data;
};
