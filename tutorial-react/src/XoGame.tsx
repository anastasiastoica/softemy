import { useState } from "react"
import { XoButton } from "./XoButton"
import { defaultXoState, XoState } from "./XoState";

export const XoGame = () => {
    const [state, setState] = useState<XoState>(defaultXoState);

    return (
        <>
            <h1>Next player is {state.currentPlayer}</h1>
            <table>
                <tbody>
                    <tr>
                        <td><XoButton setState={setState} state={state} idx={0}/></td>
                        <td><XoButton setState={setState} state={state} idx={1}/></td>
                        <td><XoButton setState={setState} state={state} idx={2}/></td>
                    </tr>
                    <tr>
                        <td><XoButton setState={setState} state={state} idx={3}/></td>
                        <td><XoButton setState={setState} state={state} idx={4}/></td>
                        <td><XoButton setState={setState} state={state} idx={5}/></td>
                    </tr>
                    <tr>
                        <td><XoButton setState={setState} state={state} idx={6}/></td>
                        <td><XoButton setState={setState} state={state} idx={7}/></td>
                        <td><XoButton setState={setState} state={state} idx={8}/></td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}