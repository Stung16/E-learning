import { Route } from "react-router-dom";
import DefaultLayout from "../layouts/DefaultLayout/DefaultLayout";
import Home from "../pages/Home/Home";
import Learning_paths from "../pages/Learning_paths/Learning_paths";
// import ErrorPage from "../pages/ErrorPage.js/ErrorPage";
// import AuthMiddleware from "../middlewares/AuthMiddleware";
export const publicRoutes = (
  <>
    <Route element={<DefaultLayout />}>
      <Route path="/" element={<Home />} />
      <Route path="/learning-paths" element={<Learning_paths />} />
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
  </>
);
