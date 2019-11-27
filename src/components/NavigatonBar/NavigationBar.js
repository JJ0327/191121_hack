import React from "react";
import "./NavigationBar.css";

const NavigationBar = () => {
  return (
    <>
      <div className="header" style={{ top: "0px" }}>
        <nav>
          <div className="left-item">
            <div className="i_logo">
              <a href="/" className="i__team">
                <span className="team-name">墻愛</span>
              </a>
            </div>
          </div>
          <div className="rightArea">
            <div className="right-item">
              <ul>
                <a href="/post">
                  <li className="p1">게시판</li>
                </a>
                <a href="/festival">
                  <li className="p1">행사정보</li>
                </a>
                <a href="/login">
                  <button className="btn__p1">로그인</button>
                </a>
                <a href="/join">
                  <button className="btn__p1">회원가입</button>
                </a>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default NavigationBar;
