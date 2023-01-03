import { createSlice } from "@reduxjs/toolkit"
import { HYDRATE } from "next-redux-wrapper";
import { AppState } from "./store";

const initialState = {
    data: []
}

export const requestSlice = createSlice({
    name: "request",
    initialState,
    reducers: {
        setRequestState(state, action) {
            state.data = action.payload;
        },
        extraReducers: {
            [HYDRATE]: (state, action) => {
                console.log('HYDRATE >>>>>>', state, action.payload);
                return {
                    ...state,
                    ...action.payload.request,
                }
            }
        }
    }
})

export const { setRequestState } = requestSlice.actions;

export const selectRequestState = (state: AppState) => state.request.data;

export default requestSlice.reducer;