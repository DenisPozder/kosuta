import React, { useEffect, useState } from "react";
import LandingComponent from "./Components/LandingComponent/LandingComponent";
import LanguageSwitcher from "../../Components/LanguageSwitcher/LanguageSwitcher";
import HelmetContent from "../../Layout/HelmerContent";
import Loader from "../../Components/Loader/Loader";

const Landing = () => {

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
        title={"Dobrodošli u Košutu"}
        description={
          "Ušuškan unutar bujnog zagrljaja visokih četinara, Košuta nudi jedinstvenu fuziju modernog ambijenta i detalja prirode. Potopite svoje događaje u neuporedivu lepotu ovog prostora, gde se raskoš susreće s spokojem prirode"
        }
        keywords={
          "sale, sala, izdavanje sala, izdavanje sale, rođendani, seminari, venčanja, sve vrste proslava, kamin, grande, svečana sala, kamin sala, sala grande, restoran, meni, jelovnik, galerija, slike, slika, jela, jelo, deserti, supa, supe, desert, predjelo, glavno jelo, pića, piće"
        }
        canonical={"https://restorankosuta.rs"}
      />
      {
        isLoading ? (
          <Loader />
        ) : (
          <section className="page-section">
          <LanguageSwitcher isLandingPage={true} />
          <LandingComponent />
        </section>
        )
      }
    </>
  );
};

export default Landing;
