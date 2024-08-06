import React, { useEffect, useState } from "react";
import HallLayout from "../../Layout/HallLayout/HallLayout";
import ContactComponent from "./Components/ContactComponent/ContactComponent";
import HelmetContent from "../../Layout/HelmerContent";
import Loader from "../../Components/Loader/Loader";

const HallContact = () => {

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
        title={"Kontakt"}
        description={
          "Ukoliko imate neka pitanja, sugestije, pohvale ili kritike, možete nam se javiti putem telefona ili email adrese koji su naznačeni u nastavku."
        }
        keywords={
          "sale, sala, izdavanje sala, izdavanje sale, rođendani, seminari, venčanja, sve vrste proslava, kamin, grande, svečana sala, kamin sala, sala grande"
        }
        canonical={"https://restorankosuta.rs/kontakt"}
      />
      {
        isLoading ? (
          <Loader />
        ) : (
          <HallLayout>
          <section className="page-section">
            <ContactComponent />
          </section>
        </HallLayout>
        )
      }
    </>
  );
};

export default HallContact;
