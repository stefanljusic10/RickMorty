export const pageNumbersCalculator = (currentPage, totalPages, pageRange) => {
  // array of total number of pages
  const numbersArr = [];
  // pageRange - range of pages displaying in pagination
  // rangeDiff - number of pages on left and right side of currently active page
  const rangeDiff = Math.trunc(pageRange / 2);

  for (let i = 1; i <= totalPages; i++) {
    numbersArr.push(i);
  }

  // if some of first pages is currently active
  // cut array of total pages from starting point to range of pagination numbers
  if (currentPage <= rangeDiff) 
    return numbersArr.slice(0, pageRange);
  // if some of last pages is currently active
  // cut array of total pages backwards for a pageRange
  if (currentPage >= totalPages - rangeDiff) 
    return numbersArr.slice(-5);

  return numbersArr.slice(currentPage - 3, currentPage + 2);
};
