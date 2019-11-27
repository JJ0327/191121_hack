import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="Footer-bar">
      <div className="Footer-Text-bar">
        <div className="Footer-Text__">
          <div className="Footer-DEVELOPERS">DEVELOPERS</div>
          <div className="Footer-DAEDUCK-NAME">
            남유림 <br /> 박예린
          </div>
          <div className="Footer-DAEDUCK">대덕소프트웨어마이스터고등학교</div>
          <div className="Footer-GWANGJU-NAME">
            정한결 <br /> 조수빈
          </div>
          <div className="Footer-GWANGJU">광주소프트웨어마이스터고등학교</div>
          <div className="Footer-DEAGU-NAME">
            진정호 <br /> 최종욱
          </div>
          <div className="Footer-DEAGU">대구소프트웨어마이스터고등학교</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
