import { Route, Routes } from "react-router-dom";
import { AuthenticatedRoutes } from "../../constants/Routes";
import MainHome from "../layout/MainHome";
import DetailPage from "../layout/DetailPage";
const Authenticate = () => {
  return (
    <>
      <Routes>
        <Route path={AuthenticatedRoutes.HOME} element={<MainHome />} />
        <Route path={AuthenticatedRoutes.DETAILPAGE} element={<DetailPage />} />
      </Routes>
    </>
  );
};

export default Authenticate;
