import React from "react";
import NavigationBar from "../../components/NavigatonBar/NavigationBar";
import "./MainPage.css";
import Footer from "../../components/Footer/Footer";

const MainPage = () => {
  return (
    <>
      <header>
        <NavigationBar />
      </header>
      <div className="main-main">
        <h1 className="main-h1">墻愛</h1>
        <h2 className="main-h2">담장을 넘는 사랑</h2>
        <h3 className="main-h3">장애는 사랑에 장애물이 될 수 없습니다.</h3>
      </div>
      <div className="main-semain">
        <div className="main-semain__head">
          <span className="main-semain__h1">최신글</span>
          <a className="main-a" href="/post">
            <span className="main-semain__h2">전체보기</span>
          </a>
        </div>
        <div className="main-sec"></div>
        <div className="main-content">
          <div className="main-post">
            <div className="main-post__index">1</div>
            <div className="main-post__title">
              이번 주 토요일 ㅇㅇ동사무소에서 열리는 행사에 참여하시는 분
              갔나요?
            </div>
          </div>
          <div className="main-post">
            <div className="main-post__index">2</div>
            <div className="main-post__title">
              이 서비스를 만들어주신 개발자 분들 너무 감사합니다 ㅠㅜㅠ
            </div>
          </div>
          <div className="main-post">
            <div className="main-post__index">3</div>
            <div className="main-post__title">
              올해 장애를 얻게 됐는데 걱정해주시고 위로해 주시는 분들을 만나서
              좋아요
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MainPage;
