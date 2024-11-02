import { Helmet } from "react-helmet-async";
import css from './LoginPage.module.css'
import { Logotype } from "../../components/Icons/Logotype.jsx";
import LoginForm from "../../components/LoginForm/LoginForm.jsx";
import ImageWrapper from "../../components/ImageWrapper/ImageWrapper.jsx";

export default function LoginPage() {
    return (
      <main className={css.container}>
        <Helmet>
          <title>Login Page</title>
        </Helmet>
        <section className={css.sectionForm}>
          <Logotype />
          <LoginForm />
        </section>
        <ImageWrapper />
      </main>
    );
}
