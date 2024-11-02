import { Helmet } from "react-helmet-async";
import { NavLink } from "react-router-dom";

export default function WelcomePage() {
  return (
    <main>
      <Helmet>
        <title>Welcome Page</title>
      </Helmet>

      <nav>
        <NavLink to="/register">
          <p>Registration</p>
        </NavLink>

        <NavLink to="/login">Login</NavLink>
      </nav>
    </main>
  );
}
