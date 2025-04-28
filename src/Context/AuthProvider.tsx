import {
    createContext,
    ReactNode,
    useContext,
    useEffect,
    useState,
  } from "react";
  import { useNavigate } from "react-router-dom";
import { useRole } from "./RoleProvider";
  
  interface Authprops {
    isLoggedin: boolean;
    setIsLoggedin: (isLoggedin: boolean) => void;
  }
  
  const AuthContext = createContext<Authprops | undefined>(undefined);
  
  export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [isLoggedin, setLoginState] = useState<boolean>(false);
    const navigate = useNavigate();

    const {role} = useRole();
  
    const setIsLoggedin = (value: boolean) => {
      setLoginState(value);
      localStorage.setItem("isLoggedIn", JSON.stringify(value));
      if (value) {
        if(role === 'student'){
          navigate("/overview");
        } else{
          navigate('/admin/overview')
        }
      } else {
        navigate("/");
      }
    };
  
    useEffect(() => {
      const storedLoggedIn = localStorage.getItem("isLoggedIn");
      if (storedLoggedIn !== null) {
        const parsed = JSON.parse(storedLoggedIn);
        setLoginState(parsed);
        if (parsed) {
          navigate("/overview");
        } else {
          navigate("/");
        }
      } else {
        navigate("/");
      }
    }, []); 
  
    return (
      <AuthContext.Provider value={{ isLoggedin, setIsLoggedin }}>
        {children}
      </AuthContext.Provider>
    );
  };
  
  export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
      throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
  };
  