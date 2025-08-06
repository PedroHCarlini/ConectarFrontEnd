import { LoginForm } from "./loginForm";

export const Login = () => {
  return (
    <div className="flex flex-col w-full h-full bg-[#1aaf79] justify-center">
      <div className="w-full h-full flex flex-col ">
        <div className="flex justify-center items-end h-[40%]">
          <img
            className="mb-6 w-[280px] h-[200px]"
            src="src/assets/images/conectar-logo.png"
            alt=""
          />
        </div>
        <div className="flex justify-center items-start h-[60%]">
          <LoginForm />
        </div>
      </div>
    </div>
  );
};
