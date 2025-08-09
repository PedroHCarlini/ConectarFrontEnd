import validator from "validator";
import { useForm } from "react-hook-form";
import { useLogin } from "./hooks/useLogin";

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
          <input
            type="password"
            className={`p-3 rounded outline-none bg-white border-2 border-gray-400 border-opacity-50${
              errors.password ? "border-red-500" : ""
            }`}
            {...register("password", { required: true })}
          />
          {errors?.password?.type === "required" && (
            <p className="text-red-500">Senha é obrigatória</p>
          )}
        </div>
        <div className="flex h-full items-end">
          <button
            type="submit"
            className="flex bg-[#1aaf79] w-full p-4 rounded-lg justify-center self-end"
            onClick={() => handleSubmit(onSubmit)()}
          >
            <p className="text-white font-bold">Entrar</p>
          </button>
        </div>
      </div>
    </div>
  );
};
