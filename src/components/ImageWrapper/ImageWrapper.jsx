import css from "./ImageWrapper.module.css";
import iphone from "../../img/iPhone.png";
import iphoneDesktop from "../../img/iPhoneDesktop.png";
export default function ImageWrapper() {
  return (
    <section className={css.sectionPhoto}>
      <picture>
        <source srcSet={iphoneDesktop} media="(min-width: 1440px)" />
        <img src={iphone} alt="iphone" />
      </picture>
    </section>
  );
}
