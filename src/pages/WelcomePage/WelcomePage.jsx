import { Helmet } from "react-helmet-async";
import AppBar from "../../components/AppBar/AppBar.jsx";
import ImageWrapper from "../../components/ImageWrapper/ImageWrapper.jsx";
import { NavLink, useNavigate } from "react-router-dom";
import css from "./WelcomePage.module.css";

export default function WelcomePage() {
  const navigate = useNavigate();
  return (
    <main className={css.container}>
      <Helmet>
        <title>Welcome Page</title>
      </Helmet>

      <AppBar />
      <div className={css.leftPart}>
        <div className={css.navigate}>
          <div className={css.buttons}>
            <button className={css.button} onClick={() => navigate("/login")}>
              Login
            </button>
            <button
              className={css.button}
              onClick={() => navigate("/register")}
            >
              Registration
            </button>
          </div>
        </div>
        <ImageWrapper />
      </div>
    </main>
  );
}
