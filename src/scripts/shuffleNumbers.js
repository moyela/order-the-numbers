export const shuffleNumbers = (numbers) => {
  let currentIndex = numbers.length,
    randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [numbers[currentIndex], numbers[randomIndex]] = [
      numbers[randomIndex],
      numbers[currentIndex],
    ];
  }
  return numbers;
};
