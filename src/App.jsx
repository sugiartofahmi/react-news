import { lazy, Suspense } from "react";
const Loading = lazy(() => import("./components/Loading"));
const MainLayout = lazy(() => import("./layouts/MainLayout"));
const ContentLayout = lazy(() => import("./layouts/ContentLayout"));
const Navbar = lazy(() => import("./components/Navbar"));
import Router from "./router";
const App = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Suspense fallback={<Loading />}>
        <Router />
      </Suspense>
    </Suspense>
  );
};

export default App;
