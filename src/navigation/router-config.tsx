import "../App.css";
import {
  BrowserRouter,
  Routes,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import Home from "../pages/home/home";
import About from "../pages/about/about";
import Tips from "../pages/tips/tips";
import Teams from "../pages/teams/teams";
import ResearchGroups from "../pages/research-groups/researchGroups";
import Faq from "../pages/faq/faq";
import NotFound from "../pages/404";
import Contact from "../pages/contact/contact";
import Sotd from "../pages/sotd/sotd";
import Resources from "../pages/resources/resources";
import Events from "../pages/events/events";
import Layout from "../navigation/layout/main-layout";
import {
  ABOUT,
  CONTACT,
  EVENTS,
  FAQ,
  HOME,
  MAIN_LAYOUT,
  RESEARCH,
  RESOURCES,
  SOD,
  TEAMS,
  TIPS,
} from "../constants/page-paths";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path={MAIN_LAYOUT} element={<Layout />}>
        <Route path={HOME} element={<Home />} />
        <Route path={ABOUT} element={<About />} />
        <Route path={TEAMS} element={<Teams />} />
        <Route path={RESEARCH} element={<ResearchGroups />} />
        <Route path={RESOURCES} element={<Resources />} />
        <Route path={EVENTS} element={<Events />} />
        <Route path={TIPS} element={<Tips />} />
        <Route path={SOD} element={<Sotd />} />
        <Route path={CONTACT} element={<Contact />} />
        <Route path={FAQ} element={<Faq />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </>
  )
);

export default router;
