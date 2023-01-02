import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { requestSlice } from "./requestSlice";
import { createWrapper } from "next-redux-wrapper";

const makeStore = () =>
  configureStore({
    reducer: {
      [requestSlice.name]: requestSlice.reducer,
    },
    devTools: true,
  });

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore["getState"]>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action
>;
export const wrapper = createWrapper<AppStore>(makeStore);
