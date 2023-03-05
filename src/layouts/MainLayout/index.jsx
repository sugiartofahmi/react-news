import { lazy } from "react";
const Navbar = lazy(() => import("../../components/Navbar"));
const MainLayout = ({ children }) => {
  return (
    <main className="flex flex-col w-full h-full ">
      <Navbar />
      {children}
    </main>
  );
};
export default MainLayout;
