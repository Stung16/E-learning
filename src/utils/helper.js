import Client from "../config/Client";
import moment from "moment";

export const HandleregaxEmail = (str) => {
  const regaxEmail = /^[\w-.]+@([\w-]+.)+[\w-]{2,4}$/;
  return regaxEmail.test(str);
};

export const HandleregaxName = (str) => {
  const regaxname = /^(?!\d|\W)(?:[^\W\d ]+\s?)+[^\W\d ]+$/;
  return regaxname.test(str);
};

export const HandleregaxPassWord = (str) => {
  const regaxpassword = /^. {8,}$/;
  return regaxpassword.test(str);
};

export const fetcher = async (url) => {
  const res = await Client.get(url);
  return res;
};
export function customText(text, nb) {
  if (text) {
    if (text?.length <= nb) {
      return text;
    } else {
      return text.substring(0, nb - 1) + "...";
    }
  }
  return;
}

export function Schema({ userName, email, password }) {
  const errs = {};
  const regaxname = /^(?!\d|\W)(?:[^\W\d ]+\s?)+[^\W\d ]+$/;
  if (userName === "" || !regaxname.test(userName)) {
    Object.assign(errs, {
      userName: "Vui lòng nhập đúng định dạng!!!",
    });
  } else {
    delete errs.userName;
  }

  const regaxEmail = /^[\w-.]+@([\w-]+.)+[\w-]{2,4}$/;
  if (!regaxEmail.test(email)) {
    Object.assign(errs, {
      email: "Vui lòng nhập đúng định dạng email!!!",
    });
  } else {
    delete errs.email;
  }

  const regaxpassword = /^. {8,}$/;
  if (password === "") {
    Object.assign(errs, {
      password: "Mật khẩu có ít nhất 8 ký tự!!!",
    });
  } else {
    delete errs.password;
  }
  return errs;
}

export const changeMonth = (time) => {
  const currentTime = moment();

  const monthsDiff = currentTime.diff(time, "months");
  return monthsDiff;
};
