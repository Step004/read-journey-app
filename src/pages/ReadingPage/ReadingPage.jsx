import { Helmet } from "react-helmet-async";
import AppBar from "../../components/AppBar/AppBar.jsx";

export default function ReadingPage() {
    return (
      <main>
        <Helmet>
          <title>Reading Page</title>
        </Helmet>
        <AppBar />
      </main>
    );
}
