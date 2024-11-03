import { NavLink } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";
import css from "./Description.module.css";

export default function Description() {
  return (
    <div className={css.descriptionContainer}>
      <p className={css.title}>Start your workout</p>
      <div className={css.container}>
        <div className={css.circle}>1</div>
        <p className={css.text}>
          Create a personal library:{" "}
          <span className={css.textSpan}>
            add the books you intend to read to it.
          </span>
        </p>
      </div>
      <div className={css.container}>
        <div className={css.circle}>2</div>
        <p className={css.text}>
          Create your first workout:{" "}
          <span className={css.textSpan}>
            define a goal, choose a period, start training.
          </span>
        </p>
      </div>
      <NavLink to="/library" className={css.link}>
        My library <FaArrowRight className={css.iconRight} />
      </NavLink>
    </div>
  );
}
