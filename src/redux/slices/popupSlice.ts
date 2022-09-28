import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    isOpenStart: true,
    isOpenFinish: false,
}

const popupSlice = createSlice({
    name: 'popup',
    initialState,
    reducers: {
        setStart: (state,action) => {
            state.isOpenStart = action.payload;
        },
        setFinish: (state,action) => {
            state.isOpenFinish = action.payload;
        }
    }
})

export const {setStart, setFinish} = popupSlice.actions;
export default popupSlice.reducer;