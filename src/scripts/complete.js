import { spreadNumbers } from "./spreadNumbers";

export const isSorted = (groupedNumbers) => {
  let numbers = spreadNumbers(groupedNumbers);

  for (let i = 0; i < numbers.length; i++) {
    if (i < numbers.length - 2 && numbers[i] > numbers[i + 1]) {
      return false;
    }
  }

  return true;
};
