import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    isOpenStart: true,
}

const popupSlice = createSlice({
    name: 'popup',
    initialState,
    reducers: {
        closeStart: (state) => {
            state.isOpenStart = false;
        }
    }
})

export const {closeStart} = popupSlice.actions;
export default popupSlice.reducer;