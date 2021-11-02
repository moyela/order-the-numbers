export const getPositionCoordinate = (groupedNumbers, positionNumber) => {
  for (let i = 0; i < groupedNumbers.length; i++) {
    for (let j = 0; j < groupedNumbers[0].length; j++) {
      if (groupedNumbers[i][j] === positionNumber) {
        let row = i;
        let col = j;
        return [row, col];
      }
    }
  }
};
