export interface XoState {
    currentPlayer: string;
    board: string[]
}

export const defaultXoState: XoState = {
    currentPlayer: 'X',
    board: new Array(9).fill('')
}

export const computeWinner = (board: string[]) => {
    // TODO implement logic.
    return 'X'
}

export const move = (state: XoState, idx: number) => {
    const result = {...state};
    result.board[idx] = state.currentPlayer;
    result.currentPlayer = state.currentPlayer === 'X' ? 'O' : 'X';
    return result;
}