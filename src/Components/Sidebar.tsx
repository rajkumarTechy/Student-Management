import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import { useRole } from "../Context/RoleProvider";

const Sidebar = () => {
  const { role } = useRole();

  return (
    <>
      <div className="bg-white animate-fade-right animate-ease-in-out shadow-[3px_5px_15px_-6px_rgba(0,_0,_0,_1)] fixed top-0 left-0 flex-col flex gap-6 items-center p-3 h-dvh w-64">
        <div className="flex items-center">
          <img src={logo} width={65} alt="" />
          <h1 className="text-fontPrimary text-4xl">MET</h1>
        </div>
        <ul className="flex flex-col gap-y-2.5 w-full items-center">
          <NavLink
            to={role === "student" ? "overview" : "/admin/overview"}
            className={({ isActive }) =>
              `${
                isActive ? "bg-primary text-fontPrimary" : "text-fontSecondary "
              }  font-medium w-[80%] py-2.5 px-1.5 rounded-lg`
            }
          >
            Overview
          </NavLink>
          {role === "admin" && (
            <NavLink
              to={"/admin/teachers"}
              className={({ isActive }) =>
                `${
                  isActive
                    ? "bg-primary text-fontPrimary"
                    : "text-fontSecondary "
                }  font-medium w-[80%] py-2.5 px-1.5 rounded-lg`
              }
            >
              Teachers
            </NavLink>
          )}
          <NavLink
            to={role === "student" ? "assignments" : "/admin/assignments"}
            className={({ isActive }) =>
              `${
                isActive ? "bg-primary text-fontPrimary" : "text-fontSecondary "
              }  font-medium w-[80%] py-2.5 px-1.5 rounded-lg`
            }
          >
            Assignments
          </NavLink>
          <NavLink
            to={role === "student" ? "internals" : "/admin/internalmarks"}
            className={({ isActive }) =>
              `${
                isActive ? "bg-primary text-fontPrimary" : "text-fontSecondary "
              }  font-medium w-[80%] py-2.5 px-1.5 rounded-lg`
            }
          >
            Internal Marks
          </NavLink>
          <NavLink
            to={role === "student" ? "results" : "/admin/semesterresults"}
            className={({ isActive }) =>
              `${
                isActive ? "bg-primary text-fontPrimary" : "text-fontSecondary "
              }  font-medium w-[80%] py-2.5 px-1.5 rounded-lg`
            }
          >
            Semester Results
          </NavLink>
          <NavLink
            to={role === "student" ? "notes" : "/admin/notes"}
            className={({ isActive }) =>
              `${
                isActive ? "bg-primary text-fontPrimary" : "text-fontSecondary "
              }  font-medium w-[80%] py-2.5 px-1.5 rounded-lg`
            }
          >
            Download Notes
          </NavLink>
          <NavLink
            to={role === "student" ? "timetable" : "/admin/timetable"}
            className={({ isActive }) =>
              `${
                isActive ? "bg-primary text-fontPrimary" : "text-fontSecondary "
              }  font-medium w-[80%] py-2.5 px-1.5 rounded-lg`
            }
          >
            Time Table
          </NavLink>
          <NavLink
            to={role === "student" ? "cirular" : "/admin/circular"}
            className={({ isActive }) =>
              `${
                isActive ? "bg-primary text-fontPrimary" : "text-fontSecondary "
              }  font-medium w-[80%] py-2.5 px-1.5 rounded-lg`
            }
          >
            Circular
          </NavLink>
          <NavLink
            to={role === "student" ? "events" : "/admin/events"}
            className={({ isActive }) =>
              `${
                isActive ? "bg-primary text-fontPrimary" : "text-fontSecondary "
              }  font-medium w-[80%] py-2.5 px-1.5 rounded-lg`
            }
          >
            Events
          </NavLink>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
