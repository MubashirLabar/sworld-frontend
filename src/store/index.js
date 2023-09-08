import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

import globalReducer from "./reducers/globalReducer";
import chatServices from "./services/chatServices";
import searchServices from "./services/searchServices";
import placeServices from "./services/placeServices";

const store = configureStore({
  reducer: {
    [chatServices.reducerPath]: chatServices.reducer,
    [searchServices.reducerPath]: searchServices.reducer,
    [placeServices.reducerPath]: placeServices.reducer,
    globalReducer: globalReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(chatServices.middleware)
      .concat(searchServices.middleware)
      .concat(placeServices.middleware),
});

setupListeners(store.dispatch);

export default store;
