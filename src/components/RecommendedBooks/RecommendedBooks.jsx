import css from './RecommendedBooks.module.css'
export default function RecommendedBooks() {
    return <section className={css.recommendedSection}>
        <h2>Recommended Books</h2>
        <ul>
            <li>Book 1</li>
            <li>Book 2</li>
            <li>Book 3</li>
        </ul>
        <p>Find more books on the <a href="/library">Library</a> page.</p>
    </section>;
}