import React, { useEffect, useState } from "react";
import RestaurantLayout from "../../Layout/RestaurantLayout/RestaurantLayout";
import RGComponent from "./Components/RGComponent/RGComponent";
import HelmetContent from "../../Layout/HelmerContent";
import Loader from "../../Components/Loader/Loader";

const RestaurantGallery = () => {

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

  return (
    <>
      <HelmetContent
        title={"Galerija restorana"}
        description={
          "Dobrodošli u virtualnu šetnju kroz našu gastronomsku oazu - galeriju restorana Košuta. Uživajte u prikazu naših elegantno uređenih prostorija, atmosfere koja priziva toplinu i gostoljubivost, te svih trenutaka koji čine posetu našem restoranu nezaboravnom."
        }
        keywords={
          "restoran, jelo, jela, piće, pića, jelovnik, meni, početna, košuta restoran, restoran košuta, galerija, slike, slika, kolekcija, bašta"
        }
        canonical={"https://restorangalerija.rs/restoran/galerija"}
      />
      {
        isLoading ? (
          <Loader />
        ) : (
          <RestaurantLayout>
          <section className="page-section">
            <RGComponent />
          </section>
        </RestaurantLayout>
        )
      }
    </>
  );
};

export default RestaurantGallery;
