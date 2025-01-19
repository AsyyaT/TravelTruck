import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout.jsx";
import Loader from "./components/Loader/Loader.jsx";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage.jsx";
import TrailerFeatures from "./components/TrailerFeatures/TrailerFeatures.jsx";
import TrailerReviews from "./components/TrailerReviews/TrailerReviews.jsx";

const HomePage = lazy(() => import("./pages/HomePage/HomePage.jsx"));
const CatalogPage = lazy(() => import("./pages/CatalogPage/CatalogPage.jsx"));
const TrailerPage = lazy(() => import("./pages/TrailerPage/TrailerPage.jsx"));

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />}></Route>
          <Route path="/catalog/:id/" element={<TrailerPage />}>
            <Route path="features" element={<TrailerFeatures />}></Route>
            <Route path="reviews" element={<TrailerReviews />}></Route>
          </Route>
          <Route path="*" element={<NotFoundPage />}></Route>
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
