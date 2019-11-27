import React from "react";
import { Link } from "react-router-dom";
import "./FestivalInfo.css";
import Footer from "../../components/Footer/Footer";
import NavigationBar from "../../components/NavigatonBar/NavigationBar";

const FestivalInfo = () => {
  return (
    <frameElement>
      <NavigationBar />
      <div className="Festival-Info-Background">
        <div className="Festival-Up-Background">
          <div className="Festival-Info-Title">행사정보</div>
        </div>
        <div className="Festival-Info-Under-Background">
          <div className="Festival-Info-Img"></div>
          <div className="Festival-Info-Text">
            <div className="Festvial-Name">2019 장애인의 날 행사</div>
            <div className="Festvial-Date">
              일시: 2019년 9월 26일 ~ 9월 27일
            </div>
            <div className="Festvial-Place">장소: 대전광역시청</div>
            <div className="Festvial-Notice">공지사항: 참가비 2000원</div>
            <div className="Festvial-Ques">문의: 042-4345-2379</div>
          </div>
        </div>
      </div>
      <Link to="/festival" className="Festival-List">
        목록보기
      </Link>
      <Footer />
    </frameElement>
  );
};

export default FestivalInfo;
