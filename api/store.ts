import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    // remains reducer and
  },
  // middle ware
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

//   reducer: {
//     [userApi.reducerPath]: userApi.reducer,
//   },
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware().concat(userApi.middleware),
