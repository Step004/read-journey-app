import BookItem from "../BookItem/BookItem.jsx";
import css from "./RecommendedBooks.module.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
export default function RecommendedBooks() {
  const books = [];
  return (
    <section className={css.recommendedSection}>
      <div className={css.titleAndNav}>
        <h2 className={css.title}>Recommended</h2>
        <div className={css.buttonsContainer}>
          <button className={css.navButton}>
            <FaChevronLeft />
          </button>
          <button className={css.navButton}>
            <FaChevronRight />
          </button>
        </div>
      </div>
      <ul className={css.bookList}>
        {books.map((book) => {
          <li key={book.id} className={css.bookItem}>
            <BookItem book={book} />
          </li>;
        })}
      </ul>
    </section>
  );
}
