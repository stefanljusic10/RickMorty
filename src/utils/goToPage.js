import { setCurrentPageToLocalStorage } from "./setCurrentPageToLocalStorage";

export const goToPage = {
  prev(currentPage, setCurrentPage) {
    const page = currentPage - 1;
    setCurrentPage(page);
    setCurrentPageToLocalStorage(page);
  },
  next(currentPage, setCurrentPage) {
    const page = currentPage + 1;
    setCurrentPage(page);
    setCurrentPageToLocalStorage(page);
  },
  jump(page, setCurrentPage) {
    setCurrentPage(page);
    setCurrentPageToLocalStorage(page);
  },
};
