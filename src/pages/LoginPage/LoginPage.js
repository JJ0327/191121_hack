import React from "react";
import NavigationBar from "../../components/NavigatonBar/NavigationBar";
import "./LoginPage.css";
import Footer from "../../components/Footer/Footer";
const LoginPage = () => {
  return (
    <>
      <header>
        <NavigationBar />
      </header>
      <div className="login-main">
        <div className="login-h1">로그인하기</div>
        <div className="login-content">
          <div className="login-id">
            <div className="login-id__h1">ID</div>
            <div className="login-id__input">
              <input className="login-id-input"></input>
            </div>
          </div>
          <div className="login-pw">
            <div className="login-pw__h1">PASSWORD</div>
            <div className="login-pw__input">
              <input className="login-pw-input"></input>
            </div>
          </div>
        </div>
        <div className="login-btn">
          <a href="/">
            <button className="login__btn">로그인</button>
          </a>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default LoginPage;
