import React, { Component } from "react";
import "./JoinMainPage.css";
import Footer from "../../components/Footer/Footer";
import JoinBox from "../../components/JoinBox/JoinBox";
import NavigationBar from "../../components/NavigatonBar/NavigationBar";

class JoinMainPage extends Component {
  render() {
    return (
      <div>
        <NavigationBar />
        {/* <Header /> */}
        <div className="Join-Title">회원가입</div>
        <div className="Join-Box-Background">
          <JoinBox>장애인</JoinBox>
          <JoinBox>보호자</JoinBox>
          <JoinBox>상담가</JoinBox>
        </div>
        <Footer />
      </div>
    );
  }
}

export default JoinMainPage;
