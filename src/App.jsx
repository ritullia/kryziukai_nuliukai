import React from 'react';
import './App.css';
import Cell from './Components/Cell';

function App() {
    return (
        <div className="game">
            <h1>Kryžiukai - nuliukai</h1>
            <h1>Pažaiskime!!!</h1>
            <Cell></Cell>
            <h2 className='player'>Žaidėjas 1:</h2>
            <h2 className='player'>Žaidėjas 2:</h2>
        </div>
    );
}

export default App;
