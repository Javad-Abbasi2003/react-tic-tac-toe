const checkIfWon = (table) => {
  const diagonal1 = [table[0][0], table[1][1], table[2][2]]
  const diagonal2 = [table[0][2], table[1][1], table[2][0]]
  const cols = [[table[0][0], table[1][0], table[2][0]], [table[0][1], table[1][1], table[2][1]], [table[0][2], table[1][2], table[2][2]]]
  const rows = [[table[0][0], table[0][1], table[0][2]], [table[1][0], table[1][1], table[1][2]], [table[2][0], table[2][1], table[2][2]]]

  let winner = null

  // diagonal winner? or draw
  if (diagonal1.every((cell) => cell==="X" || diagonal2.every((cell) => cell==="X"))){
    winner = "Player Won!"
  } else if (diagonal1.every((cell) => cell==="O" || diagonal2.every((cell) => cell==="O"))){
    winner = "CPU Won!"
  } else if (table.flat().every((cell) => cell!=="")) {
    winner = "Draw!"
  } else {
    winner = null
  }

  // row winner?
  for (let i = 0; i < rows.length; i++) {
    if (rows[i].every((cell) => cell==="X")) {
      winner = "Player Won!"
    } else if (rows[i].every((cell) => cell==="O")) {
      winner = "CPU Won!"
    }
  }
  for (let i = 0; i < cols.length; i++) {
    if (cols[i].every((cell) => cell==="X")) {
      winner = "Player Won!"
    } else if (cols[i].every((cell) => cell==="O")) {
      winner = "CPU Won!"
    }
  }

  return winner
}
const cpuMoveIndex = (table) => {
  const emptyIndexes = [];
  table.forEach((row, rowIndex) => {
    row.forEach((cell, colIndex) => {
      if (cell === "") {
        emptyIndexes.push({ rowIndex, colIndex });
      }
    });
  });
  if (emptyIndexes.length !== 0) {
    const randomIndex = Math.floor(Math.random() * emptyIndexes.length)
    return [emptyIndexes[randomIndex].rowIndex, emptyIndexes[randomIndex].colIndex]
  }
}

const cpuMover = (index, table, setTable, setWinner) => {
  if(!checkIfWon(table)) {
    const newTable = [...table];
    newTable[index[0]][index[1]] = "O";
    setTable(newTable);
    setWinner(checkIfWon(newTable));
  }
}


export { checkIfWon, cpuMoveIndex, cpuMover };