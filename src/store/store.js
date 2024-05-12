import { configureStore } from "@reduxjs/toolkit";
import search from "./slices";

const store = configureStore({
  reducer: { user: search.reducer }
});

export default store;
