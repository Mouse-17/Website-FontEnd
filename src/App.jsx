import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
  Outlet,
} from "react-router-dom";
import Main from "./pages/Main";
import Login from "./pages/Login";
import ProjectManaging from "./pages/ProjectManaging";
import GatherTesters from "./pages/GatherTester";
import Influencer from "./pages/Influencer";
import SalesstoreConsignment from "./pages/SalesstoreConsignment";
import HygieneReportingEntrustment from "./pages/HygieneReportingEntrustment";
import LiveCommerce from "./pages/LiveCommerce";
import OnBoard from "./pages/OnBoard";
import FindPassword from "./pages/FindPassword";
import PasswordRenewal from "./pages/PasswordRenewal";
import FindID from "./pages/FindID";
import FindIDViewed from "./pages/FindIDViewed";
import AIEstimatingServiceResultL from "./pages/AIEstimatingServiceResultL";
import AIEstimatingServiceLoading from "./pages/AIEstimatingServiceLoading";
import AIEstimatingServiceResultLogout from "./pages/AIEstimatingServiceResultLogout";
import AIEstimatingService from "./pages/AIEstimatingService";
import ProjectManagingLiveCommerce from "./pages/ProjectManagingLiveCommerce";
import ProjectManagingInfluencer from "./pages/ProjectManagingInfluencer";
import ProjectManagingHygieneRepor from "./pages/ProjectManagingHygieneRepor";
import ProjectManagingGatherTester from "./pages/ProjectManagingGatherTester";
import ProjectManagingSalesstore from "./pages/ProjectManagingSalesstore";
import StoreManaging from "./pages/StoreManaging";
import StoreManagingAddMerchandise from "./pages/StoreManagingAddMerchandise";
import StoreManagingAddStoreEntry from "./pages/StoreManagingAddStoreEntry";
import Navbar from "./layouts/Navbar/Navbar";
import Footer from "./layouts/Footer/Footer";
import { ToastContainer } from 'react-toastify';


const Layout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <>
      <Routes>
        {/* <Route path="/" element={<Layout />}> */}
        <Route index element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/projectmanaging" element={<ProjectManaging />} />
        <Route path="/gathertesters" element={<GatherTesters />} />
        <Route path="/influencer" element={<Influencer />} />
        <Route path="/hygienereportingentrustment" element={<HygieneReportingEntrustment />} />
        <Route path="/salesstoreconsignment" element={<SalesstoreConsignment />} />
        <Route path="/livecommerce" element={<LiveCommerce />} />
        <Route path="/onboard" element={<OnBoard />} />
        <Route path="/findpassword" element={<FindPassword />} />
        <Route path="/passwordrenewal" element={<PasswordRenewal />} />
        <Route path="/findid" element={<FindID />} />
        <Route path="/findidviewed" element={<FindIDViewed />} />
        <Route path="/aiestimatingserviceresultl" element={<AIEstimatingServiceResultL />} />
        <Route path="/aiestimatingservicerloading" element={<AIEstimatingServiceLoading />} />
        <Route path="/aiestimatingserviceresultlogout" element={<AIEstimatingServiceResultLogout />} />
        <Route path="/aiestimatingservice" element={<AIEstimatingService />} />
        <Route path="/projectmanaginglivecommerce" element={<ProjectManagingLiveCommerce />} />
        <Route path="/projectmanaginginfluencer" element={<ProjectManagingInfluencer />} />
        <Route path="/projectmanaginghygienerepor" element={<ProjectManagingHygieneRepor />} />
        <Route path="/projectmanaginggathertester" element={<ProjectManagingGatherTester />} />
        <Route path="/projectmanagingsalesstore" element={<ProjectManagingSalesstore />} />
        <Route path="/storemanaging" element={<StoreManaging />} />
        <Route path="/storemanagingaddmerchandise" element={<StoreManagingAddMerchandise />} />
        <Route path="/storemanagingaddstoreentry" element={<StoreManagingAddStoreEntry />} />
        {/* </Route> */}
      </Routes>
      <ToastContainer />
    </>
  );
}
export default App;
