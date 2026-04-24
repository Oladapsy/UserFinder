import { configureStore } from "@reduxjs/toolkit";
import { userApi } from "@/api/userApi";

export const store = configureStore({
  reducer: {
    // remains reducer from the config
    [userApi.reducerPath]: userApi.reducer,
  },
  // middle ware
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;


//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware().concat(userApi.middleware),
