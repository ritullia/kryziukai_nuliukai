import React from 'react';

function Square({ value, takeSquare }) {
    return (
        <div className="sqr" onClick={takeSquare}>
            {value}
        </div>
    );
}

export default Square;
