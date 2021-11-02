export const spreadNumbers = (groupedNumbers) => {
  let spreadNumbers = [];
  for (let i = 0; i < groupedNumbers.length; i++) {
    spreadNumbers.push(...groupedNumbers[i]);
  }
  return spreadNumbers;
};
