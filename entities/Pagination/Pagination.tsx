import { PaginationPageButton } from "./components";
import {
  PaginationArrowButton,
  PaginationPagesWrapper,
  PaginationWrapper,
} from "./components";

const Pagination = ({
  currentPage,
  totalPages,
  handlePageChange,
}: {
  currentPage: number;
  totalPages: number;
  handlePageChange: (page: number) => void;
}) => {
  return (
    <PaginationWrapper>
      {/* Кнопка "предыдущая страница" */}
      <PaginationArrowButton
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Предыдущая
      </PaginationArrowButton>

      {/* Показать номера страниц */}
      <PaginationPagesWrapper>
        {Array.from({ length: totalPages }, (_, index) => index + 1).map(
          (page) => (
            <PaginationPageButton
              key={page}
              onClick={() => handlePageChange(page)}
              disabled={page === currentPage}
            >
              {page}
            </PaginationPageButton>
          )
        )}
      </PaginationPagesWrapper>

      {/* Кнопка "следующая страница" */}
      <PaginationArrowButton
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Следующая
      </PaginationArrowButton>
    </PaginationWrapper>
  );
};

export default Pagination;
