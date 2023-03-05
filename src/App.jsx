import { lazy, Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import Router from "./router";
const Loading = lazy(() => import("./components/Loading"));
const MainLayout = lazy(() => import("./layouts/MainLayout"));
const ContentLayout = lazy(() => import("./layouts/ContentLayout"));

const App = () => {
  return (
    <Suspense fallback={<Loading />}>
      <MainLayout>
        <ErrorBoundary fallback={<Error />}>
          <Suspense fallback={<Loading />}>
            <ContentLayout>
              <Router />
            </ContentLayout>
          </Suspense>
        </ErrorBoundary>
      </MainLayout>
    </Suspense>
  );
};

export default App;
