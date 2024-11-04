import Layout from "../Layout/Layout.jsx";
import { lazy, Suspense, useEffect } from "react";
import { HelmetProvider } from "react-helmet-async";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { selectIsLoading, selectIsRefreshing } from "../../redux/auth/selectors.js";
import { refreshUser } from "../../redux/auth/operations.js";

const WelcomePage = lazy(() =>
  import("../../pages/WelcomePage/WelcomePage.jsx")
);
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
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  if (isRefreshing && isLoading) {
    return <b>Loading. Please wait...</b>;
  }

  return (
    <Layout>
      <Suspense fallback={<div>Please wait loading page...</div>}>
        <HelmetProvider>
          <Routes>
            <Route path="/" element={<WelcomePage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/recommended" element={<RecommendedPage />} />
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
