import { Helmet } from "react-helmet-async";
import css from './LoginPage.module.css'
import { Logotype } from "../../components/Icons/Logotype.jsx";
import LoginForm from "../../components/LoginForm/LoginForm.jsx";
import ImageWrapper from "../../components/ImageWrapper/ImageWrapper.jsx";
import { useMediaQuery } from "react-responsive";
import Logo from "../../components/Logo/Logo.jsx";

export default function LoginPage() {
  const isLargeScreen = useMediaQuery({ query: "(min-width: 768px)" });
  
    return (
      <main className={css.container}>
        <Helmet>
          <title>Login Page</title>
        </Helmet>
        <section className={css.sectionForm}>
          {!isLargeScreen ? <Logotype /> : <Logo />} <LoginForm />
        </section>
        <ImageWrapper />
      </main>
    );
}
