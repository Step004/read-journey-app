import { useNavigate } from "react-router-dom";
import css from "./UserMenu.module.css";
import { useMediaQuery } from "react-responsive";
import BurgerIcon from "../Icons/BurgerIcon.jsx";
import MobileMenu from "../MobileMenu/MobileMenu.jsx";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../redux/auth/operations.js";
import toast from "react-hot-toast";
import { selectIsLoading, selectUser } from "../../redux/auth/selectors.js";

export default function UserMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  

  const user = useSelector(selectUser);  
    const isLoading = useSelector(selectIsLoading);

  const isLargeScreen = useMediaQuery({ query: "(min-width: 1440px)" });
  const isSmallScreen = useMediaQuery({ query: "(max-width: 767px)" });

  const handleLogout = async () => {
    dispatch(logOut()).catch(() => {
      toast.error("Failed to log out. Please try again later.");
      return;
    });
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
        {!isLoading && user.name ? (
          <>
            <div className={css.circle}>{user.name.charAt(0)}</div>
            {isLargeScreen && <p className={css.username}>{user.name}</p>}
          </>
        ) : (
          <div>Loading user data...</div>
        )}
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
