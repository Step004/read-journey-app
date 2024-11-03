import { useNavigate } from "react-router-dom";
import css from "./UserMenu.module.css";
import { useMediaQuery } from "react-responsive";
import BurgerIcon from "../Icons/BurgerIcon.jsx";
import MobileMenu from "../MobileMenu/MobileMenu.jsx";
import { useEffect, useState } from "react";

export default function UserMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const isLargeScreen = useMediaQuery({ query: "(min-width: 1440px)" });
  const isSmallScreen = useMediaQuery({ query: "(max-width: 767px)" });
  const handleLogout = async () => {
    navigate("/");
  };
  const handleIsOpenOrClose = () => {
   setIsOpen((prevIsOpen) => (isSmallScreen ? !prevIsOpen : false));
  };
    useEffect(() => {
      if (!isSmallScreen && isOpen) {
        setIsOpen(false);
      }
    }, [isSmallScreen, isOpen]);

  return (
    <div className={css.wrapper}>
      <div className={css.userNameContainer}>
        <div className={css.circle}>G</div>
        {isLargeScreen && <p className={css.username}>Guest</p>}
      </div>
      {isSmallScreen ? (
        <button className={css.burger} onClick={handleIsOpenOrClose}>
          <BurgerIcon />
        </button>
      ) : (
        <button className={css.logout} onClick={handleLogout}>
          Log out
        </button>
      )}
      <MobileMenu
        handleLogout={handleLogout}
        isOpen={isOpen}
        handleIsOpenOrClose={handleIsOpenOrClose}
      />
    </div>
  );
}
