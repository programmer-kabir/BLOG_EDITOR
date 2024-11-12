import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Add from "../Components/Home/Add";
import Blogs from "../Pages/Blogs/Blogs";
import DetailsBlog from "../Components/Blog/DetailsBlog";
import Blog from "../Components/Blog/Blog";
import Signin from "../Pages/Authentication/signin/Signin";
import Signup from "../Pages/Authentication/Signup/Signup";
import Dashboard from "../Pages/Dashboard/Dashboard";
import AdminBoard from "../Pages/Dashboard/Admin/AdminBoard";
import ShowBloggers from "../Pages/Dashboard/Admin/ShowBloggers";
import ShowModerator from "../Pages/Dashboard/Admin/ShowModerator";
import AllBlogs from "../Pages/Dashboard/Admin/AllBlogs";
import AllUsers from "../Pages/Dashboard/Admin/AllUsers";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    // errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/AddBlog",
        element: <Add />,
      },
      {
        path: "/signup",
        element: <Signup />
      },
      {
        path: "/signin",
        element: <Signin />,
      },
    ],
  },
  {
    path:"/blogs",
    element:<Blogs />,
    children:[
      {
        path:"category/:name",
        element:<Blog />
      },
      {
        path:"details/:id",
        element:<DetailsBlog />,
        
      }
    ]
  },
  {
    path:"/dashboard",
    element:<Dashboard />,
    children:[
      {
        path:"admin",
        element:<AdminBoard />
      },
      {
        path:"admin/users",
        element:<AllUsers />
      },
      {
        path:"admin/blogs",
        element:<AllBlogs />
      }
    ]
  }
]);

export default router;
