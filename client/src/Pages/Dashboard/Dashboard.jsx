import React, { useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import useAuth from "../../Components/Hooks/useAuth";
import { IoMailUnreadOutline } from "react-icons/io5";
import { FaBarsStaggered, FaPlus } from "react-icons/fa6";
import { MdLogout } from "react-icons/md";
import logo from "../../assets/Logo/logo1.png";
import useAdmin from "../../Components/Hooks/useAdmin";
import useBlogger from "../../Components/Hooks/useBlogger";
import { SlSettings } from "react-icons/sl";
import Loader from "../../Components/Loader/Loader";
const Dashboard = () => {
  const [isAdmin] = useAdmin();
  const [isBlogger] = useBlogger();
  const { logOut, user, loading } = useAuth();
  // console.log(user);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const toggleSidebar = () => {
    setIsNavOpen(!isNavOpen);
  };
  const handleLogOut = () => {
    logOut();
  };
  if (loading) {
    <Loader />;
  }
  const [isImageDropdownOpen, setIsImageDropdownOpen] = useState(false);
  const handleImageDropdownToggle = () => {
    setIsImageDropdownOpen((prev) => !prev);
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
          <Link
            to="/"
            className="md:flex gap-1 hidden  items-center justify-center"
          >
            <img className="h-[35px]" src={logo} alt="Logo" />
            <h2 className="text-black text-[17px] font-semibold">
              Blog Editor
            </h2>
          </Link>
          {/* Admin Section */}
          {isAdmin && (
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
                to="admin/show-bloggers"
                className={({ isActive }) =>
                  isActive
                    ? "px-5 py-2  text-[#F50400] rounded-sm bg-[#f5f5f5]"
                    : "px-5 py-2  text-[#737373] hover:text-[#F50400]"
                }
              >
                Bloggers
              </NavLink>
              {user.email === 'kabirr@gmail.com' &&  <NavLink
                to="admin/show-users"
                className={({ isActive }) =>
                  isActive
                    ? "px-5 py-2  text-[#F50400] rounded-sm bg-[#f5f5f5]"
                    : "px-5 py-2  text-[#737373] hover:text-[#F50400]"
                }
              >
                Users
              </NavLink>}
             

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
          )}
        
          {/* isBlogger Section */}
          {isBlogger && (
            <div className="md:flex gap-2 hidden text-sm">
              <NavLink
                to="blogger"
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
                to="blogger/add-blog"
                end
                className={({ isActive }) =>
                  isActive
                    ? "px-5 text-[#F50400]  py-2 rounded-sm bg-[#f5f5f5]"
                    : "px-5 py-2  text-[#737373] hover:text-[#F50400]"
                }
              >
                Add Blog
              </NavLink>
              <NavLink
                to="blogger/show-blog"
                end
                className={({ isActive }) =>
                  isActive
                    ? "px-5 text-[#F50400]  py-2 rounded-sm bg-[#f5f5f5]"
                    : "px-5 py-2  text-[#737373] hover:text-[#F50400]"
                }
              >
                Show Blog
              </NavLink>
            </div>
          )}

          {/* Login Logout */}
          <div className="">
            
            <div className="relative">
              {/* Profile Image */}
              <div
                onClick={handleImageDropdownToggle}
                className="cursor-pointer"
              >
                <img
                  className="h-10 w-10 rounded-full"
                  src={user.photoURL}
                  alt="Profile"
                />
              </div>

              {/* Dropdown Menu */}
              {isImageDropdownOpen && (
                <div className="absolute right-0 mt-1 w-64 bg-white border shadow rounded-lg py-1 dropdown z-50">
                  <div className="flex flex-col px-2 py-1">
                    <button className="flex justify-start items-center  gap-1 rounded font-medium hover:bg-[#F5F5F5] px-5 py-2 text-[#737373] w-full transition-all duration-300 ease-in-out group">
                      {user.email}
                      <IoMailUnreadOutline
                        className="transform transition-transform duration-300 ease-in-out group-hover:translate-x-2"
                        size={21}
                      />
                    </button>
                   
                    <button   onClick={handleLogOut} className="flex items-center my-1 mx-2 gap-1 rounded font-medium hover:bg-[#F5F5F5] px-5 py-2 text-[#737373] w-full transition-all duration-300 ease-in-out group">
                      Logout{" "}
                      <MdLogout
                        className="transform transition-transform duration-300 ease-in-out group-hover:translate-x-2"
                        size={21}
                      />
                    </button>
                  </div>
                </div>
              )}
            </div>
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
              <div className="pt-4 px-2">
                <div>
                    {/* Admin Section */}
          {isAdmin && (
            <div className="flex flex-col gap-2  text-sm">
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
                to="admin/show-bloggers"
                className={({ isActive }) =>
                  isActive
                    ? "px-5 py-2  text-[#F50400] rounded-sm bg-[#f5f5f5]"
                    : "px-5 py-2  text-[#737373] hover:text-[#F50400]"
                }
              >
                Bloggers
              </NavLink>
              {user.email === 'kabirr@gmail.com' &&  <NavLink
                to="admin/show-users"
                className={({ isActive }) =>
                  isActive
                    ? "px-5 py-2  text-[#F50400] rounded-sm bg-[#f5f5f5]"
                    : "px-5 py-2  text-[#737373] hover:text-[#F50400]"
                }
              >
                Users
              </NavLink>}
             

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
          )}
        
          {/* isBlogger Section */}
          {isBlogger && ( 
            <div className="flex flex-col gap-2  text-sm">
              <NavLink
                to="blogger"
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
                to="blogger/add-blog"
                end
                className={({ isActive }) =>
                  isActive
                    ? "px-5 text-[#F50400]  py-2 rounded-sm bg-[#f5f5f5]"
                    : "px-5 py-2  text-[#737373] hover:text-[#F50400]"
                }
              >
                Add Blog
              </NavLink>
              <NavLink
                to="blogger/show-blog"
                end
                className={({ isActive }) =>
                  isActive
                    ? "px-5 text-[#F50400]  py-2 rounded-sm bg-[#f5f5f5]"
                    : "px-5 py-2  text-[#737373] hover:text-[#F50400]"
                }
              >
                Show Blog
              </NavLink>
            </div>
          )}
                </div>
              </div>
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
