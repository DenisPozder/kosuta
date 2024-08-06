import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Serbian language imports
import restaurantHomeSerbian from './locales/restoranPocetna.json'
import restaurantHeaderSerbian from './locales/restoranHeader.json'
import restaurantAboutSerbian from './locales/oNama.json'
import restaurantGameroomSerbian from './locales/igraonica.json'
import restaurantMenuSerbian from './locales/restoranMeni.json'
import restaurantGallerySerbian from './locales/restoranGalerija.json'
import hallHomeSerbian from './locales/salePočetna.json'
import allHallsSerbian from './locales/sveSale.json'
import allHallsMenuSerbian from './locales/saleMeni.json'
import restaurantFooterSerbian from './locales/restoranFuter.json'
import hallContactSerbian from './locales/saleKontakt.json'
import hallReservationsSerbian from './locales/rezervacije.json'

// English language imports
import restaurantHomeEnglish from './locales/restaurantHome.json'
import restaurantHeaderEnglish from './locales/restaurantHeader.json'
import restaurantAboutEnglish from './locales/aboutUs.json'
import restaurantGameroomEnglish from './locales/playroom.json'
import restaurantMenuEnglish from './locales/restaurantMenu.json'
import restaurantGalleryEnglish from './locales/restaurantGallery.json'
import hallHomeEnglish from './locales/hallHome.json'
import allHallsEnglish from './locales/allHalls.json'
import allHallsMenuEnglish from './locales/hallMenu.json'
import restaurantFooterEnglish from './locales/restaurantFooter.json'
import hallContactEnglish from './locales/hallContact.json'
import hallReservationsEnglish from './locales/reservations.json'

const storedLanguage = localStorage.getItem('i18nextLng') || 'sr';

i18n
    .use(initReactI18next)
    .use(LanguageDetector)
    .init({
        resources: {
            sr: {
                restaurantHome: restaurantHomeSerbian,
                restaurantHeader: restaurantHeaderSerbian,
                about: restaurantAboutSerbian,
                gameroom: restaurantGameroomSerbian,
                restaurantMenu: restaurantMenuSerbian,
                restaurantGallery: restaurantGallerySerbian,
                hallHome: hallHomeSerbian,
                allHalls: allHallsSerbian,
                hallMenu: allHallsMenuSerbian,
                restaurantFooter: restaurantFooterSerbian,
                hallContact: hallContactSerbian,
                hallReservations: hallReservationsSerbian
            },
            en: {
                restaurantHome: restaurantHomeEnglish,
                restaurantHeader: restaurantHeaderEnglish,
                about: restaurantAboutEnglish,
                gameroom: restaurantGameroomEnglish,
                restaurantMenu: restaurantMenuEnglish,
                restaurantGallery: restaurantGalleryEnglish,
                hallHome: hallHomeEnglish,
                allHalls: allHallsEnglish,
                hallMenu: allHallsMenuEnglish,
                restaurantFooter: restaurantFooterEnglish,
                hallContact: hallContactEnglish,
                hallReservations: hallReservationsEnglish
            }
        },
        lng: storedLanguage,
        fallbackLng: 'sr',
        detection: {
            order: ['localStorage', 'navigator']
        },
        interpolation: {
            escapeValue: false
        }
    })

export default i18n