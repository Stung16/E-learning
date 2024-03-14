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
import Front_end_Development from "../pages/Front_end_Development/Front_end_Development";
import LessonsForNewbie from "../components/LessonsForNewbie/LessonsForNewbie";
import NoNavigate from "../layouts/DefaultLayout/NoNavigate";
// import ErrorPage from "../pages/ErrorPage.js/ErrorPage";
// import AuthMiddleware from "../middlewares/AuthMiddleware";
export const publicRoutes = (
  <>
    <Route element={<DefaultLayout />}>
      <Route path="/" element={<Home />} />
      <Route path="/learning-paths" element={<Learning_paths />} />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="/terms" element={<Terms />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/careers" element={<Careers />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/lessons-for-newbie" element={<LessonsForNewbie />} />
      <Route path="/front_end_development" element={<Front_end_Development />} />
      {/* <Route path="/contact" element={<Contact />} />
      <Route path="/price" element={<Price />} />
      </Route>
      <Route element={<AuthLayout />}>
      <Route element={<GuestMiddleware />}>
      <Route path="/signin" element={<Login />} />
      <Route path="/signup" element={<Register />} />
      <Route path="/auth/google/callback" element={<Auth />} />
      <Route path="/account/forgot" element={<ForgotPass />} />z
      <Route path="/account/logout" element={<Logout />} />
      <Route path="/account/reset-password/:id" element={<ResetPass />} />
      <Route path="/*" element={<NotFound />} />
    </Route> */}
    </Route>
    <Route path="/about-us" element={<AboutUs />} />
    
    <Route element={<NoNavigate />}>
    <Route path="/postdetail" element={<PostDetail />} />

</Route>
  </>
);
