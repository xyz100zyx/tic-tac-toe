import {createSlice} from "@reduxjs/toolkit";
import {checkWinner, insertSymbol} from "../../controller/controllers";

const initialState = {
    board: [
        [null, null, null],
        [null, null, null],
        [null, null, null]
    ] as Array<Array<String | null>>,
    currentSymbol: 'x',
}

const boardSlice = createSlice({
    name: 'board',
    initialState,
    reducers: {
        insert: (state, action) => {
            if (insertSymbol(action.payload, state.board)){
                state.board[Number(action.payload[0][0])][Number(action.payload[0][1])] = state.currentSymbol;
                state.currentSymbol = state.currentSymbol === 'x' ? 'o' : 'x';
                checkWinner(state.board)
            }
        }
    }
})

export const {insert} = boardSlice.actions;
export default boardSlice.reducer;