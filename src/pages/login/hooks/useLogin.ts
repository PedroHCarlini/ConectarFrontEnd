import { useMutation } from "@tanstack/react-query";
import type { AxiosError } from "axios";
import { authenticateUser } from "../../../services/auth.service";
import { useNavigate } from "react-router-dom";

export const useLogin = () => {
  const navigate = useNavigate();
  const { mutateAsync: handleLogin } = useMutation({
    mutationFn: (value: Record<string, string>) =>
      authenticateUser(value.email, value.password),
    onSuccess: (data: any) => {
      localStorage.setItem("token", data.accessToken);
      navigate("/customers-list");
    },
    onError: (error: AxiosError) => {
      console.log(error);
    },
  });

  return {
    handleLogin,
  };
};
