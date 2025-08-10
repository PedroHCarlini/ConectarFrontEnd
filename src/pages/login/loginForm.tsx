import validator from "validator";
import { useForm } from "react-hook-form";
import { useLogin } from "./hooks/useLogin";
import { useState } from "react";

interface LoginFormData {
  email: string;
  password: string;
}

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>();

  const [showPassword, setShowPassword] = useState(false);

  const { handleLogin } = useLogin();

  const onSubmit = (data: LoginFormData) => {
    handleLogin(data as unknown as Record<string, string>);
  };

  return (
    <div className="flex  w-[600px] h-[350px] bg-white rounded-md p-6">
      <div className="flex flex-col h-full w-full gap-4">
        <div className="flex flex-col font-medium gap-2">
          <label>Email</label>
          <input
            type="email"
            className={`p-3 rounded outline-none bg-white border-2 border-gray-400 border-opacity-50 ${
              errors.email ? "border-red-500" : ""
            }`}
            {...register("email", {
              required: true,
              validate: (value) => validator.isEmail(value),
            })}
          />
          {errors?.email?.type === "required" && (
            <p className="text-red-500">Email é obrigatório</p>
          )}
          {errors?.email?.type === "validate" && (
            <p className="text-red-500">Insira um email válido</p>
          )}
        </div>
        <div className="flex flex-col font-medium gap-2">
          <label>Senha</label>
          <div className="flex items-center">
            <input
              type={showPassword ? "text" : "password"}
              className={`p-3 w-[85%] rounded-l-md outline-none bg-white border-2 border-r-0 border-gray-400 border-opacity-50${
                errors.password ? "border-red-500" : ""
              }`}
              {...register("password", { required: true })}
            />
            <button
              className="p-3 w-[15%] flex items-center justify-center rounded-r-md border border-l-0 border-[#1aaf79] bg-[#1aaf79]/30 cursor-pointer"
              type="button"
              onClick={() => setShowPassword(!showPassword)}
            >
              <img
                className="w-6 h-6"
                src={
                  showPassword
                    ? "src/assets/icons/eye-slash.png"
                    : "src/assets/icons/eye.png"
                }
                alt=""
              />
            </button>
          </div>
          {errors?.password?.type === "required" && (
            <p className="text-red-500">Senha é obrigatória</p>
          )}
        </div>
        <div className="flex h-full items-end">
          <button
            type="submit"
            className="flex cursor-pointer bg-[#1aaf79] w-full p-4 rounded-lg justify-center self-end "
            onClick={() => handleSubmit(onSubmit)()}
          >
            <p className="text-white font-bold">Entrar</p>
          </button>
        </div>
      </div>
    </div>
  );
};
