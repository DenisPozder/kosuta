import React, { useEffect, useState } from "react";
import HallLayout from "../../Layout/HallLayout/HallLayout";
import HRPComponent from "./Components/HRPComponent/HRPComponent";
import HelmetContent from "../../Layout/HelmerContent";
import Loader from "../../Components/Loader/Loader";

const HallReservationPage = () => {

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
        title={"Rezervišite salu"}
        description={
          "Rezervišite ekskluzivnu salu za svoj poseban događaj direktno na našem web sajtu. Jednostavno pozovite naš broj telefona, proverite dostupnost željene sale za željeni datum i rezervišite svoj prostor."
        }
        keywords={
          "sale, sala, izdavanje sala, izdavanje sale, rođendani, seminari, venčanja, sve vrste proslava, kamin, grande, svečana sala, kamin sala, sala grande, bašta, meni, jelovnik, jela, jelo, podložan promenama, jelovnik podložan promenama, rezervacije, rezervacija"
        }
        canonical={"https://restorankosuta.rs/rezervacije"}
      />
      {
        isLoading ? (
          <Loader />
        ) : (
          <HallLayout>
          <section className="page-section">
            <HRPComponent />
          </section>
        </HallLayout>
        )
      }
    </>
  );
};

export default HallReservationPage;
