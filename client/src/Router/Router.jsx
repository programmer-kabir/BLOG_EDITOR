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
import Blogger from "../Pages/Dashboard/Blogger/Blogger";
import PrivateRoute from "./PrivetRoute";
import AdminRoute from "./AdminRoute";
import BloggerRoute from "./BloggerRoute";
import Error from "../Pages/Error/ErrorPage";
import AddBlog from "../Pages/Dashboard/Blogger/AddBlog";
import ShowBlog from "../Pages/Dashboard/Blogger/ShowBlog";
import AllBloggers from "../Pages/Dashboard/Admin/AllBloggers";
import AllUser from "../Pages/Dashboard/Admin/AllUser";
import AdminBlogs from "../Pages/Dashboard/Admin/AdminBlogs";
import AboutUs from "../Pages/FooterPages/AboutUs";
import ContactUs from "../Pages/FooterPages/ContactUs";
import Terms from "../Pages/FooterPages/Terms";
import FAQs from "../Pages/FooterPages/FAQs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Error />,
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
        element: <Signup />,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        path: "/contact-us",
        element: <ContactUs />,
      },
      {
        path: "/trems-conditions",
        element: <Terms />,
      },
      {
        path: "/faqs",
        element: <FAQs />,
      },
    ],
  },
  {
    path: "/blogs",
    element: <Blogs />,
    children: [
     { path: "",
      element: <Blog />,},
      {
        path: "category/:name",
        element: <Blog />,
      },
      {
        path: "details/:id",
        element: <DetailsBlog />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <AdminRoute>
          <Dashboard />
        </AdminRoute>
      </PrivateRoute>
    ),
    children: [
      {
        path: "admin",
        element: <AdminBoard />,
      },
      {
        path: "admin/show-bloggers",
        element: <AllBloggers />,
      },
      {
        path: "admin/show-users",
        element: <AllUser />,
      },
      {
        path: "admin/blogs",
        element: <AdminBlogs />,
      },
    ],
  },

  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <BloggerRoute>
          <Dashboard />
        </BloggerRoute>
      </PrivateRoute>
    ),
    children: [
      {
        path: "blogger",
        element: <Blogger />,
      },
      {
        path: "blogger/add-blog",
        element: <AddBlog />,
      },
      {
        path: "blogger/show-blog",
        element: <ShowBlog />,
      },
      {
        path: "blogger/blog-details/:id",
        element: <DetailsBlog />,
      },
    ],
  },
]);

export default router;
