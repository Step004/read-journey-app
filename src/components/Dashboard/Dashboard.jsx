import { useMediaQuery } from "react-responsive";
import Description from "../Description/Description.jsx";
import Filters from "../Filters/Filters.jsx";
import Quote from "../Quote/Quote.jsx";
import css from "./Dashboard.module.css";
export default function Dashboard() {
  const isLargeScreen = useMediaQuery({ query: "(min-width: 1440px)" });

  return (
    <section className={css.dashboardSection}>
      <Filters />
      <Description />
      {isLargeScreen && <Quote />}
    </section>
  );
}
