import React, { useState } from 'react';

import TicTacToeRender from "./TicTacToeRender";

import styles from "./TicTacToe.module.css"

const TicTacToe = () => {
  const [table, setTable] = useState([["", "", ""], ["", "", ""], ["", "", ""]])

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Tic Tac Toe!</h1>
      <TicTacToeRender table={table} setTable={setTable} />
    </div>
  );
};

export default TicTacToe;