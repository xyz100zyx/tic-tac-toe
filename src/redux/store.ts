import {configureStore} from "@reduxjs/toolkit";
import boardReducer from "./slices/boardSlice";
import {useDispatch} from "react-redux";
import popupReducer from "./slices/popupSlice";
import playerReducer from "./slices/playerSlice";

const store = configureStore({
    reducer: {
        board: boardReducer,
        popup: popupReducer,
        player: playerReducer,
    }
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch;
export default store;