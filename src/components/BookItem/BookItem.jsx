import css from './BookItem.module.css'
export default function BookItem({ book }) {
  
    return (
      <div className={css.card}>
        <img src={book.imageUrl} alt={book.title} className={css.imgBook} />
            <p className={css.title}>{book.title}</p>
            <p className={css.author}>{book.author}</p>
      </div>
    );
}