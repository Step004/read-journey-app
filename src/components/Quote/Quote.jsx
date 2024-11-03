import css from "./Quote.module.css";
import books from "../../img/books.png";
export default function Quote() {
  return (
    <div className={css.quoteContainer}>
      <img src={books} alt="books" className={css.booksImg} />
      <p className={css.quote}>
        "Books are <span className={css.windowsSpan}>windows</span> to the world, and reading is a journey
        into the unknown."
      </p>
    </div>
  );
}
