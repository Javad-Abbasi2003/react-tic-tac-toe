import React, { useState } from 'react';

import TicTacToeRender from "./TicTacToeRender";

const TicTacToe = () => {
  const [table, setTable] = useState([["", "", ""], ["", "", ""], ["", "", ""]])

  return (
    <div>
      <TicTacToeRender table={table} setTable={setTable} />
    </div>
  );
};

export default TicTacToe;