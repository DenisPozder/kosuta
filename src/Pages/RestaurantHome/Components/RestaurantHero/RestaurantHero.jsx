import React, { useEffect } from "react";
import "./restaurant-hero.css";
import restaurantTree from "../../../../Assets/Landing/restaurantTree.png";
import restaurantTree2 from "../../../../Assets/Hall/forestTree2.png";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import restaurantImg from "../../../../Assets/Restaurant/restaurantImg.jpg";
import { useTranslation } from "react-i18next";

const RestaurantHero = () => {
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

  const { t } = useTranslation("restaurantHome");

  return (
    <div className="restaurant-hero">
      <div className="rh-bird-container">
        <div className="rh-bird"></div>
      </div>

      <div className="rh-bird-container2">
        <div className="rh-bird2"></div>
      </div>

      <div className="rh-bird-container3">
        <div className="rh-bird3"></div>
      </div>
      <div className="rh-wrap">
        <LazyLoadImage
          className="rhw-img"
          src={restaurantImg}
          alt="Slika restorana"
        />
        <div className="rhw-overlay"></div>
        <div className="rhw-top"></div>
        <img
          src={restaurantTree}
          alt="Dekorativna slika"
          className="rhw-tree1-img parallax"
          data-speedx="0.01"
          data-speedy="0.02"
          data-speedz="0.02"
          data-rotation="0"
        />
        <img
          src={restaurantTree2}
          alt="Dekorativna slika"
          className="rhw-tree2-img parallax"
          data-speedx="0.007"
          data-speedy="0.07"
          data-speedz="0.04"
          data-rotation="0.1"
        />
        <div className="rhw-tree2-overlay"></div>
        <div className="rhw-content">
          <div className="rhwc-text">
            <div className="rhwct-items">
              <h1>{t("rhTitle")}</h1>
              <h3 className="rhcwt-h3">{t("rhDesc")}</h3>
              <Link to="/restoran/jelovnik">
                <h3>{t("rhBtn")}</h3>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantHero;
