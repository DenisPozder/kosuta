import React, { useEffect, useState } from "react";
import RestaurantLayout from "../../Layout/RestaurantLayout/RestaurantLayout";
import RestaurantMenuHeader from "./Components/RestaurantMenuHeader/RestaurantMenuHeader";
import RestaurantMenuHero from "./Components/RestaurantMenuHero/RestaurantMenuHero";
import mealImg1 from "../../Assets/Restaurant/meal1.jpg";
import mealImg2 from "../../Assets/Restaurant/meal2.jpg";
import mealImg3 from "../../Assets/Restaurant/meal3.jpg";
import mealImg4 from "../../Assets/Restaurant/meal4.jpg";
import mealTrans1 from "../../Assets/Restaurant/meal1Transparent.png";
import mealTrans2 from "../../Assets/Restaurant/meal2Transparent.png";
import mealTrans3 from "../../Assets/Restaurant/meal3Transparent.png";
import mealTrans4 from "../../Assets/Restaurant/meal4Transparent.png";
import HelmetContent from "../../Layout/HelmerContent";
import Loader from "../../Components/Loader/Loader";

const MenuPageFood = [
  {
    id: 1,
    title: "Njeguška pršuta",
    engTitle: "Njeguši Prosciutto",
    desc: "Njeguška Pršuta, tradicionalni crnogorski delikates, predstavlja vrhunski sušeni i dimljeni pršut koji potiče iz sela Njeguši. Priprema Njeguškog pršuta počinje odabranim komadom svinjskog buta, koji se najpre soli radi konzerviranja. Nakon soljenja, pršut se ostavlja da odmara, a zatim se izlaže dimu sušenja.",
    engDesc:
      "Njeguši Prosciutto, a traditional Montenegrin delicacy, is a superbly dried and smoked prosciutto originating from the village of Njeguši. The preparation of Njeguši prosciutto begins with a selected piece of pork loin, which is first salted for preservation. After salting, the prosciutto is left to rest, and then exposed to drying smoke.",
    image: mealTrans1,
    fullImage: mealImg1,
  },
  {
    id: 2,
    title: "Pljeskavica",
    engTitle: "'Pljeskavica' Burger",
    desc: "Pljeskavica je sočni mesni burger pripremljena od pažljivo odabrane mešavine mlevenog mesa, često kombinujući junetinu i svinjetinu. Meso se oblikuje u ravne ploške i peče na roštilju ili tiganju. Ključni elementi pljeskavice su bogat ukus mesa, sočnost i karakteristična tekstura koja ostaje mekana unutar hrskave kore.",
    engDesc:
      "The burger is a juicy meat burger prepared from a carefully selected mixture of minced meat, often combining beef and pork. The meat is shaped into flat slices and baked on a grill or frying pan. The key elements of the burger are the rich taste of meat, juiciness and characteristic texture that remains soft inside the crispy crust.",
    image: mealTrans2,
    fullImage: mealImg2,
  },
  {
    id: 3,
    title: "Pileći file na žaru",
    engTitle: "Grilled chicken fillet",
    desc: "Pileći file na žaru je ukusno jelo koje se priprema od sočnih pilećih fileta pečenih na roštilju. Fileti se obično pripremaju u začinima kako bi se pojačao ukus i sočnost mesa. Nakom mariniranja, pileći fileti se stavljaju na roštilj, gde se peku do savršene sočnosti i zlatno smeđe boje. Jelo je poznato po blagoj i svežoj aromi piletine, uz dodatnu dimnu notu od roštilja.",
    engDesc:
      "Grilled chicken fillet is a delicious dish prepared from juicy grilled chicken fillets. Fillets are usually prepared in spices to enhance the taste and juiciness of the meat. After marinating, chicken fillets are placed on the grill, where they are baked to perfect juiciness and golden brown color. The dish is known for its mild and fresh chicken aroma, with an extra smokey note from the grill.",
    image: mealTrans3,
    fullImage: mealImg3,
  },
  {
    id: 4,
    title: "Bečka šnicla",
    engTitle: "Vienna steak",
    desc: "Bečka šnicla poznata i kao Bečki odrezak, je klasik austrijske kuhinje i jedno od najpoznatijih jela svetske kuhinje. Ovo ukusno jelo čini tanak odrezak mesa, obilno telećeg ili svinjskog, koji je prvo umočen u brašno, zatim u jaja i na kraju u krušne mrvice ili prezlu.",
    engDesc:
      "The Vienna Steak is a classic of Austrian cuisine and one of the most famous dishes of world cuisine. This delicious dish is made up from a thin steak of meat, usually veal or pork, which is first dipped in flour, then in eggs and finally in breadcrumbs.",
    image: mealTrans4,
    fullImage: mealImg4,
  },
];

const RestaurantMenuPage = () => {

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
        title={"Jelovnik našeg restorana"}
        description={
          "Uživajte u izvrsnom spoju tradicionalne i moderne kuhinje u restoranu Košuta. Naš jedinstveni jelovnik nudi pažljivo odabrane specijalitete sa autentičnim ukusima, pripremljene sa najfinijim sezonskim sastojcima."
        }
        keywords={
          "restoran, jelo, jela, piće, pića, jelovnik, meni, početna, košuta restoran, restoran košuta, kolači, meso, piletina, riba, čorba, supa, salata"
        }
        canonical={"https://restorankosuta.rs/restoran/jelovnik"}
      />
      {
        isLoading ? (
          <Loader />
        ) : (
          <RestaurantLayout>
          <section className="page-section">
            <RestaurantMenuHero slides={MenuPageFood} />
            <RestaurantMenuHeader />
          </section>
        </RestaurantLayout>
        )
      }
    </>
  );
};

export default RestaurantMenuPage;
