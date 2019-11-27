import React from "react";
import NavigationBar from "../../components/NavigatonBar/NavigationBar";
import "./WritePostPage.css";
import Footer from "../../components/Footer/Footer";

const WritePostPage = () => {
  return (
    <>
      <header>
        <NavigationBar />
      </header>
      <div className="write-main">
        <div className="write-h1">게시글 작성</div>
        <div className="write-sec" />
        <div className="write-post">
          <div className="write-post__title">
            <div className="write-post__h2">제목</div>
            <div className="write-post__sec"></div>
            <input className="write-post__title_input"></input>
          </div>
          <div className="write-post__content">
            <input className="write-post__content_input"></input>
          </div>
          <div className="write-post__footer">
            <input className="write-post__footer__input" type="file" />
          </div>
        </div>
        <div className="write-btn">
          <a href="/post">
            <button className="write-btn__btn">업로드하기</button>
          </a>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default WritePostPage;
