import { lazy } from "react";
const GridLayout = lazy(() => import("../../layouts/GridLayout"));
const MainLayout = lazy(() => import("../../layouts/MainLayout"));
const ContentLayout = lazy(() => import("../../layouts/ContentLayout"));

const Home = () => {
  return (
    <MainLayout>
      <ContentLayout>
        <GridLayout>
          <h1>Home</h1>
          <h1>Home</h1>
          <h1>Home</h1>
        </GridLayout>
      </ContentLayout>
    </MainLayout>
  );
};

export default Home;
