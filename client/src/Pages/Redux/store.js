import { configureStore } from "@reduxjs/toolkit";
import blogSlice from "./Blogs/blogSlice";
import usersSlice from "./Users/userSlice";
import bloggerBlogSlice from "./BloggerBlogs/bloggerBlogSlice";
import commentSlice from "./Comments/commentSlice";
const store = configureStore({
  reducer: {
    Blogs: blogSlice,
    Users: usersSlice,
    BloggerBlog: bloggerBlogSlice,
    Comments: commentSlice,
  },
});
export default store;
