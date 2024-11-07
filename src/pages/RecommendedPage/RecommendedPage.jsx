import { Helmet } from "react-helmet-async";
import AppBar from "../../components/AppBar/AppBar.jsx";
import Dashboard from "../../components/Dashboard/Dashboard.jsx";
import RecommendedBooks from "../../components/RecommendedBooks/RecommendedBooks.jsx";
import css from "./RecommendedPage.module.css";
export default function RecommendedPage() {
  return (
    <main className={css.container}>
      <Helmet>
        <title>Recommended Page</title>
      </Helmet>
      <AppBar />
      <div className={css.recommendedAndDashboard}>
        <Dashboard />
        <RecommendedBooks />
      </div>
    </main>
  );
}
