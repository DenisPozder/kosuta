import React, { useEffect, useState } from "react";
import HallLayout from "../../Layout/HallLayout/HallLayout";
import RestaurantLayout from "../../Layout/RestaurantLayout/RestaurantLayout";
import GameroomHero from "./Components/GameroomHero/GameroomHero";
import GameroomComponent from "./Components/GameroomComponent/GameroomComponent";
import "./gameroom.css";
import background from "../../Assets/Restaurant/background.jpg";
import { LazyLoadImage } from "react-lazy-load-image-component";
import HelmetContent from "../../Layout/HelmerContent";
import Loader from "../../Components/Loader/Loader";

const Gameroom = () => {

  const [isLoading, setIsLoading] = useState(true);
  let loaderTimeout;
  
  useEffect(() => {
    // Set a timeout to mark loading as complete after 3 seconds
    loaderTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  
    // Clear the timeout if the component unmounts or if needed
    return () => {
      clearTimeout(loaderTimeout);
    };
  }, []); 

  useEffect(() => {
    const parallax_el = document.querySelectorAll(".parallax");
    let xValue = 0,
      yValue = 0;

    let rotateDegree = 0;

    function update(cursorPosition) {
      parallax_el.forEach((el) => {
        let speedx = el.dataset.speedx;
        let speedy = el.dataset.speedy;
        let speedz = el.dataset.speedz;
        let rotation = el.dataset.rotation;

        let isInLeft =
          parseFloat(getComputedStyle(el).left) < window.innerWidth / 2
            ? 1
            : -1;
        let zValue =
          (cursorPosition - parseFloat(getComputedStyle(el).left)) *
          isInLeft *
          0.1;

        el.style.transform = `translateX(calc(-50% + ${-xValue * speedx}px))
            translateY(calc(-50% + ${yValue * speedy}px))
            rotateY(${rotateDegree * rotation}deg)
            perspective(2300px)
            translateZ(${zValue * speedz}px)`;
      });
    }

    update(0);

    window.addEventListener("mousemove", (e) => {
      xValue = e.clientX - window.innerWidth / 2;
      yValue = e.clientY - window.innerHeight / 2;

      rotateDegree = (xValue / (window.innerWidth / 2)) * 20;

      update(e.clientX);
    });
  }, []);

  /*----- Intersection Observer -----*/
  useEffect(() => {
    const faders = document.querySelectorAll(".fade-in");
    const sliders = document.querySelectorAll(".slide-in");

    const appearOptions = {
      threshold: 0,
      rootMargin: "0px 0px -100px 0px",
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

  return (
    <>
      <HelmetContent
        title={"Naša igraonica"}
        description={
          "Naše igralište za decu je savršeno mesto za mališane da se igraju i istraže svet kroz igru dok roditelji uživaju u ukusnim obrocima i posebnim trenucima. Naš prostor je uređen sa pažnjom prema sigurnosti i udobnosti dece, pružajući im bezbrižno okruženje."
        }
        keywords={
          "restoran, jelo, jela, piće, pića, jelovnik, meni, početna, košuta restoran, restoran košuta, o nama, igraonica, deca, igralište, igračke, tobogani"
        }
        canonical={"https://restorankosuta.rs/restoran/igraonica"}
      />
      {
        isLoading ? (
          <Loader />
        ) : (
          <RestaurantLayout>
          <section className="page-section">
            <div className="gr-texture">
              <LazyLoadImage
                src={background}
                alt="Dekorativna slika"
                className="gr-background"
              />
              <GameroomHero />
              <GameroomComponent />
            </div>
          </section>
        </RestaurantLayout>
        )
      }
    </>
  );
};

export default Gameroom;
