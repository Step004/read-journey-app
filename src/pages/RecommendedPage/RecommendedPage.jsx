import { Helmet } from "react-helmet-async";
import AppBar from "../../components/AppBar/AppBar.jsx";

export default function RecommendedPage() {
      return (
        <main>
          <Helmet>
            <title>Recommended Page</title>
          </Helmet>
          <AppBar/>
        </main>
      );
}
