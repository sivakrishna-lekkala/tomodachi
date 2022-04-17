import React from "react";
import BannerImage from "../../assets/images/banner.png";
import TomodachiImage from "../../assets/images/tomo_2.gif";
import "./style.css";

const Banner = (props) => {
  const { isMint } = props;
  return (
    <div className="banner-cnt">
      <img
        src={!isMint ? BannerImage : TomodachiImage}
        width="100%"
        height={"100%"}
      />
    </div>
  );
};
export default Banner;
