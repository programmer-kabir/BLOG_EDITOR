import { configureStore } from "@reduxjs/toolkit";
import blogSlice from "./Blogs/blogSlice";

const store = configureStore({
  reducer: {
    Blogs: blogSlice,
  },
});
export default store;
