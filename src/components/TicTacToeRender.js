import React, { useState } from 'react';
import ReactLoading from 'react-loading';

//Functions
import { checkIfWon, cpuMoveIndex, cpuMover } from "../functions"

//Assets
import X from '../asset/X.png'
import O from '../asset/O.png'
import empty from '../asset/empty.png'

//Styles
import styles from "./TicTacToeRender.module.css"

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
      }, Math.floor(Math.random() * 1500) + 500)
    }
  }
  const resetHandler = () => {
    if (!isCpuTurn) {
      setIsCpuTurn(false);
      setWinner(null);
      setTable([["", "", ""], ["", "", ""], ["", "", ""]])
    }
  }

  const srcF = (row, col) => {
    const res = table[row][col]==="X" ? X : table[row][col]==="O" ? O : empty
    return res;
  }

  return (
    <div className={styles.container}>
      {winner && <h3 className={winner==="CPU Won!" ? styles.redWinner : styles.greenWinner}>{winner}</h3>}
      {isCpuTurn && !winner && 
        <div className={styles.loadingContainer}>
          <div className={styles.loadingSmallContainer}>
            <ReactLoading type={"spin"} color={"black"} height={125} width={125} />
            <h2>Cpu's turn</h2>
          </div>
        </div>
      }
      <div>
        <div className={styles.imgContainer}>
          <img  className={styles.img00} src={srcF(0,0)} alt={table[0][0]} onClick={() => clickHandler(0,0)} draggable="false" />
          <img  className={styles.img01} src={srcF(0,1)} alt={table[0][1]} onClick={() => clickHandler(0,1)} draggable="false" />
          <img  className={styles.img02} src={srcF(0,2)} alt={table[0][2]} onClick={() => clickHandler(0,2)} draggable="false" />
        </div>
        <div className={styles.imgContainer}>
          <img  className={styles.img10} src={srcF(1,0)} alt={table[1][0]} onClick={() => clickHandler(1,0)} draggable="false" />
          <img  className={styles.img11} src={srcF(1,1)} alt={table[1][1]} onClick={() => clickHandler(1,1)} draggable="false" />
          <img  className={styles.img12} src={srcF(1,2)} alt={table[1][2]} onClick={() => clickHandler(1,2)} draggable="false" />
        </div>
        <div className={styles.imgContainer}>
          <img  className={styles.img20} src={srcF(2,0)} alt={table[2][0]} onClick={() => clickHandler(2,0)} draggable="false" />
          <img  className={styles.img21} src={srcF(2,1)} alt={table[2][1]} onClick={() => clickHandler(2,1)} draggable="false" />
          <img  className={styles.img22} src={srcF(2,2)} alt={table[2][2]} onClick={() => clickHandler(2,2)} draggable="false" />
        </div>
      </div>
      <button onClick={resetHandler} className={styles.resetButton}>Reset</button>
    </div>
  );
};

export default TicTacToeRender;