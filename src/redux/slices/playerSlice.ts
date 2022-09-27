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
        },
        incScore: (state, action) => {
            state.players.map((player) => {
                if (player.name === action.payload){
                    player.score = Number(player.score)+1;
                }
            })
        }
    }
})

export const {addPlayer} = playerSlice.actions;
export default playerSlice.reducer;