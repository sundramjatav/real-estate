import { Route, Routes } from "react-router-dom";
import { AuthenticatedRoutes } from "../../constants/Routes";
import MainHome from "../layout/MainHome";
import DetailPage from "../layout/DetailPage";
import ScrollToTop from "../../components/main/ScrollToTop"; // Import ScrollToTop correctly
import AboutPage from "../layout/AboutPage";

const Authenticate = () => {
  return (
    <>
      <ScrollToTop /> {/* Place this outside Routes */}
      <Routes>
        <Route path={AuthenticatedRoutes.HOME} element={<MainHome />} />
        <Route path={AuthenticatedRoutes.DETAILPAGE} element={<DetailPage />} />
        <Route path={AuthenticatedRoutes.ABOUTPAGE} element={<AboutPage/>} />
      </Routes>
    </>
  );
};

export default Authenticate;
