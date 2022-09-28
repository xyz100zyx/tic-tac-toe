import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    players: Array<{name:String, score: 0}>(0)
}

const playerSlice = createSlice({
    name: 'player',
    initialState,
    reducers: {
        addPlayer: (state, action) => {
            state.players.push({name: action.payload, score: 0});
        },
        incScore: (state, action) => {
            state.players.map(player => {
                if (player.name === action.payload) player.score++;
            })
        }
    }
})

export const {addPlayer, incScore} = playerSlice.actions;
export default playerSlice.reducer;