import { RxHamburgerMenu } from "react-icons/rx";
import userLogo from "../assets/userLogo.png";
import { useAuth } from "../Context/AuthProvider";
import { useNavigate } from "react-router-dom";
import { useRole } from "../Context/RoleProvider";

const Navbar = () => {
  const { setIsLoggedin } = useAuth();
  const navigation = useNavigate();

  const {role} = useRole();

  const handleLogout = () => {
    setIsLoggedin(false);
    navigation("/");
  };

  return (
    <>
      <div className="h-20 shadow-[3px_5px_15px_-6px_rgba(0,_0,_0,_1)] bg-background flex items-center animate-fade-down animate-ease-in-out">
        <div className="flex flex-row justify-between items-center w-full p-5   ">
          <div className="flex flex-row items-center gap-x-3.5">
            <RxHamburgerMenu
              color="white"
              size={35}
              className="bg-primary px-0.5 rounded-sm cursor-pointer"
            />
            <h1 className="text-fontPrimary font-semibold text-[18px]">
              Overview
            </h1>
          </div>
          <div className="flex flex-row gap-x-3.5 items-center">
            <div className="flex flex-row items-center gap-1.5">
              <img src={userLogo} width={45} alt="user_logo" />
              <h1 className="text-fontPrimary text-[18px] font-medium">{role === 'student' ? 'John' : 'admin'}</h1>
            </div>
            <div>
              <button
                onClick={handleLogout}
                className="cursor-pointer px-3 py-0.5 bg-primary rounded-sm text-fontPrimary font-medium"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
