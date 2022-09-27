export const cellClassName = (symbol: String, styles: any) => {
    if (symbol === 'x'){
        return `${styles.cell} ${styles.cell__x}`
    }
    else if(symbol === 'o'){
        return `${styles.cell} ${styles.cell__o}`
    }
    else{
        return `${styles.cell}`
    }
}

export const insertSymbol = (position: String, boardState: Array<Array<String | null>>) => {
    const row = Number(position[0][0])
    const column = Number(position[0][1])
    return boardState[row][column] === null
}

export const checkWinner = (boardState: Array<Array<String | null>>) => {
    if (
        ((boardState[0][0] === boardState[0][1]) && (boardState[0][1] === boardState[0][2]) && (boardState[0][2] === 'x')) ||
        ((boardState[1][0] === boardState[1][1]) && (boardState[1][1] === boardState[1][2]) && (boardState[1][2] === 'x')) ||
        ((boardState[2][0] === boardState[2][1]) && (boardState[2][1] === boardState[2][2]) && (boardState[2][2] === 'x')) ||
        ((boardState[0][0] === boardState[1][1]) && (boardState[1][1] === boardState[2][2]) && (boardState[2][2] === 'x')) ||
        ((boardState[2][0] === boardState[1][1]) && (boardState[1][1] === boardState[0][2]) && (boardState[0][2] === 'x'))
    ){console.log(`Winner is x`)}
    else if (
        ((boardState[0][0] === boardState[0][1]) && (boardState[0][1] === boardState[0][2]) && (boardState[0][2] === 'o')) ||
        ((boardState[1][0] === boardState[1][1]) && (boardState[1][1] === boardState[1][2]) && (boardState[1][2] === 'o')) ||
        ((boardState[2][0] === boardState[2][1]) && (boardState[2][1] === boardState[2][2]) && (boardState[2][2] === 'o')) ||
        ((boardState[0][0] === boardState[1][1]) && (boardState[1][1] === boardState[2][2]) && (boardState[2][2] === 'o')) ||
        ((boardState[2][0] === boardState[1][1]) && (boardState[1][1] === boardState[0][2]) && (boardState[0][2] === 'o'))
    ){console.log(`Winner is o`)}
}