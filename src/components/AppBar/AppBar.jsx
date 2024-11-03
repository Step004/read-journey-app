import { useMediaQuery } from "react-responsive";
import { Logotype } from "../Icons/Logotype.jsx";
import Logo from "../Logo/Logo.jsx";
import css from "./AppBar.module.css";
import UserMenu from "../UserMenu/UserMenu.jsx";
import Navigation from "../Navigation/Navigation.jsx";

export default function AppBar() {
  const isLoggedIn = true;
  const isLargeScreen = useMediaQuery({ query: "(min-width: 1440px)" });
  const isTabletScreen = useMediaQuery({ query: "(min-width: 768px)" });
  return (
    <header className={css.header}>
      {isLargeScreen ? <Logo /> : <Logotype />}
      {isTabletScreen && <Navigation />}
      {isLoggedIn && <UserMenu />}
    </header>
  );
}
