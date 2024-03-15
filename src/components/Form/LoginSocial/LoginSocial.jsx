import React from 'react'

const LoginSocial = () => {
    const LoginGoogle = async() => {
        const res =  await fetch('http://localhost:3000/google')
        const data = await res.json()
        window.location.href = data
    }
  return (
    <div>
    <div className="Button_login-wapper mt-[14px]" onClick={LoginGoogle}>
      <img
        className="SigninButton_icon"
        src="https://accounts.fullstack.edu.vn/assets/images/signin/google-18px.svg"
        alt=""
      />
      <span className="SigninButton_title">
        Đăng nhập với Google
      </span>
    </div>
    <div className="Button_login-wapper mt-[14px]">
      <img
        className="SigninButton_icon"
        src="https://accounts.fullstack.edu.vn/assets/images/signin/facebook-18px.svg"
        alt=""
      />
      <span className="SigninButton_title">
        Đăng nhập với Facebook
      </span>
    </div>
    <div className="Button_login-wapper mt-[14px]">
      <img
        className="SigninButton_icon"
        src="https://accounts.fullstack.edu.vn/assets/images/signin/github-18px.svg"
        alt=""
      />
      <span className="SigninButton_title">
        Đăng nhập với Github
      </span>
    </div>
  </div>
  )
}

export default LoginSocial