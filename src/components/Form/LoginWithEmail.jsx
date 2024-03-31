import React, { useState } from "react";
import { handeleLoginWithEmail } from "../../services/auth.service";
import { detailtSlice } from "../../stores/slices/detailtSlice";
import { loginSlice } from "../../stores/slices/loginSlice";
import { tokenSlice } from "../../stores/slices/tokenSlice";
import Cookies from "js-cookie";
const { updateState } = loginSlice.actions;
const { updateLoading } = detailtSlice.actions;
import { useDispatch } from "react-redux";
import Client from "../../config/Client";
import { useNavigate } from "react-router-dom";

const LoginWithEmail = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(updateLoading(true));
      const { data } = await handeleLoginWithEmail(form);
      if (data?.status === 200) {
        Cookies.set("accessToken", data.token.accessToken, {
          expires: 60 * 60 * 24 * 7,
        });
        Cookies.set("refreshToken", data.token.refreshToken, {
          expires: 60 * 60 * 24 * 30,
        });
        Client.setToken(data.token.accessToken);
        dispatch(updateState(""));
        return navigate("/");
      }
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(updateLoading(false));
    }
  };
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="FormInput_invalid ">
        <input
          type="email"
          name="email"
          onChange={handleChange}
          placeholder="Địa chỉ email"
        />
      </div>
      <div className="FormInput_invalid mt-[10px]">
        <input
          type="password"
          onChange={handleChange}
          name="password"
          placeholder="Mật khẩu"
        />
      </div>
      <button className="btn-submit-resgiter">Đăng nhập</button>
    </form>
  );
};

export default LoginWithEmail;
