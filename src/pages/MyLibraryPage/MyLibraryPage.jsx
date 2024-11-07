import { Helmet } from "react-helmet-async";
import AppBar from "../../components/AppBar/AppBar.jsx";
import css from './MyLibraryPage.module.css'
import Dashboard from "../../components/Dashboard/Dashboard.jsx";

export default function MyLibraryPage() {
  return (
    <main className={css.container}>
      <Helmet>
        <title>My Library Page</title>
      </Helmet>
      <AppBar />
      <div className={css.recommendedAndDashboard}>
        <Dashboard />
      </div>
    </main>
  );
}
