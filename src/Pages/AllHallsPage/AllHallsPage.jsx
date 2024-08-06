import React, { useEffect, useState } from "react";
import HallLayout from "../../Layout/HallLayout/HallLayout";
import AllHallsHero from "./Components/AllHallsHero/AllHallsHero";
import AllHallsTabs from "./Components/AllHallsTabs/AllHallsTabs";
import HelmetContent from "../../Layout/HelmerContent";
import Loader from "../../Components/Loader/Loader";

const AllHallsPage = () => {

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
        title={"Sve sale"}
        description={
          "Pogledajte sve naše sale, i odaberite pravu salu za vaš poseban dan. Na raspolaganju su vam sale sa kapacitetom od 80 do 400 gostiju, sa prilagodljivim menijima, sve u zavisnosti od vaših potreba."
        }
        keywords={
          "sale, sala, izdavanje sala, izdavanje sale, rođendani, seminari, venčanja, sve vrste proslava, kamin, grande, svečana sala, kamin sala, sala grande, bašta"
        }
        canonical={"https://restorankosuta.rs/sale"}
      />
      {
        isLoading ? (
          <Loader />
        ) : (
          <HallLayout>
          <section className="page-section">
            <AllHallsHero />
            <AllHallsTabs />
          </section>
        </HallLayout>
        )
      }
    </>
  );
};

export default AllHallsPage;
