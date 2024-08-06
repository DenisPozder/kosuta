import React, { useEffect, useRef, useState } from "react";
import "./restaurant-menu-hero.css";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import RestaurantMenuCard from "./RestaurantMenuCard/RestaurantMenuCard";

const RestaurantMenuHero = ({ slides }) => {
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

  const [current, setCurrent] = useState(0);
  const length = slides.length;
  const timeout = useRef(null);

  useEffect(() => {
    const nextSlide = () => {
      setTimeout(() => {
        setCurrent((current) => (current === length - 1 ? 0 : current + 1));
      });
      timeout.current = setTimeout(nextSlide, 12000);
    };

    timeout.current = setTimeout(nextSlide, 12000);

    return () => {
      if (timeout.current) {
        clearTimeout(timeout.current);
      }
    };
  }, [current, length]);

  const nextSlide = () => {
    if (timeout.current) {
      clearTimeout(timeout.current);
    }
    setCurrent((current) => (current === length - 1 ? 0 : current + 1));
  };

  const prevSlide = () => {
    if (timeout.current) {
      clearTimeout(timeout.current);
    }
    setCurrent((current) => (current === 0 ? length - 1 : current - 1));
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <div className="restaurant-menu-hero">
      <div className="rmh-wrap">
        <button className="rmh-btn rmh-prev" onClick={prevSlide}>
          <AiOutlineLeft />
        </button>
        {slides.map((slide, index) => (
          <RestaurantMenuCard
            index={index}
            slide={slide}
            current={current}
            key={index}
          />
        ))}
        <button className="rmh-btn rmh-next" onClick={nextSlide}>
          <AiOutlineRight />
        </button>
      </div>
    </div>
  );
};

export default RestaurantMenuHero;
