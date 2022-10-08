import React, {useState} from 'react';
import Square from './Square';

const Board = () => {
  const [board,setBoard] =useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(false);
  const handleSquareClick = (position) => {
    if (board[position]){
      return;
    }
      setBoard ((prev)=> {
          return prev.map((square,pos)=>{
            if (pos === position) {
              return isXNext ? 'x' : '0';
            }
            return square;
          })
      })
      setIsXNext(prev => !prev);
  }

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