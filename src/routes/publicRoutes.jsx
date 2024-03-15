import { Route } from "react-router-dom";
import DefaultLayout from "../layouts/DefaultLayout/DefaultLayout";
import Home from "../pages/Home/Home";
import Learning_paths from "../pages/Learning_paths/Learning_paths";
import AboutUs from "../pages/AboutUs/AboutUs";
import ContactUs from "../pages/ContactUs/ContactUs";
import Terms from "../pages/Terms/Terms";
import Privacy from "../pages/Privacy/Privacy";
import Careers from "../pages/Careers/Careers";
import PostDetail from "../pages/PostDetail/PostDetail";
import Blog from "../pages/Blog/Blog";
import NoNavigate from "../layouts/DefaultLayout/NoNavigate";
import Landing from "../pages/Landing/Landing";
import NotFound from "../pages/NotFound/NotFound";
import Front_end_Development from "../pages/Learning_paths/Front_end_Development/Front_end_Development";
import LessonsForNewbie from "../components/LessonsForNewbie/LessonsForNewbie";
export const publicRoutes = (
  <>
    <Route element={<DefaultLayout />}>
      <Route path="/" element={<Home />} />
      
      {/* Lộ trình */}
      <Route path="/learning-paths" element={<Learning_paths />}></Route>
      <Route
        path="/learning-paths/front_end_development"
        element={<Front_end_Development />}
      />{" "}
      <Route
        path="/learning-paths/back_end_development"
        element={<Front_end_Development />}
      />

      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="/terms" element={<Terms />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/careers" element={<Careers />} />

      <Route path="/blog" element={<Blog />} />
      {/* Courses */}
      <Route path="/courses/lessons-for-newbie" element={<LessonsForNewbie />} />
    </Route>

    <Route element={<NoNavigate />}>
      <Route path="/postdetail" element={<PostDetail />} />
    </Route>
    <Route path="/about-us" element={<AboutUs />} />
    <Route path="/landing" element={<Landing />} />
    <Route path="/*" element={<NotFound />} />
  </>
);
