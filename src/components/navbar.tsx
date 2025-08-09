import { useNavigate } from "react-router-dom";

export const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };
  return (
    <nav className="flex w-[100vw] max-w-[100vw] pr-4 justify-between bg-[#1aaf79]">
      <div className="flex items-center gap-4">
        <img
          src="src/assets/images/conectar-logo.png"
          className="w-40 h-20"
          alt=""
        />
        <div className="flex flex-wrap border-b-3 h-[95%] border-b-white">
          <button className="px-4 py-2 font-bold text-lg text-white">
            Clientes
          </button>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div>
          <button className="cursor-pointer">
            <img src="src/assets/icons/help.png" className="w-6 h-6" alt="" />
          </button>
        </div>
        <div>
          <button className="cursor-pointer">
            <img
              src="src/assets/icons/notification.png"
              className="w-6 h-6"
              alt=""
            />
          </button>
        </div>
        <div>
          <button
            className="cursor-pointer"
            onClick={() => {
              handleLogout();
            }}
          >
            <img src="src/assets/icons/logout.png" className="w-5 h-5" alt="" />
          </button>
        </div>
      </div>
    </nav>
  );
};
