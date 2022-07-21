import React from 'react';
import Square from './Square';
import { useState, useEffect } from 'react';
import { GameFunction } from '../GameFunction';

function Cell() {
    const [cell, setCell] = useState(['', '', '', '', '', '', '', '', '']);

    const [gamePlayer, setGamePlayer] = useState('0');
    const [result, setResult] = useState({ winner: 'none', state: 'none' });

    useEffect(() => {
        checkWinner();
        noWinner();

        if (gamePlayer === 'X') {
            setGamePlayer('O');
        } else {
            setGamePlayer('X');
        }
    }, [cell]);

    useEffect(() => {
        if (result.state !== 'none') {
            alert(`Žaidimas baigtas! Laimėjo: ${result.winner}`);
        }
    }, [result]);

    const takeSquare = (sqr) => {
        setCell(
            cell.map((value, i) => {
                if (i === sqr && value === '') {
                    return gamePlayer;
                }
                return value;
            })
        );
    };

    const checkWinner = () => {
        GameFunction.forEach((currentGameFunc) => {
            const firstGamePlayer = cell[currentGameFunc[0]];

            if (firstGamePlayer === '') return;

            let winningTemplate = true;
            currentGameFunc.forEach((i) => {
                if (cell[i] !== firstGamePlayer) {
                    winningTemplate = false;
                }
            });
            if (winningTemplate) {
                setResult({ winner: gamePlayer, state: 'Won!' });
            }
        });
    };

    const noWinner = () => {
        let fill = true;
        cell.forEach((sqr) => {
            if (sqr === '') {
                fill = false;
            }
        });
        if (fill) {
            setResult({ winner: 'No Winner', state: 'Tie' });
        }
    };

    return (
        <div className="cell-board">
            <div className="cell">
                <Square
                    value={cell[0]}
                    takeSquare={() => {
                        takeSquare(0);
                    }}
                ></Square>
                <Square
                    value={cell[1]}
                    takeSquare={() => {
                        takeSquare(1);
                    }}
                ></Square>
                <Square
                    value={cell[2]}
                    takeSquare={() => {
                        takeSquare(2);
                    }}
                ></Square>
            </div>
            <div className="cell">
                <Square
                    value={cell[3]}
                    takeSquare={() => {
                        takeSquare(3);
                    }}
                ></Square>
                <Square
                    value={cell[4]}
                    takeSquare={() => {
                        takeSquare(4);
                    }}
                ></Square>
                <Square
                    value={cell[5]}
                    takeSquare={() => {
                        takeSquare(5);
                    }}
                ></Square>
            </div>
            <div className="cell">
                <Square
                    value={cell[6]}
                    takeSquare={() => {
                        takeSquare(6);
                    }}
                ></Square>
                <Square
                    value={cell[7]}
                    takeSquare={() => {
                        takeSquare(7);
                    }}
                ></Square>
                <Square
                    value={cell[8]}
                    takeSquare={() => {
                        takeSquare(8);
                    }}
                ></Square>
            </div>
        </div>
    );
}

export default Cell;
