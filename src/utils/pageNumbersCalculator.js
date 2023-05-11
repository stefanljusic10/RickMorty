export const pageNumbersCalculator = (currentPage, totalPages, pageRange) => {
  const numbersArr = [];
  const rangeDiff = Math.trunc(pageRange / 2);

  for (let i = 1; i <= totalPages; i++) {
    numbersArr.push(i);
  }

  if (currentPage <= rangeDiff) return numbersArr.slice(0, pageRange);
  if (currentPage >= totalPages - rangeDiff) return numbersArr.slice(-5);

  return numbersArr.slice(currentPage - 3, currentPage + 2);
};
