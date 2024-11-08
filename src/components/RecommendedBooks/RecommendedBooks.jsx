import { useSelector } from "react-redux";
import css from "./RecommendedBooks.module.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import {
  selectIsErrorBooks,
  selectIsLoadingBooks,
  selectRecommendedBooks,
} from "../../redux/books/selectors.js";
import BookList from "../BookList/BookList.jsx";
import { useDispatch } from "react-redux";
import { fetchRecommendedBooks } from "../../redux/books/operations.js";
import { useEffect, useState } from "react";
import { useWindowSize } from "../../hooks/useWindowSize.js";

export default function RecommendedBooks() {
  const dispatch = useDispatch();
  const books = useSelector(selectRecommendedBooks);
  const isLoading = useSelector(selectIsLoadingBooks);
  const isError = useSelector(selectIsErrorBooks);

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [currentLimit, setCurrentLimit] = useState(10);

  const { width } = useWindowSize();

  useEffect(() => {
    if (width <= 767) {
      setCurrentLimit(2);
    } else if (width <= 1439) {
      setCurrentLimit(8);
    } else {
      setCurrentLimit(10);
    }
  }, [width]);

  useEffect(() => {
    dispatch(fetchRecommendedBooks({ page: currentPage, limit: currentLimit }))
      .unwrap()
      .then((data) => setTotalPages(data.totalPages));
  }, [currentPage, currentLimit, dispatch]);

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  return (
    <section className={css.recommendedSection}>
      <div className={css.titleAndNav}>
        <h2 className={css.title}>Recommended</h2>
        <div className={css.buttonsContainer}>
          <button
            className={css.navButton}
            disabled={currentPage === 1}
            onClick={handlePrevPage}
          >
            <FaChevronLeft />
          </button>
          <button
            className={css.navButton}
            disabled={currentPage === totalPages}
            onClick={handleNextPage}
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
      {isLoading ? <div> loading...</div> : <BookList books={books} />}
      {isError && <div>Some error...</div>}
    </section>
  );
}
