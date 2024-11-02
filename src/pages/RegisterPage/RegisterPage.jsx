import { Helmet } from "react-helmet-async";
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm.jsx";
import { Logotype } from "../../components/Icons/Logotype.jsx";
import css from "./RegisterPage.module.css";
import ImageWrapper from "../../components/ImageWrapper/ImageWrapper.jsx";
import Logo from "../../components/Logo/Logo.jsx";
import { useMediaQuery } from "react-responsive";

export default function RegisterPage() {
  const isLargeScreen = useMediaQuery({ query: "(min-width: 768px)" });
  
  return (
    <main className={css.container}>
      <Helmet>
        <title>Register Page</title>
      </Helmet>
      <section className={css.sectionForm}>
        {!isLargeScreen ? <Logotype /> : <Logo />}
        <RegistrationForm />
      </section>
      <ImageWrapper />
    </main>
  );
}
