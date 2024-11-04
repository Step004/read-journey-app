import { NavLink, useLocation } from "react-router-dom";
import clsx from "clsx";
import css from "./Navigation.module.css";

const buildLinkClass = (isActive) => {
  return clsx(css.link, isActive && css.active);
};

export default function Navigation() {
  const location = useLocation();

  return (
    <nav className={css.navigation}>
      <NavLink
        to="/recommended"
        className={() => buildLinkClass(location.pathname === "/recommended")}
      >
        Home
      </NavLink>

      <NavLink
        to="/library"
        className={() => buildLinkClass(location.pathname === "/library")}
      >
        My library
      </NavLink>
    </nav>
  );
}
