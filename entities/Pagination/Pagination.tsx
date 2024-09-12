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
      <PaginationArrowButton
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        $direction={"prev"}
      />

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

      <PaginationArrowButton
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        $direction={"next"}
      />
    </PaginationWrapper>
  );
};

export default Pagination;
