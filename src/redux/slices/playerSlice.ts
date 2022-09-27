import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    players: Array<{name:String, score: Number}>(0)
}

const playerSlice = createSlice({
    name: 'player',
    initialState,
    reducers: {
        addPlayer: (state, action) => {
            state.players.push({name: action.payload, score: 0});
        }
    }
})

export const {addPlayer} = playerSlice.actions;
export default playerSlice.reducer;