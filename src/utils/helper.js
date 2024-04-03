import Client from "../config/Client";

export const HandleregaxEmail = (str) => {
  const regaxEmail = /^[\w-.]+@([\w-]+.)+[\w-]{2,4}$/;
  return regaxEmail.test(str);
};

export const HandleregaxName = (str) => {
  const regaxName = /^[^\d\W]{2,}$/;

  return regaxName.test(str);
};

export const HandleregaxPassWord = (str) => {
  const regaxPassword = /^.{8,}$/;
  return regaxPassword.test(str);
};

export const fetcher = async (url) => {
  const res = await Client.get(url);
  return res;
};