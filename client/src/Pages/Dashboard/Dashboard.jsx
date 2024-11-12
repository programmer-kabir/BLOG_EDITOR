import React, { useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import useAuth from "../../Components/Hooks/useAuth";
import { LuLogIn } from "react-icons/lu";
import { FaBarsStaggered, FaPlus } from "react-icons/fa6";
import { MdLogout } from "react-icons/md";
import logo from "../../assets/Logo/logo1.png";
const Dashboard = () => {
  const { logOut, user } = useAuth();

  const [isNavOpen, setIsNavOpen] = useState(false);
  const toggleSidebar = () => {
    setIsNavOpen(!isNavOpen);
  };
  const handleLogOut = () => {
    logOut();
  };
  return (
    <div>
      <section className="fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-300 shadow border-b bg-background/90 backdrop-blur-lg">
        <div className="w-[90%] md:w-[95%] mx-auto flex items-center justify-between h-16">
          {/* Logo */}
          <div
            onClick={toggleSidebar}
            className="bg-[#F50400] md:hidden px-3 py-2 rounded-md"
          >
            <FaBarsStaggered color="#fff " className="bg-[#F50400]" size={22} />
          </div>
          <div className="md:flex gap-1 hidden  items-center justify-center">
            <img className="h-[35px]" src={logo} alt="Logo" />
            <h2 className="text-black text-[17px] font-semibold">
              Blog Editor
            </h2>
          </div>
          {/* Middle Section */}
          {/* <div className="md:flex  gap-2 hidden text-sm">
            <NavLink
              to="admin"
              className={({ isActive }) =>
                isActive
                  ? "px-5 text-[#F50400] font-medium py-2 rounded-sm bg-[#f5f5f5]"
                  : "px-5 py-2 font-medium text-[#737373] hover:text-[#F50400]"
              }
            >
              Dashboard
            </NavLink>
            <NavLink
              to="admin/bloggers"
              className={({ isActive }) =>
                isActive
                  ? "px-5 py-2 font-medium text-[#F50400] rounded-sm bg-[#f5f5f5]"
                  : "px-5 py-2 font-medium text-[#737373] hover:text-[#F50400]"
              }
            >
              Bloggers
            </NavLink>
            <NavLink
              to="admin/Moderator"
              className={({ isActive }) =>
                isActive
                  ? "px-5 py-2 text-[#F50400] font-medium  rounded-sm bg-[#f5f5f5]"
                  : "px-5 py-2 font-medium text-[#737373] hover:text-[#F50400]"
              }
            >
              Moderator
            </NavLink>
          </div> */}
          <div className="md:flex gap-2 hidden text-sm">
  <NavLink
    to="admin"
    end
    className={({ isActive }) =>
      isActive
        ? "px-5 text-[#F50400]  py-2 rounded-sm bg-[#f5f5f5]"
        : "px-5 py-2  text-[#737373] hover:text-[#F50400]"
    }
  >
    Dashboard
  </NavLink>
  <NavLink
    to="admin/users"
    className={({ isActive }) =>
      isActive
        ? "px-5 py-2  text-[#F50400] rounded-sm bg-[#f5f5f5]"
        : "px-5 py-2  text-[#737373] hover:text-[#F50400]"
    }
  >
    Users
  </NavLink>

  <NavLink
    to="admin/blogs"
    className={({ isActive }) =>
      isActive
        ? "px-5 py-2 text-[#F50400]  rounded-sm bg-[#f5f5f5]"
        : "px-5 py-2  text-[#737373] hover:text-[#F50400]"
    }
  >
    Blogs
  </NavLink>
</div>

          {/* Login Logout */}
          <div>
            {user ? (
              <button
                onClick={handleLogOut}
                to="/signin"
                className="text-white"
              >
                <button className="flex items-center justify-center gap-1 rounded font-medium bg-[#F50400] px-5 py-2 text-white transition-all duration-300 ease-in-out group">
                  Logout{" "}
                  <MdLogout
                    className="transform transition-transform duration-300 ease-in-out group-hover:translate-x-2"
                    size={21}
                  />
                </button>
              </button>
            ) : (
              <Link to="/signin" className="text-white">
                <button className="flex items-center justify-center gap-1 rounded font-medium bg-[#F50400] px-5 py-2 text-white transition-all duration-300 ease-in-out group">
                  Login{" "}
                  <LuLogIn
                    className="transform transition-transform duration-300 ease-in-out group-hover:translate-x-2"
                    size={21}
                  />
                </button>
              </Link>
            )}
          </div>
        </div>
        {/*  */}
        <div className="flex justify-end">
          <div
            className={`fixed text-white top-0 bottom-0 flex justify-end left-0 right-0 bg-black bg-opacity-75 z-50 transition-opacity duration-500 ease-in-out ${
              isNavOpen
                ? "opacity-100  transition-opacity duration-500 ease-out "
                : "  opacity-0 pointer-events-none "
            }`}
          >
            {/* Sidebar Container */}
            <div
              className={`w-9/12 border-l bg-white overflow-y-auto py-3 md:hidden h-screen transform transition-transform duration-500 ease-[cubic-bezier(0.7,0,0.3,1)] ${
                isNavOpen ? "translate-x-0 " : "translate-x-full"
              }`}
            >
              <div className="flex px-5 justify-between border-b border-gray-400 pb-4">
                <div className="flex gap-2   items-center justify-center">
                  <img className="h-[35px]" src={logo} alt="Logo" />
                  <h2 className="text-black text-[17px] font-semibold">
                    Blog Editor
                  </h2>
                </div>
                <button
                  className="border border-[#F50400] px-1 rounded-md"
                  onClick={toggleSidebar}
                >
                  <FaPlus className="rotate-45" size={20} color="black" />
                </button>
              </div>
              <div className="pt-4 px-2">{/* <HomeOrderCart /> */}</div>
            </div>
          </div>
        </div>
      </section>
      <div className="mt-[70px]">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
