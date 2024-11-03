import { Helmet } from "react-helmet-async";
import AppBar from "../../components/AppBar/AppBar.jsx";

export default function MyLibraryPage() {
    return (
      <main>
        <Helmet>
          <title>My Library Page</title>
        </Helmet>
        <AppBar />
      </main>
    );
}
