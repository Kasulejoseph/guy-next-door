import { createSlice } from "@reduxjs/toolkit"
import { HYDRATE } from "next-redux-wrapper";
import { AppState } from "./store";

const initialState = {
    isLoading: false
}

export const requestSlice = createSlice({
    name: "request",
    initialState,
    reducers: {
        setRequestState(state, action) {
            state.isLoading = action.payload;
        },
        extraReducers: {
            [HYDRATE]: (state, action) => {
                console.log('HYDRATE', state, action.payload);
                return {
                    ...state,
                    ...action.payload.request,
                }
            }
        }
    }
})

export const { setRequestState } = requestSlice.actions;

export const selectRequestState = (state: AppState) => state.request.isLoading;

export default requestSlice.reducer;