/*import React, { useState } from 'react';
import './css/Connect.css';

// Number of rows and columns in the game grid
const ROWS = 6;
const COLS = 7;

// Initial state of the game board
const initialBoard = Array(ROWS).fill(Array(COLS).fill(null));

const Connect = () => {
  const [board, setBoard] = useState(initialBoard);
  const [player, setPlayer] = useState('red');
  const [winner, setWinner] = useState(null);

  const handleCellClick = (row, col) => {
    if (!winner && !board[row][col]) {
      const updatedBoard = [...board];
      updatedBoard[row][col] = player;
      setBoard(updatedBoard);
      checkWinner(row, col);
      setPlayer(player === 'red' ? 'yellow' : 'red');
    }
  };

  const checkWinner = (row, col) => {
    const directions = [
      [1, 0], // Vertical
      [0, 1], // Horizontal
      [1, 1], // Diagonal (/)
      [1, -1], // Diagonal (\)
    ];

    for (let direction of directions) {
      let count = 1;
      const [dx, dy] = direction;
      let i = row + dx;
      let j = col + dy;

      while (i >= 0 && i < ROWS && j >= 0 && j < COLS && board[i][j] === player) {
        count++;
        i += dx;
        j += dy;
      }

      i = row - dx;
      j = col - dy;

      while (i >= 0 && i < ROWS && j >= 0 && j < COLS && board[i][j] === player) {
        count++;
        i -= dx;
        j -= dy;
      }

      if (count >= 4) {
        setWinner(player);
        break;
      }
    }
  };

  const renderBoard = () => {
    return board.map((row, rowIndex) => (
      <div className="row" key={rowIndex}>
        {row.map((cell, colIndex) => (
          <div
            className={`cell ${cell}`}
            key={colIndex}
            onClick={() => handleCellClick(rowIndex, colIndex)}
          />
        ))}
      </div>
    ));
  };

  const resetGame = () => {
    setBoard(initialBoard);
    setPlayer('red');
    setWinner(null);
  };

  return (
    <div className="Connect">
      <h1>Connect Four</h1>
      {winner ? (
        <div className="message">
          {winner === 'red' ? 'Red' : 'Yellow'} player wins!
          <button onClick={resetGame}>Restart</button>
        </div>
      ) : (
        <div className="message">
          It's {player === 'red' ? 'Red' : 'Yellow'} player's turn
        </div>
      )}
      <div className="board">{renderBoard()}</div>
    </div>
  );
};

export default Connect;
*/