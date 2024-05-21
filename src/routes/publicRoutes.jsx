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
import LessonsForNewbie from "../pages/Courses/LessonsForNewbie/LessonsForNewbie";
import Fresher from "../pages/Careers/Fresher";
import Test from "../components/Test/Test";
import SearchCourse from "../pages/SearchAll/SearchCourse/SearchCourse";
import SearchVideo from "../pages/SearchAll/SearchVideo/SearchVideo";
import SearchPost from "../pages/SearchAll/SearchPost/SearchPost";
import Payment from "../pages/Payment/Payment";
import Banking from "../pages/Payment/Banking";

export const publicRoutes = (
  <>
    <Route path="/landing/:slug" element={<Landing />}></Route>
    {/* Mua khóa học Pro */}
    <Route path="/payment/:slug" element={<Payment />}></Route>
    <Route path="/banking/:slug" element={<Banking />}></Route>

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
      <Route path="/blog" element={<Blog />} />
      {/* Me */}
      {/* <Route path="/me/posts" element={<MyPost />} /> */}
      {/* Search */}
      <Route path="/search/courses" element={<SearchCourse />} />
      <Route path="/search/posts" element={<SearchPost />} />
      <Route path="/search/videos" element={<SearchVideo />} />
      {/* Courses */}
      <Route path="/courses/:slug" element={<LessonsForNewbie />} />
    </Route>

    <Route path="/about-us" element={<AboutUs />} />
    <Route path="/*" element={<NotFound />} />
    <Route element={<NoNavigate />}>
      <Route path="/test" element={<Test />} />
      <Route path="/blog/:slug" element={<PostDetail />} />
    </Route>
  </>
);
