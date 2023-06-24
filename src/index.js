import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { WhiteStone, BlackStone } from './components/Stone';
import Board from './components/Board';

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            history: [{
                squares: Array(9).fill(null),
            }],
            stepNumber: 0,
            blackIsNext: true,
        };
    }

    componentDidMount = () => {
        const squares = this.state.history[0].squares.slice();
        squares[27] = <WhiteStone />;
        squares[28] = <BlackStone />;
        squares[35] = <BlackStone />;
        squares[36] = <WhiteStone />;
        this.setState({ history: [{ squares: squares }] });
    }

    handleClick = (i) => {
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const current = history[history.length - 1];
        const squares = current.squares.slice();
        if (calculateWinner(squares) || squares[i]) {
            return;
        }
        squares[i] = this.state.blackIsNext ? <BlackStone /> : <WhiteStone />;
        this.setState({
            history: history.concat([{
                squares: squares,
            }]),
            stepNumber: history.length,
            blackIsNext: !this.state.blackIsNext,
        });
    }

    render = () => {
        const history = this.state.history;
        const current = history[this.state.stepNumber];
        const winner = calculateWinner(current.squares);

        let status;
        if (winner) {
            status = 'Winner: ' + winner;
        } else {
            status = 'Next player: ' + (this.state.blackIsNext ? '黒' : '白');
        }
        return (
            <div className="game">
                <div className="game-board">
                    <Board
                        squares={current.squares}
                        onClick={(i) => this.handleClick(i)}
                    />
                </div>
                <div className="game-info">
                    <div>{status}</div>
                </div>
            </div>
        );
    }
}

function calculateWinner(squares) {
    // TODO: 処理実装
    return null;
}

// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Game />);
