export const groupNumbers = (puzzleNumbers) => {
  let grouped = [
    puzzleNumbers.slice(0, 3),
    puzzleNumbers.slice(3, 6),
    puzzleNumbers.slice(6, 9),
  ];
  return grouped;
};
