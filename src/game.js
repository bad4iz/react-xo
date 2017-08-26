import React, {Component} from 'react';
import Board from "./board";
import register from "./registerServiceWorker";



class Game extends Component {

    constructor() {
        super();
        this.state = {
             xIsNext: true,
            stepNumber:0,
            history: [{
                 squares: Array(9).fill(null)
            }]

        };
    }
    handleClick(i) {
        console.log(i);
    }
    render() {
        const {xIsNext, stepNumber, history } = this.state;
        const current = history[stepNumber] ;
        const status = 'Next player is' + (xIsNext ? 'X' : '0 ');

        return (
            <div className='game'>
                <h1> Hello G vvame!!!</h1>
                <div className='game-board'>
                    <Board
                        squares={current.squares}
                        onClick={(i)=> this.handleClick(i)}
                    />
                </div>
                <div className='game-info'>
                    <div className="">{'status'}</div>
                    <ul>{/*history*/}</ul>
                </div>
            </div>
        );
    }
}

export default Game;
