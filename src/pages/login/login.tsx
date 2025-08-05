import { LoginForm } from "./loginForm";

export const Login = () => {
  return (
    <div className="flex flex-col w-full h-full bg-[#1aaf79] justify-center">
      <div className="w-full h-full flex flex-col ">
        {/* <img
          className="self-center mb-6 w-[280px] h-[200px]"
          src="src/assets/images/conectar-logo.png"
          alt=""
        /> */}
        <div className="flex flex-col self-center my-auto">
          <LoginForm />
        </div>
      </div>
    </div>
  );
};
