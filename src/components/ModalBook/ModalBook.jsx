import clsx from "clsx";
import css from "./ModalBook.module.css";
import CloseIcon from "../Icons/CloseIcon.jsx";
import { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { addBookFromRecommendedBooks } from "../../redux/books/operations.js";

export default function ModalBook({ book, handleClose, isOpen }) {
    const dispatch = useDispatch();
    console.log(book);
    

      const menuRef = useRef(null);
      useEffect(() => {
        const handleClickOutside = (event) => {
          if (menuRef.current && !menuRef.current.contains(event.target)) {
            handleClose();
          }
        };

        if (isOpen) {
          document.addEventListener("mousedown", handleClickOutside);
        } else {
          document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
          document.removeEventListener("mousedown", handleClickOutside);
        };
      }, [isOpen, handleClose]);
    
    const handleAddBook = () => {
        dispatch(addBookFromRecommendedBooks(book._id));
        handleClose();
    }

  return (
    <div className={clsx(css.mobileMenuBackground, isOpen && css.isOpen)}>
      <div className={css.modalContainer} ref={menuRef}>
        <button className={css.closeBtn} onClick={handleClose}>
          <CloseIcon className={css.closeIcon} />
        </button>
        <div className={css.card}>
          <img src={book.imageUrl} alt={book.title} className={css.imgBook} />
          <p className={css.title}>{book.title}</p>
          <p className={css.author}>{book.author}</p>
          <p className={css.pages}>{book.totalPages}</p>
          <button className={css.addToLibrary} onClick={handleAddBook}>
            Add to library
          </button>
        </div>
      </div>
    </div>
  );
}
