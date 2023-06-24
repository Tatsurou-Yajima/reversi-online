import React from "react";

class Board extends React.Component {
    renderSquare = (i) => {
        return (
            <Square
                value={this.props.squares[i]}
                onClick={() => this.props.onClick(i)}
                key={i}
            />
        );
    }

    render = () => {
        const boardSize = 8;
        const boardRows = [];
        let squareIndex = 0;

        for (let row = 0; row < boardSize; row++) {
            const squares = [];
            for (let col = 0; col < boardSize; col++) {
                squares.push(this.renderSquare(squareIndex));
                squareIndex++;
            }
            boardRows.push(
                <div className="board-row" key={row}>
                    {squares}
                </div>
            );
        }

        return <div>{boardRows}</div>;
    }
}

const Square = (props) => {
    return (
        <button className="square"
            onClick={props.onClick}
        >
            {props.value}
        </button>
    );
}

export default Board;
