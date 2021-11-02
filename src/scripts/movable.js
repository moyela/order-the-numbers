export const isMovable = (groupedNumbers, row, col) => {
  if (col - 1 >= 0) {
    if (groupedNumbers[row][col - 1] === 0) {
      return "LEFT";
    }
  }

  if (col + 1 < groupedNumbers[0].length) {
    if (groupedNumbers[row][col + 1] === 0) {
      return "RIGHT";
    }
  }

  if (row - 1 >= 0) {
    if (groupedNumbers[row - 1][col] === 0) {
      return "UP";
    }
  }

  if (row + 1 < groupedNumbers.length) {
    if (groupedNumbers[row + 1][col] === 0) {
      return "DOWN";
    }
  }

  return false;
};
