import { configureStore } from "@reduxjs/toolkit";
import taskSlice from "./reducers/taskSlice";

const store = configureStore({
  reducer: {
    task: taskSlice,
  },
});

export default store;
