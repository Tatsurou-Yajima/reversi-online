import React, { Component, ReactNode } from "react";

interface BoardProps {
    squares: ReactNode[];
    onClick: (i: number) => void;
}

class Board extends Component<BoardProps> {
    renderSquare = (i: number): JSX.Element => {
        const { squares, onClick } = this.props;
        return (
            <Square
                value={squares[i]}
                onClick={() => onClick(i)}
                key={i}
            />
        );
    }

    render = (): JSX.Element => {
        const boardSize = 8;
        const boardRows: JSX.Element[] = [];
        let squareIndex = 0;

        for (let row = 0; row < boardSize; row++) {
            const squares: JSX.Element[] = [];
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

interface SquareProps {
    value: ReactNode;
    onClick: () => void;
}

const Square = ({ value, onClick }: SquareProps): JSX.Element => {
    return (
        <button className="square" onClick={onClick}>
            {value}
        </button>
    );
}

export default Board;
