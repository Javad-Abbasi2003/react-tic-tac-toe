import React, { useState } from 'react';

import { checkIfWon, cpuMoveIndex, cpuMover } from "../functions"

import X from '../asset/X.png'
import O from '../asset/O.png'
import empty from '../asset/empty.png'

const TicTacToeRender = (props) => {
  const {table, setTable} = props

  const [isCpuTurn, setIsCpuTurn] = useState(false) 
  const [winner, setWinner] = useState(null)

  const clickHandler = (row, col) => {
    if (table[row][col] === "" && !isCpuTurn && winner === null) {
      setIsCpuTurn(true)
      let newTable = [...table];
      newTable[row][col] = "X";
      setTable(newTable);
      setWinner(checkIfWon(newTable));
      setTimeout(() => {
        if(winner === null) {
          cpuMover(cpuMoveIndex(table), table, setTable, setWinner)
          setIsCpuTurn(false);
        }
      }, 1000)
    }
  }
  const srcF = (row, col) => {
    const res = table[row][col]==="X" ? X : table[row][col]==="O" ? O : empty
    return res;
  }
  const style = {border: "1px solid black"}

  return (
    <div>
      {winner && <h1>{winner}</h1>}
      <div>
        <img style={style} src={srcF(0,0)} alt={table[0][0]} onClick={() => clickHandler(0,0)} draggable="false" />
        <img style={style} src={srcF(0,1)} alt={table[0][1]} onClick={() => clickHandler(0,1)} draggable="false" />
        <img style={style} src={srcF(0,2)} alt={table[0][2]} onClick={() => clickHandler(0,2)} draggable="false" />
      </div>
      <div>
        <img style={style} src={srcF(1,0)} alt={table[1][0]} onClick={() => clickHandler(1,0)} draggable="false" />
        <img style={style} src={srcF(1,1)} alt={table[1][1]} onClick={() => clickHandler(1,1)} draggable="false" />
        <img style={style} src={srcF(1,2)} alt={table[1][2]} onClick={() => clickHandler(1,2)} draggable="false" />
      </div>
      <div>
        <img style={style} src={srcF(2,0)} alt={table[2][0]} onClick={() => clickHandler(2,0)} draggable="false" />
        <img style={style} src={srcF(2,1)} alt={table[2][1]} onClick={() => clickHandler(2,1)} draggable="false" />
        <img style={style} src={srcF(2,2)} alt={table[2][2]} onClick={() => clickHandler(2,2)} draggable="false" />
      </div>
    </div>
  );
};

export default TicTacToeRender;