import { useSelector } from "react-redux";
import css from "./BookList.module.css";
import BookItem from "../BookItem/BookItem.jsx";
export default function BookList({ books }) {

  const ok = useSelector((state) => state.book.items);
  console.log(ok);

  return (
    <>
      <ul className={css.bookList}>
        {books &&
          books.map((book) => (
            <li key={book._id} className={css.bookItem}>
              <BookItem book={book} />
            </li>
          ))}
      </ul>
    </>
  );
}
