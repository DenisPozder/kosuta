import React, { useEffect, useState } from "react";
import "./rg-component.css";
import { RestaurantGalleryData } from "../../../../RestaurantData/RestaurantGalleryData";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useTranslation } from "react-i18next";

const TagButton = ({ name, engName, handleSetTag, isActive }) => {
  const { i18n } = useTranslation("");
  return (
    <button
      className={`rgc-button ${isActive ? "rgb-active" : ""}`}
      onClick={() => handleSetTag(i18n.language === "sr" ? name : engName)}
    >
      <h3>
        {i18n.language === "sr" ? name.toUpperCase() : engName.toUpperCase()}
      </h3>
    </button>
  );
};

const RGComponent = () => {
  /*----- Intersection Observer -----*/
  useEffect(() => {
    const faders = document.querySelectorAll(".fade-in");
    const sliders = document.querySelectorAll(".slide-in");

    const appearOptions = {
      threshold: 0,
      rootMargin: "0px 0px -200px 0px",
    };

    const appearOnScroll = new IntersectionObserver(function (
      entries,
      appearOnScroll
    ) {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        } else {
          entry.target.classList.add("appear");
          appearOnScroll.unobserve(entry.target);
        }
      });
    },
    appearOptions);

    faders.forEach((fader) => {
      appearOnScroll.observe(fader);
    });

    sliders.forEach((slider) => {
      appearOnScroll.observe(slider);
    });
  }, []);

  const { t, i18n } = useTranslation("restaurantGallery");
  const [tag, setTag] = useState(i18n.language === "sr" ? "sve" : "all");
  const [filteredImages, setFilteredImages] = useState([]);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const handleIntersection = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-viewport");
          observer.unobserve(entry.target);
        } else {
          entry.target.classList.remove("in-viewport");
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, options);
    const images = document.querySelectorAll(".rgc-gallery-image");

    images.forEach((image) => {
      observer.observe(image);
    });

    return () => {
      observer.disconnect();
    };
  }, [filteredImages]);

  useEffect(() => {
    console.log("Language:", i18n.language);
    console.log("Tag:", tag);
    if (i18n.language === "sr") {
      setFilteredImages(
        tag === "sve"
          ? RestaurantGalleryData
          : RestaurantGalleryData.filter((image) => image.tag === tag)
      );
    } else {
      setFilteredImages(
        tag === "all"
          ? RestaurantGalleryData
          : RestaurantGalleryData.filter((image) => image.engTag === tag)
      );
    }
  }, [tag, i18n.language]);

  return (
    <div className="rg-component">
      <div className="rgc-content">
        <h1>{t("rgcTitle")}</h1>
        <div className="rgc-categories">
          <div className="rgc-text">
            <h3>{t("rgcBanner")}</h3>
          </div>
          <TagButton
            engName={"all"}
            name={"sve"}
            handleSetTag={setTag}
            isActive={tag === (i18n.language === "sr" ? "sve" : "all")}
          />
          <TagButton
            engName={"interior"}
            name={"interijer"}
            handleSetTag={setTag}
            isActive={
              tag === (i18n.language === "sr" ? "interijer" : "interior")
            }
          />
          <TagButton
            engName={"garden"}
            name={"bašta"}
            handleSetTag={setTag}
            isActive={tag === (i18n.language === "sr" ? "bašta" : "garden")}
          />
          <TagButton
            engName={"playroom"}
            name={"igralište"}
            handleSetTag={setTag}
            isActive={
              tag === (i18n.language === "sr" ? "igralište" : "playroom")
            }
          />
        </div>
        <div className="rgc-gallery">
          {filteredImages.map((image, index) => (
            <div
              className={`rgc-gallery-image in-viewport`}
              key={`${tag}-${index}`}
            >
              <LazyLoadImage src={image.image} alt={`Slika ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RGComponent;
