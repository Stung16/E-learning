import { Route } from "react-router-dom";
import SettingLayout from "../layouts/SettingLayout/SettingLayout";
import Personal from "../pages/Setting/Personal/Personal";
import Security from "../pages/Setting/Security/Security";
import Notification from "../pages/Setting/Notification/Notification";
import Learning from "../pages/Learning/Learning";
import LessionLayout from "../layouts/LessionLayout/LessionLayout";
import DefaultLayout from "../layouts/DefaultLayout/DefaultLayout";
import Drafts from "../pages/MyPost/Drafts/Drafts";
import Bookmark from "../pages/Bookmark/Bookmark";
import MyCourses from "../pages/MyCourses/MyCourses";
import ProfileLayout from "../layouts/ProfileLayout/ProfileLayout";
import Profile from "../pages/Profile/Profile";
import Published from "../pages/MyPost/Published";
import AuthMiddleware from "../middlewares/AuthMiddleware";
export const privateRoutes = (
  <>
    <Route element={<LessionLayout />}>
      <Route element={<AuthMiddleware />}>
        <Route path="/learning/:id" element={<Learning />} />
      </Route>
    </Route>
    <Route element={<DefaultLayout />}>
      <Route element={<AuthMiddleware />}>
        <Route path="/me/posts/drafts" element={<Drafts />} />
        <Route path="/me/posts/published" element={<Published />} />
        <Route path="/me/bookmark/posts" element={<Bookmark />} />
        <Route path="/my-courses" element={<MyCourses />} />
      </Route>
    </Route>
    <Route element={<ProfileLayout />}>
      <Route element={<AuthMiddleware />}>
        <Route path="/profile" element={<Profile />} />
      </Route>
    </Route>
    <Route element={<SettingLayout />}>
      <Route element={<AuthMiddleware />}>
        <Route path="/setting/personal" element={<Personal />} />
        <Route path="/setting/security" element={<Security />} />
        <Route path="/setting/notification" element={<Notification />} />
      </Route>
    </Route>
  </>
);
