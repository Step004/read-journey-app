import Layout from "../Layout/Layout.jsx";
import { lazy, Suspense } from "react";
import { HelmetProvider } from "react-helmet-async";
import { Route, Routes } from "react-router-dom";

// const WelcomePage = lazy(() =>
//   import("../../pages/WelcomePage/WelcomePage.jsx")
// );
const RegisterPage = lazy(() =>
  import("../../pages/RegisterPage/RegisterPage.jsx")
);
const RecommendedPage = lazy(() =>
  import("../../pages/RecommendedPage/RecommendedPage.jsx")
);
const LoginPage = lazy(() => import("../../pages/LoginPage/LoginPage.jsx"));
const MyLibraryPage = lazy(() =>
  import("../../pages/MyLibraryPage/MyLibraryPage.jsx")
);
const NotFoundPage = lazy(() =>
  import("../../pages/NotFoundPage/NotFoundPage.jsx")
);

function App() {
  return (
    <Layout>
      <Suspense fallback={<div>Please wait loading page...</div>}>
        <HelmetProvider>
          <Routes>
            {/* <Route path="/" element={<WelcomePage />} /> */}
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/" element={<RecommendedPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/library" element={<MyLibraryPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </HelmetProvider>
      </Suspense>
    </Layout>
  );
}

export default App;
