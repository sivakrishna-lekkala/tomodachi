import React from "react";
import BannerImage from "../../assets/images/banner.png";
import "./style.css";

const Banner = () => {
  return (
    <div className="banner-cnt">
      <img src={BannerImage} width="100%" height={"100%"} />
    </div>
  );
};
export default Banner;
