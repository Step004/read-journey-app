import { Helmet } from "react-helmet-async";
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm.jsx";
import { Logotype } from "../../components/Icons/Logotype.jsx";
import css from "./RegisterPage.module.css";
import ImageWrapper from "../../components/ImageWrapper/ImageWrapper.jsx";

export default function RegisterPage() {
  return (
    <main className={css.container}>
      <Helmet>
        <title>Register Page</title>
      </Helmet>
      <section className={css.sectionForm}>
        <Logotype />
        <RegistrationForm />
      </section>
      <ImageWrapper />
    </main>
  );
}
