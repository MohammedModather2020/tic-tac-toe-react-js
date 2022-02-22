const lines = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
export const calcWinner = (squares) => {
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return {
        winner: squares[a],
        line: lines[i],
      };
    }
  }
  return null;
};

// play with computer
export const calcBestMove = (squares, player) => {
  const getArrayDuplicatedCount = (arr) => {
    let count = 0;
    arr.forEach((el) => {
      if (squares[el] === player) {
        count++;
      }
    });
    return count;
  };
  const sortedLines = lines.sort((a, b) => {
    const aCount = getArrayDuplicatedCount(a);
    const bCount = getArrayDuplicatedCount(b);
    return bCount - aCount;
  });
  for (let i = 0; i < sortedLines.length; i++) {
    const val = sortedLines[i].find((el) => {
      if (squares[el] === '') {
        return el + '';
      }
      return null;
    });
    if (!val) {
      continue;
    } else {
      return +val;
    }
  }
  return null;
};
