import { configureStore } from "@reduxjs/toolkit";
import appReducer from "../features/appSlice";

export const store = configureStore({
  reducer: {
    app: appReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([]),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

declare module "react-redux" {
  // noinspection JSUnusedGlobalSymbols
  interface DefaultRootState extends RootState {}
}

