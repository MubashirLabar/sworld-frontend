import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import chatServices from "./services/chatServices";

const store = configureStore({
  reducer: {
    [chatServices.reducerPath]: chatServices.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(chatServices.middleware),
});

setupListeners(store.dispatch);

export default store;
