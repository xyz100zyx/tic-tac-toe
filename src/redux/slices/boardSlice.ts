import {createSlice} from "@reduxjs/toolkit";
import {checkWinner, insertSymbol} from "../../controller/controllers";

const initialState = {
    board: [
        [null, null, null],
        [null, null, null],
        [null, null, null]
    ] as Array<Array<String | null>>,
    currentSymbol: 'x',
    winState: ''
}

const boardSlice = createSlice({
    name: 'board',
    initialState,
    reducers: {
        insert: (state, action) => {
            if (insertSymbol(action.payload, state.board)){
                state.board[Number(action.payload[0][0])][Number(action.payload[0][1])] = state.currentSymbol;
                state.currentSymbol = state.currentSymbol === 'x' ? 'o' : 'x';
                state.winState = checkWinner(state.board);
                if (state.winState === 'x' || state.winState === 'o' || state.winState === '-'){
                    state.board = [
                        [null, null, null],
                        [null, null, null],
                        [null, null, null]
                    ];
                    state.currentSymbol = 'x';
                }
            }
        }
    }
})

export const {insert} = boardSlice.actions;
export default boardSlice.reducer;