import React, { useEffect, useState } from "react";
import HallLayout from "../../Layout/HallLayout/HallLayout";
import HallGalleryComponent from "./Components/HallGalleryComponent/HallGalleryComponent";
import HelmetContent from "../../Layout/HelmerContent";
import Loader from "../../Components/Loader/Loader";

const HallGallery = () => {

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

  return (
    <>
      <HelmetContent
        title={"Galerija naših sala"}
        description={
          "Duboko smo ponosni predstaviti vam virtuelnu galeriju naših prekrasnih sala u restoranu Košuta. Prošetajte kroz ove vizualne priče koje prikazuju jedinstvene i elegantne prostore, stvorene sa pažnjom prema detaljima. Svaka sala nosi svoj šarm, stvarajući savršeno okruženje za različite događaje, svečanosti i posebne trenutke"
        }
        keywords={
          "sale, sala, izdavanje sala, izdavanje sale, rođendani, seminari, venčanja, sve vrste proslava, kamin, grande, svečana sala, kamin sala, sala grande, galerija, slike, slika"
        }
        canonical={"https://restorankosuta.rs/galerija"}
      />
      {
        isLoading ? (
          <Loader />
        ) : (
          <HallLayout>
          <section className="page-section">
            <HallGalleryComponent />
          </section>
        </HallLayout>
        )
      }
    </>
  );
};

export default HallGallery;
