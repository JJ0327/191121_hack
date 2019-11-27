import React from "react";
import { Link } from "react-router-dom";
import "./FestivalMain.css";
import Footer from "../../components/Footer/Footer";
import FestivalBox from "../../components/FestivalBox/FestivalBox";
import NavigationBar from "../../components/NavigatonBar/NavigationBar";

const FestivalMain = () => {
  return (
    <div className="Festival-Background">
      <NavigationBar />
      <div className="Festival-Upper-Background">
        <div className="Festival-Title">행사정보</div>
        <div className="Festival-Input">
          <input
            type="text"
            placeholder="검색"
            name="serch"
            className="Festival-Input-serch"
          />
          <button className="Festival-Input-Btn">검색</button>
        </div>
      </div>
      <div className="Festival-Under-Background">
        <Link to="./festival/Info">
          {" "}
          <FestivalBox>장애인 행사</FestivalBox>{" "}
        </Link>
        <FestivalBox>장애인 행사</FestivalBox>
        <FestivalBox>장애인 행사</FestivalBox>
        <FestivalBox>장애인 행사</FestivalBox>
        <FestivalBox>장애인 행사</FestivalBox>
      </div>
      <Footer />
    </div>
  );
};

export default FestivalMain;
