import React, { useState } from "react";

const LoginWithEmail = () => {
  const post = async (data) => {
    const res = await fetch("http://apif8.somee.com/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const data1 = await res.json()
    console.log(data1);
  };
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    post(form)
  };
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="FormInput_invalid ">
        <input type="email" name="email" onChange={handleChange} placeholder="Địa chỉ email" />
      </div>
      <div className="FormInput_invalid mt-[10px]">
        <input type="password" onChange={handleChange} name="password" placeholder="Mật khẩu" />
      </div>
      <button className="">Đăng nhập</button>
    </form>
  );
};

export default LoginWithEmail;
