import { useState } from "react";
import logo from "../assets/logo.png";
import { useAuth } from "../Context/AuthProvider";
import { useNavigate } from "react-router-dom";
import { useRole } from "../Context/RoleProvider";

const Login = () => {

    const {setRole} = useRole();

    const {setIsLoggedin} = useAuth();
    const navigation = useNavigate();

    const [isFaculty, setFaculty] = useState(false);

    const handleSubmit = () => {
      setIsLoggedin(true);
      if(isFaculty) {
        setRole("admin");
        navigation('/admin/overview')
      } else {
        setRole("student");
        navigation('overview')
      }
    }

  return (
    <>
      <div className="h-dvh flex justify-center items-center bg-primary">
        <div className="bg-background flex justify-center items-center w-[1200px] h-[550px] m-24 rounded-2xl">
          <div className="flex justify-between gap-x-3.5 w-full px-28">
            <div className="left flex flex-row gap-1.5 items-center  text-fontPrimary font-medium text-2xl">
              <img width={70} height={70} src={logo} alt="logo" />
              <h1>
                C.S.E DEPARTMENT <br />
                MET ENGINEERING COLLEGE
              </h1>
            </div>
            <div className="right flex flex-col justify-center items-center  w-80 gap-y-4.5">
              <div className="w-full text-center">
                <input
                  type="text"
                  placeholder={isFaculty ? "Enter your Roll No" : "Enter your Email"}
                  className="outline-none placeholder:text-fontSecondary bg-inputField text-fontSecondary  border-2 rounded-xl px-3.5 border-primary w-[95%] py-3"
                />
              </div>
              <div className="w-full text-center">
                <input
                  type={isFaculty ? "password" : "date"}
                 placeholder={isFaculty ? 'Password' : ''}
                  className="outline-none placeholder:text-fontSecondary bg-inputField text-fontSecondary border-2 rounded-xl px-3.5 border-primary w-[95%] py-3"
                />
              </div>
              <div className="w-full text-center">
                <button onClick={handleSubmit} className="bg-primary cursor-pointer w-[95%] px-3.5 py-3 rounded-xl font-medium">
                  Login
                </button>
                <div className="text-left px-4 mt-0.5">
                  <button onClick={()=>setFaculty(!isFaculty)} className="font-bold cursor-pointer text-darkblue text-sm">
                    {isFaculty ? 'Login as Student ?' : 'Login as Admin ?'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
