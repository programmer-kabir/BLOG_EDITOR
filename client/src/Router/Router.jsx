import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Add from "../Components/Home/Add";
import Blogs from "../Pages/Blogs/Blogs";
import DetailsBlog from "../Components/Blog/DetailsBlog";
import Blog from "../Components/Blog/Blog";
import Signin from "../Pages/Authentication/signin/Signin";
import Signup from "../Pages/Authentication/Signup/Signup";

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
  }
]);

export default router;
