import React from "react";
import { Link } from "react-router-dom";
import "./JoinInfoPage.css";
import Footer from "../../components/Footer/Footer";
import NavigationBar from "../../components/NavigatonBar/NavigationBar";

const JoinInfoPage = () => {
  return (
    <div>
      <NavigationBar />
      <div className="Join-Info-Background">
        <div className="Join-Info-Title">회원가입 정보입력</div>
        <div className="Join-Info-ID-Title">아이디</div>
        <input type="text" name="ID" className="Join-Info-ID-Input" />
        <div className="Join-Info-PW-Title">비밀번호</div>
        <input type="text" name="PW" className="Join-Info-PW-Input" />
        <div className="Join-Info-NN-Title">닉네임</div>
        <input type="text" name="NN" className="Join-Info-NN-Input" />
        <Link to="/login" className="Join-Info-done">
          회원가입
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default JoinInfoPage;
