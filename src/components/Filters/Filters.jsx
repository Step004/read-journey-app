import clsx from "clsx";
import css from "./Filters.module.css";
import { Field, Formik, Form } from "formik";

export default function Filters() {
  return (
    <div className={css.filtersContainer}>
      <Formik>
        <Form className={css.filterForm} autoComplete="off">
          <p className={css.filterName}>Filters:</p>
          <div className={css.filterField}>
            <Field
              className={clsx(css.field, css.bookTitle)}
            ></Field>
            <span className={css.placeholder}>Book title:</span>
          </div>
          <div className={css.filterField}>
            <Field
              className={clsx(css.field, css.author)}
            ></Field>
            <span className={css.placeholder}>The author:</span>
          </div>
          <button className={css.filterButton}>To apply</button>
        </Form>
      </Formik>
    </div>
  );
}
