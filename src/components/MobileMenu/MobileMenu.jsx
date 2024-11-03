import clsx from "clsx";
import Navigation from "../Navigation/Navigation.jsx";
import css from "./MobileMenu.module.css";
import CloseIcon from "../Icons/CloseIcon.jsx";
export default function MobileMenu({
  handleLogout,
  isOpen,
  handleIsOpenOrClose,
}) {
  return (
    <div className={clsx(css.mobileMenuBackground, isOpen && css.isOpen)}>
      <div className={css.mobileMenu}>
        <button className={css.closeBtn} onClick={handleIsOpenOrClose}>
          <CloseIcon className={css.closeIcon} />
        </button>
        <div className={css.navigation}>
        <Navigation />
        </div>
        <button className={css.logout} onClick={handleLogout}>
          Log out
        </button>
      </div>
    </div>
  );
}
