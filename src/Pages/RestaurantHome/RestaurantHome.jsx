import React, { useEffect, useRef, useState } from "react";
import RestaurantLayout from "../../Layout/RestaurantLayout/RestaurantLayout";
import RestaurantHero from "./Components/RestaurantHero/RestaurantHero";
import RestaurantMenu from "./Components/RestaurantMenu/RestaurantMenu";
import RestaurantGameroom from "./Components/RestaurantGameroom/RestaurantGameroom";
import RestaurantGallerySlider from "../../Components/RestaurantGallerySlider/RestaurantGallerySlider";
import { RestaurantGalleryData } from "../../RestaurantData/RestaurantGalleryData";
import { RestaurantHeroData } from "../../RestaurantData/RestaurantHeroData";
import RestaurantCelebrations from "./Components/RestaurantCelebrations/RestaurantCelebrations";
import "./restaurant-home.css";
import background from "../../Assets/Restaurant/background.jpg";
import crackInTheWall from "../../Assets/crackInTheWall.png";
import HelmetContent from "../../Layout/HelmerContent";
import Loader from "../../Components/Loader/Loader";

const RestaurantHome = () => {

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

  const crackRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const crackPosition = crackRef.current.getBoundingClientRect().top;
      const threshold = window.innerHeight * 0.8;

      const opacity = Math.max(0, Math.min(1, 1 - crackPosition / threshold));

      crackRef.current.style.opacity = opacity.toString();
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <HelmetContent
        title={"Dobrodošli u restoran Košuta"}
        description={
          "Restoran Košuta je idilično utočište gastronomskih užitaka smešteno u srcu prirode, gde se spojila elegancija i autentičnost. Sa prozračnim i prostranim interijerom, restoran odiše toplinom i ugodnom atmosferom, stvarajući savršeno okruenje za uživanje u vrhunskoj kulinarskoj ponudi."
        }
        keywords={
          "restoran, jelo, jela, piće, pića, jelovnik, meni, početna, košuta restoran, restoran košuta"
        }
        canonical={"https://restorankosuta.rs/restoran/početna"}
      />
      {
        isLoading ? (
          <Loader />
        ) : (
          <RestaurantLayout>
          <section className="page-section">
            <div className="home-texture">
              <img
                src={background}
                alt="Dekorativna slika"
                className="ht-background"
              />
              <img
                src={crackInTheWall}
                alt="Rupa u zidu"
                className={`ht-crack`}
                ref={crackRef}
              />
              <RestaurantHero slides={RestaurantHeroData} />
              <RestaurantCelebrations />
              <RestaurantGameroom />
              <RestaurantMenu />
              <RestaurantGallerySlider data={RestaurantGalleryData} />
            </div>
          </section>
        </RestaurantLayout>
        )
      }
    </>
  );
};

export default RestaurantHome;
