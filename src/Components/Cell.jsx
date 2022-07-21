import React from 'react';
import Square from './Square';
import { useState } from 'react';

function Cell() {
    const [cell, setCell] = useState(['', '', '', '', '', '', '', '', '']);
    return (
        <div className="cell-board">
            <div className="cell">
                <Square
                    value={cell[0]}
                    takeSquare={() => {
                        alert(0);
                    }}
                ></Square>
                <Square
                    value={cell[1]}
                    takeSquare={() => {
                        alert(0);
                    }}
                ></Square>
                <Square
                    value={cell[2]}
                    takeSquare={() => {
                        alert(0);
                    }}
                ></Square>
            </div>
            <div className="cell"></div>
            <div className="cell"></div>
        </div>
    );
}

export default Cell;
