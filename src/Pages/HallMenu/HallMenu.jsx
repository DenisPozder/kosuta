import React, { useEffect, useState } from "react";
import HallLayout from "../../Layout/HallLayout/HallLayout";
import HallMenuHero from "./Components/HallMenuHero/HallMenuHero";
import HallMenuComponent from "./Components/HallMenuHeader/HallMenuComponent";
import HelmetContent from "../../Layout/HelmerContent";
import Loader from "../../Components/Loader/Loader";

const HallMenu = () => {

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
        title={"Sale - Meni"}
        description={
          "Uživajte u raznovrsnim ukusima našeg menija koji vas vodi kroz paletu jedinstvenih jela. Od primamljivih zalogaja do obroka ispunjenih raznolikim ukusima, svako jelo predstavlja spoj inspirativnih sastojaka."
        }
        keywords={
          "sale, sala, izdavanje sala, izdavanje sale, rođendani, seminari, venčanja, sve vrste proslava, kamin, grande, svečana sala, kamin sala, sala grande, bašta, meni, jelovnik, jela, jelo, podložan promenama, jelovnik podložan promenama"
        }
        canonical={"httpsČ//restorankosuta.rs/meni"}
      />
      {
        isLoading ? (
          <Loader />
        ) : (
          <HallLayout>
          <section className="page-section">
            <HallMenuHero />
            <HallMenuComponent />
          </section>
        </HallLayout>
        )
      }
    </>
  );
};

export default HallMenu;
