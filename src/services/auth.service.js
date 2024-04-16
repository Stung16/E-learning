import Client from "../config/Client";
import Cookies from "js-cookie";

export const handleGetCode = async (email) => {
  const payload = { email: email };
  try {
    const res = await Client.post(`/send-mail/register`, payload);
    return res;
  } catch (error) {}
};
export const handeleLoginWithEmail = async (body) => {
  try {
    const res = await Client.post(`/login`, body);
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const handleRefreshToken = async (refeshtoken) => {
  try {
    const res = await Client.post(`/refresh-token`, refeshtoken);
    return res;
  } catch (error) {
    console.log(error);
  }
};
export const logOut = () => {
  Cookies.remove("accessToken");
  Cookies.remove("refreshToken");
  window.location.href = "/";
};

// lấy user
export const handleGetUserDetail = async (id) => {
  try {
    const res = await Client.get(`/user/${id}`);
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const handleGetAllUser = async () => {
  try {
    const res = await Client.get(`/user`);
    return res;
  } catch (error) {
    console.log(error);
  }
};
export const handleGetprofile = async () => {
  try {
    const res = await Client.get(`/user/profile`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
export const handleEditUser = async (payload) => {
  try {
    Client.setToken(token);
    const res = await Client.put(`/user/update`, payload);
    return res;
  } catch (error) {
    console.log(error);
  }
};
export const handleDeleteUser = async (payload) => {
  try {
    Client.setToken(token);
    const res = await Client.put(`/user/update`, payload);
    return res;
  } catch (error) {
    console.log(error);
  }
};
export const handleRegiterCourse = async (id) => {
  const payload = { idCourse: id };
  try {
    const res = await Client.post(`/user-course`, payload);
    return res;
  } catch (error) {
    console.log(error);
  }
};
