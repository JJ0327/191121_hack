import React from "react";
import NavigationBar from "../../components/NavigatonBar/NavigationBar";
import "./PostPage.css";
import Footer from "../../components/Footer/Footer";

const PostPage = () => {
  return (
    <>
      <header>
        <NavigationBar />
      </header>
      <div className="post-main">
        <div className="post-top">
          <div className="post-top__left">게시판</div>
          <div className="post-top__right">
            <input className="post__input" />
            <a className="post__input__text" href="/post">
              검색
            </a>
          </div>
        </div>
        <div className="post-sec" />
        <div className="post-cre">
          <a href="/wpost">
            <button className="post-crebtn">게시글 작성하기</button>
          </a>
        </div>
        <div className="post-postlist">
          <div className="post-postcontent">
            <span className="post-postindex">1</span>
            <span className="post-posttext">
              이번 주 토요일 한강공원에서 함께 자전거 타실 분을 구해요!!!
            </span>
            <span className="post-postauthor">좌찬익</span>
          </div>
          <div className="post-postcontent">
            <span className="post-postindex">2</span>
            <span className="post-posttext">
              대전왕언니닭갈비집 건물에 엘레베이터 있나요?
            </span>
            <span className="post-postauthor">장소히</span>
          </div>
          <div className="post-postcontent">
            <span className="post-postindex">3</span>
            <span className="post-posttext">달떡 먹으러 갈 사람 구해요</span>
            <span className="post-postauthor">유리유리유림</span>
          </div>
          <div className="post-postcontent">
            <span className="post-postindex">4</span>
            <span className="post-posttext">
              한강공원에 휠체어 빌리는 곳이 어디 있을까요?.?
            </span>
            <span className="post-postauthor">대마왕</span>
          </div>
          <div className="post-postcontent">
            <span className="post-postindex">5</span>
            <span className="post-posttext">가발 추천해 주세요ㅠㅠ</span>
            <span className="post-postauthor">타코야끼</span>
          </div>
          <div className="post-postcontent">
            <span className="post-postindex">6</span>
            <span className="post-posttext">
              같이 피파하실 분 있나요? 저 좀 도와주세용
            </span>
            <span className="post-postauthor">손흥민최고</span>
          </div>
          <div className="post-postcontent">
            <span className="post-postindex">7</span>
            <span className="post-posttext">
              취업하고 싶은데 어떻게 해야할까요? 정보 좀 주세요
            </span>
            <span className="post-postauthor">빛나고밝은빛</span>
          </div>
          <div className="post-postcontent">
            <span className="post-postindex">8</span>
            <span className="post-posttext">
              저희 아이들 너무 예뻐요 구경 하고 가세요~~
            </span>
            <span className="post-postauthor">♡현수♡</span>
          </div>
        </div>
        <div className="post-numberbox">
          <div className="post-numberlist">
            <button className="post-numberbtn">1</button>
            <button className="post-numberbtn-current">2</button>
            <button className="post-numberbtn">3</button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PostPage;
