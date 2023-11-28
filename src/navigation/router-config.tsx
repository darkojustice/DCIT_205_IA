import "../App.css";
import {
  BrowserRouter,
  Routes,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Navbar from "../navigation/layout/navbar/navbar";
import Footer from "../navigation/layout/footer/footer";
import HomeLayout from "../pages/home/home-layout";
import AboutLayout from "../pages/about/about-layout";
import Teams from "../pages/teams/teams";
import ResearchGroups from "../pages/research-groups/researchGroups";
import Faq from "../pages/faq/faq";
import NotFound from "../pages/404";
import Contact from "../pages/contact/contact";
import Sotd from "../pages/sotd/sotd";
import Resources from "../pages/resources/resources";
import Events from "../pages/events/events";
import TipsLayout from "../pages/tips/tips-layout";
import Layout from "../navigation/layout/main-layout";
import { MAIN_LAYOUT } from "../constants/page-paths";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path={MAIN_LAYOUT} element={<Layout />}>
        <Route path="/" element={<HomeLayout />} />
        <Route path="/about" element={<AboutLayout />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/research-groups" element={<ResearchGroups />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/events" element={<Events />} />
        <Route path="/tips&info" element={<TipsLayout />} />
        <Route path="/site-of-the-day" element={<Sotd />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<Faq />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </>
  )
);

export default router;
