import { move, XoState } from "./XoState"

export const XoButton = (props: {
    state: XoState,
    setState: (state: XoState) => void,
    idx: number
}) => {

    const handleClick = () => {
        props.setState(move(props.state, props.idx));
    }

    const boardValue = props.state.board[props.idx];
    const background = boardValue !== '' ? 'yellow' : '';
    return (
        <div
            onClick={handleClick}
            style={{
                background,
                width: "40px",
                height: "40px",
                fontSize: "30px",
                lineHeight: "40px",
                textAlign: "center",
                borderStyle: "solid",
                borderColor: "black"
            }}> {boardValue} </div>
    )
}