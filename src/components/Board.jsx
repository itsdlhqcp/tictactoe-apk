import React from 'react';
import Square from './Square';

const Board = ({board, handleSquareClick}) => {
  

  const renderSqaure = position => {
    return (
    <Square
     value={board[position]}
      onClick={() => handleSquareClick(position)}
    />
    );
  };
  return (
    <div className="board">
        <div className="board-row">
            {/* <Square value={board[0]} onClick={()=>{
              handleSquareClick(0)
            }}/> */}
            { renderSqaure(0)}
            { renderSqaure(1)}
            { renderSqaure(2)}
        </div>
        <div className="board-row">
         { renderSqaure(3)}
         { renderSqaure(4)}
         { renderSqaure(5)}
        </div>
        <div className="board-row">
        { renderSqaure(6)}
        { renderSqaure(7)}
        { renderSqaure(8)}
        </div>
    </div>
  )
}

export default Board