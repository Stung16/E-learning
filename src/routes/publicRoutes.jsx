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
import Profile from "../pages/Profile/Profile";
import LessonsForNewbie from "../pages/Courses/LessonsForNewbie/LessonsForNewbie";
import Fresher from "../pages/Careers/Fresher";
import AuthMiddleware from "../middlewares/AuthMiddleware";

import Test from "../components/Test/Test";
import MyCourses from "../pages/MyCourses/MyCourses";
import LessionLayout from "../layouts/LessionLayout/LessionLayout";
import Learning from "../pages/Learning/Learning";
import Edit from "../components/Test/Edit";
export const publicRoutes = (
  <>
    <Route element={<LessionLayout />}>
      <Route path="/learning" element={<Learning />} />
    </Route>
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
      <Route path="/fresher" element={<Fresher />} />
      <Route path="/my-courses" element={<MyCourses />} />
      <Route path="/blog" element={<Blog />} />
      {/* Courses */}
      <Route
        path="/courses/lessons-for-newbie"
        element={<LessonsForNewbie />}
      />
    </Route>
    <Route path="/profile" element={<Profile />} />
    <Route path="/test/edit" element={<Edit />} />
    <Route element={<NoNavigate />}>
      <Route path="/test" element={<Test />} />
      <Route path="/blog/:slug" element={<PostDetail />} />
    </Route>
    <Route path="/about-us" element={<AboutUs />} />
    <Route path="/landing" element={<Landing />} />
    <Route path="/*" element={<NotFound />} />
    <Route element={<AuthMiddleware />}>
      {/* <Route element={<GuestMiddleware />}>
        <Route path="/signin" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/auth/google/callback" element={<Auth />} />
        <Route path="/account/forgot" element={<ForgotPass />} />
        <Route path="/account/logout" element={<Logout />} />
        <Route path="/account/reset-password/:id" element={<ResetPass />} />
        <Route path="/*" element={<NotFound />} />
      </Route> */}
    </Route>
  </>
);
