import { lazy, Suspense } from "react";
import LoadPage from "./Components/Loading/LoadingMount";
import {
  Routes,
  Route
} from "react-router-dom";
import LayoutMainMount from "./Components/Layout/LayoutMainMount";

// PAGES
const Home = lazy(() => import("./Pages/Home"));

function Router() {
  return (
    <Suspense fallback={<LoadPage/>}>
      <Routes>
        <Route element={<LayoutMainMount />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default Router;
