import React from 'react';
import { useState } from 'react';
import './App.css';
import Cell from './Components/Cell';

function App() {
    return (
        <div className="game">
            <h1>Žaidimas /Kryžiukai-nuliukai/</h1>
            <Cell></Cell>
        </div>
    );
}

export default App;
