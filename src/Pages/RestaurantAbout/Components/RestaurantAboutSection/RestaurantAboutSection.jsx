import React from "react";
import "./restaurant-about-section.css";
import restaurantimage from "../../../../Assets/Restaurant/restaurantImg24.jpg";
import { LazyLoadImage } from "react-lazy-load-image-component";

const RestaurantAboutSection = () => {
  return (
    <div className="restaurant-about-section">
      <div className="ras-content">
        <div className="ras-column slide-in from-left">
          <h3>
            Dobrodošli u raskoš restorana Košuta, jedinstvenog gastronomskog dragulja koji se uspinje iznad očekivanja. Naš restoran nije samo mesto gde se služe ukusni obroci, to je i putovanje kroz estetiku, eleganciju i doživljaj najvišeg kulinarskog standarda. Ulazak u naš restoran predstavlja korak ka oazi mira i sofisticiranosti. Prostire se u prostranom ambijentu obogaćenom prirodnim svetlom i zemljanim tonovima. Zidovi obloženi prirodnim drvetom stvaraju toplinu, a sofisticirano osvetljenje dodaje dozu luksuza. Stolovi su postavljeni sa pažnjom prema detaljima, pružajući svakom gostu privatnost i uživanje u svakom zalogaju. 
          </h3>
        </div>
        <div className="ras-column slide-in from-right">
          <LazyLoadImage
            src={restaurantimage}
            alt="Slika restorana"
            className="ras-img"
          />
        </div>
      </div>
    </div>
  );
};

export default RestaurantAboutSection;
