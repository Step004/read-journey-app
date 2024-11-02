import css from "./ImageWrapper.module.css";
import iphone from "../../img/iPhone.png";
export default function ImageWrapper() {
  return (
    <section className={css.sectionPhoto}>
      <img src={iphone} alt="iphone" />
    </section>
  );
}
