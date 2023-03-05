import { lazy } from "react";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { useRecoilValue } from "recoil";
import { fetchNews, paramState } from "../../store";
const GridLayout = lazy(() => import("../../layouts/GridLayout"));
const MainLayout = lazy(() => import("../../layouts/MainLayout"));
const ContentLayout = lazy(() => import("../../layouts/ContentLayout"));
const Loading = lazy(() => import("../../components/Loading"));
const Card = lazy(() => import("../../components/Card"));
const Home = () => {
  const news = useRecoilValue(fetchNews);

  console.log(news);

  return (
    <Suspense fallback={<Loading />}>
      <MainLayout>
        <ErrorBoundary
          fallback={<h1 className="text-red-500">Could not fetch data.</h1>}
        >
          <Suspense fallback={<Loading />}>
            <ContentLayout>
              <GridLayout>
                {news.length > 0 &&
                  news.map((el, i) => (
                    <Card
                      url={el.url}
                      title={el.title}
                      description={el.description}
                      image={el.urlToImage}
                      key={i}
                    />
                  ))}
              </GridLayout>
            </ContentLayout>
          </Suspense>
        </ErrorBoundary>
      </MainLayout>
    </Suspense>
  );
};

export default Home;
