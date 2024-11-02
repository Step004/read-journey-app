import { Logotype } from "../Icons/Logotype.jsx";
import css from "./Logo.module.css";

export default function Logo() {
  return (
    <div className={css.logo}>
      <Logotype />
      <p className={css.logoText}>READ JOURNEY</p>
    </div>
  );
}
