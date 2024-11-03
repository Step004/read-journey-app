import clsx from "clsx";
import Navigation from "../Navigation/Navigation.jsx";
import css from "./MobileMenu.module.css";
import CloseIcon from "../Icons/CloseIcon.jsx";
import { useEffect, useRef } from "react";
export default function MobileMenu({
  handleLogout,
  isOpen,
  handleIsOpenOrClose,
}) {
  const menuRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        handleIsOpenOrClose();
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
  }, [isOpen, handleIsOpenOrClose]);

  return (
    <div className={clsx(css.mobileMenuBackground, isOpen && css.isOpen)}>
      <div className={css.mobileMenu} ref={menuRef}>
        <button className={css.closeBtn} onClick={handleIsOpenOrClose}>
          <CloseIcon className={css.closeIcon} />
        </button>
        <div className={css.navigation}>
          <Navigation />
        </div>
        <button
          className={css.logout}
          onClick={() => {
            handleLogout();
            handleIsOpenOrClose();
          }}
        >
          Log out
        </button>
      </div>
    </div>
  );
}
