import Client from "../config/Client";

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
export const logOut = async () => {
  try {
    const res = await Client.get(`/logout`);
    return res;
  } catch (error) {
    console.log(error);
  }
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
export const handleUpdateProfile = async (payload) => {
  try {
    const res = await Client.patch(`/user/update/profile`, payload);
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
    const res = await Client.post(`/course/register-user`, payload);
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const handlePostNew = async (payload) => {
  try {
    const res = await Client.post(`/post/new`, payload);
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const handleGetLession = async (payload) => {
  try {
    const res = await Client.post(`/post/new`, payload);
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const handleSearch = async (key) => {
  try {
    const res = await Client.get(`/search?key=${key}`);
    return res;
  } catch (error) {
    console.log(error);
  }
};
