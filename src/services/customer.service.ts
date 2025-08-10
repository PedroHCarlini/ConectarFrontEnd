import { apiService } from "../shared/api-service";

export const getCustomers = async (params: Record<string, any>) => {
  const { data } = await apiService().get("/customers", { params });
  return data;
};

export const createCustomer = async (payload: Record<string, any>) => {
  const { data } = await apiService().post(`/customers`, payload);
  return data;
};

export const updateCustomer = async (
  id: string,
  payload: Record<string, any>
) => {
  const { data } = await apiService().patch(`/customers/${id}`, payload);
  return data;
};

export const deleteCustomer = async (id: string) => {
  const { data } = await apiService().delete(`/customers/${id}`);
  return data;
};
