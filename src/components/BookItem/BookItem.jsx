import { useState } from "react";
import css from "./BookItem.module.css";
import ModalBook from "../ModalBook/ModalBook.jsx";
export default function BookItem({ book }) {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => {
    setIsOpen(!isOpen);
  };
  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className={css.card} onClick={handleOpen}>
        <img src={book.imageUrl} alt={book.title} className={css.imgBook} />
        <p className={css.title}>{book.title}</p>
        <p className={css.author}>{book.author}</p>
      </div>
      {isOpen && <ModalBook book={book} handleClose={handleClose} isOpen={isOpen} />}
    </>
  );
}
