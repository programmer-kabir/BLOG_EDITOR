import { configureStore } from "@reduxjs/toolkit";
import blogSlice from "./Blogs/blogSlice";
import usersSlice from "./Users/userSlice"
const store = configureStore({
  reducer: {
    Blogs: blogSlice,
    Users:usersSlice
  },
});
export default store;
