import { configureStore } from "@reduxjs/toolkit";
import appReducer from "../features/appSlice";
import {
    authenticationApiSlice,
    authenticationMiddleware,
    authenticationReducer,
} from "../react-authentication";
import mapReducer from "../features/mapSlice";

export const store = configureStore({
    reducer: {
        app: appReducer,
        map: mapReducer,
        authentication: authenticationReducer,
        [authenticationApiSlice.reducerPath]: authenticationApiSlice.reducer,
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat([
            authenticationApiSlice.middleware,
            authenticationMiddleware,
        ]),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

declare module "react-redux" {
    // noinspection JSUnusedGlobalSymbols
    interface DefaultRootState extends RootState {}
}

