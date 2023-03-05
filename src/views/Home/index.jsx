import { Fragment, Suspense, lazy } from "react";

import { useRecoilValue } from "recoil";
import { fetchNews, paramState } from "../../store";
import { ErrorBoundary } from "react-error-boundary";
const GridLayout = lazy(() => import("../../layouts/GridLayout"));
const Navbar = lazy(() => import("../../components/Navbar"));

const Card = lazy(() => import("../../components/Card"));
const Home = () => {
  const news = useRecoilValue(fetchNews);

  return (
    <Fragment>
      <Navbar />
      <ErrorBoundary>
        <Suspense>
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
        </Suspense>
      </ErrorBoundary>
    </Fragment>
  );
};

export default Home;
