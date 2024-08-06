import React from "react";
import "./hall-slider-text-layout.css";
import HSTSlider from "./HSTSlider/HSTSlider";
import { Link, useLocation } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa6";
import { useTranslation } from "react-i18next";

const HallSliderTextLayout = ({
  title1,
  engTitle1,
  engTitle2,
  title2,
  engDesc,
  desc,
  images,
  layout,
  capacity,
  autoplayDuration,
  link,
}) => {
  const { i18n } = useTranslation("");

  return (
    <div className={`hall-slider-text-layout`}>
      {layout === "left" ? (
        <>
          <div className="hstl-slider slide-in from-left">
            <HSTSlider data={images} autoplayDuration={autoplayDuration} />
          </div>
          <div className="hstl-content-wrap hstl-content-wrap-normal slide-in from-right">
            <div className="hstl-text">
              <h1 className="hstl-title">
                <span>{i18n.language === "sr" ? title1 : engTitle1}</span>
                <span>{i18n.language === "sr" ? title2 : engTitle2}</span>
              </h1>
              <p className="hstl-desc">
                {i18n.language === "sr" ? desc : engDesc}
              </p>
              <h2 className="hstl-capacity">
                {i18n.language === "sr" ? "Kapacitet:" : "Capacity:"}{" "}
                <span>{capacity}</span>
              </h2>
              <div className="hstl-btn">
                <Link to={link}>
                  <h3>
                    {i18n.language === "sr" ? "Rezerviši sada" : "Book now"}
                  </h3>
                  <FaAngleRight />
                </Link>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="hstl-content-wrap hstl-content-wrap-reverse slide-in from-left">
            <div className="hstl-text hstl-left">
              <h1 className="hstl-title">
                <span>{i18n.language === "sr" ? title1 : engTitle1}</span>
                <span>{i18n.language === "sr" ? title2 : engTitle2}</span>
              </h1>
              <p className="hstl-desc">
                {i18n.language === "sr" ? desc : engDesc}
              </p>
              <h2 className="hstl-capacity">
                {i18n.language === "sr" ? "Kapacitet:" : "Capacity:"}{" "}
                <span>{capacity}</span>
              </h2>
              <div className="hstl-btn">
                <Link to={link}>
                  <h3>
                    {i18n.language === "sr" ? "Rezerviši sada" : "Book now"}
                  </h3>
                  <FaAngleRight />
                </Link>
              </div>
            </div>
          </div>
          <div className="hstl-slider hstl-right slide-in from-right">
            <HSTSlider data={images} autoplayDuration={autoplayDuration} />
          </div>
        </>
      )}
    </div>
  );
};

export default HallSliderTextLayout;
