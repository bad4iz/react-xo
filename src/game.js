import React, {Component} from 'react';

class Game extends Component {
    render() {
        return (
            <div className='game'>
                <h1> Hello G vvame!!!</h1>
                <div className='game-board'>
                    board
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