import React, { useEffect, useState } from 'react'
import './hall-menu-component.css'
import foodImg from '../../../../Assets/Hall/foodImg.jpg'
import kosutaLogo from '../../../../Assets/logo.svg'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { useTranslation } from 'react-i18next'

const HallMenuData = [
    // {
    //   title: "Predjelo",
    //   engTitle: "APPETIZERS",
    //   category: "32",
    //   subTitle: [
    //     {
    //       title: "mesni proizvodi",
    //       engTitle: "MEAT",
    //       paragraphs: [
    //         {
    //           title: "Pršuta Njeguška, Svinjska pečenica, Goveđa pečenica, Kulen, Budimska",
    //           engTitle: "Njeguši Prosciutto, pork prosciutto, beef prosciutto, Kulen sausage, Budim sausage"
    //         }
    //       ]
    //     },
    //     {
    //       title: "sirevi",
    //       engTitle: "CHEESES",
    //       paragraphs: [
    //         {
    //           title: "Kajmak, Mladi sir, Kačkavalj",
    //           engTitle: "Kajmak, fresh cheese, Kashkaval",
    //         },
    //       ]
    //     },
    //     {
    //       title: "peciva",
    //       engTitle: "PASTRIES",
    //       paragraphs: [
    //         {
    //           title: "Proja, Pita sa mesom, Pita sa sirom",
    //           engTitle: "Cornbread, meat pie, cheese pie",
    //         },
    //       ]
    //     },
    //     {
    //       title: "dodaci",
    //       engTitle: "ADDITIONS",
    //       paragraphs: [
    //         {
    //           title: "Masline",
    //           engTitle: "Olives",
    //         }
    //       ]
    //     },
    //   ]
    // },
    // {
    //   title: "Salate",
    //   engTitle: "SALADS",
    //   category: "32",
    //   subTitle: [
    //     {
    //       title: "Ruska",
    //       engTitle: "Russian salad",
    //     },
    //     {
    //       title: "Kupus salata",
    //       engTitle: "Cabbage salad",
    //     },
    //     {
    //       title: "Sezonska",
    //       engTitle: "Seasonal salad",
    //     },
    //   ]
    // },
    // {
    //   title: "Čorba",
    //   engTitle: "SOUPS",
    //   category: "32",
    //   subTitle: [
    //     {
    //       title: "Teleća",
    //       engTitle: "Veal broth",
    //     }
    //   ]
    // },
    // {
    //   title: "Glavno jelo",
    //   engTitle: "MAIN COURSE",
    //   category: "32",
    //   subTitle: [
    //     {
    //       title: "roštilj",
    //       engTitle: "GRILL",
    //       paragraphs: [
    //         {
    //           title: "Pljeskavica, Ćevapi, Vešalica, Pileće belo meso, Dimljeni vrat, Domaća kobasica, Pileći batak",
    //           engTitle: "Burger, Kebabs, Hanger, Chicken fillets, Smoked pork neck, Homemade sausage, Chicken drumsticks",
    //         },
    //       ]
    //     },
    //     {
    //       title: "prilog",
    //       engTitle: "SIDE DISH",
    //       paragraphs: [
    //         {
    //           title: "Pekarski krompir",
    //           engTitle: "Baked potatoes",
    //         }
    //       ]
    //     }
    //   ]
    // },
    // {
    //   title: "Piće",
    //   engTitle: "DRINKS",
    //   category: "32",
    //   subTitle: [
    //     {
    //       title: "rakije",
    //       engTitle: "RAKIJA",
    //       paragraphs: [
    //         {
    //           title: "Dunja, Kajsija, Šljiva, Loza, Viljamovka",
    //           engTitle: "Quince, Apricot, Plum, Grape, Viljamovka ( pear )",
    //         },
    //       ]
    //     },
    //     {
    //       title: "vina",
    //       engTitle: "WINE",
    //       paragraphs: [
    //         {
    //           title: "Crveno vino 0,7l, Roze vino 0,7l, Belo vino 0,7l ( Vinarija Oplenac )",
    //           engTitle: "Red wine 0.7l, Rosé 0.7l, White wine 0.7l (Winery Oplenac)",
    //         },
    //       ]
    //     },
    //     {
    //       title: "pivo",
    //       engTitle: "BEER",
    //       paragraphs: [
    //         {
    //           title: "Lav Premium 0,33l, Lav točeno 0,33l",
    //           engTitle: "Lav Premium 0.33l, Lav draught 0.33l",
    //         },
    //       ]
    //     },
    //     {
    //       title: "voda",
    //       engTitle: "WATER",
    //       paragraphs: [
    //         {
    //           title: "Knjaz Miloš gazirana, Aqua Viva negazirana",
    //           engTitle: "Knjaz Miloš mineral carbonated, Aqua Viva non-carbonated",
    //         },
    //       ]
    //     },
    //     {
    //       title: "sokovi",
    //       engTitle: "JUICES",
    //       paragraphs: [
    //         {
    //           title: "Coca-Cola, Coca-Cola Zero, Fanta, Bitter Lemon, Tonic Water, Sprite, Jabuka, Jagoda, Breskva, Đus",
    //           engTitle: "Coca-Cola, Coca-Cola Zero, Fanta, Bitter Lemon, Tonic Water, Sprite, Apple, Strawberry, Peach, Juice",
    //         },
    //       ]
    //     },
    //     {
    //       title: "ostala pića",
    //       engTitle: "OTHER DRINKS",
    //       paragraphs: [
    //         {
    //           title: "Vermut, Vodka, Vinjak, Dzin, Pelinkovac",
    //           engTitle: "Vermouth, Vodka, Vinjak, Gin, Pelinkovac",
    //         },
    //       ]
    //     },
    //     {
    //       title: "kafa",
    //       engTitle: "COFFEE",
    //       paragraphs: [
    //         {
    //           title: "Kafa domaća, Kafa espresso, Nes kafa",
    //           engTitle: "Homemade coffee, Espresso, Nescafe",
    //         },
    //       ]
    //     },
    //   ]
    // },
    {
      title: "Predjelo",
      engTitle: "APPETIZERS",
      category: "35",
      subTitle: [
        {
          title: "mesni proizvodi",
          engTitle: "MEAT",
          paragraphs: [
            {
              title: "Pršuta Njeguška, Svinjska pečenica, Goveđa pečenica, Kulen, Budimska",
              engTitle: "Njeguši Prosciutto, pork prosciutto, beef prosciutto, Kulen sausage, Budim sausage",
            }
          ]
        },
        {
          title: "sirevi",
          engTitle: "CHEESES",
          paragraphs: [
            {
              title: "Kajmak, Mladi sir, Kačkavalj",
              engTitle: "Kajmak, fresh cheese, Kashkaval",
            },
          ]
        },
        {
          title: "peciva",
          engTitle: "PASTRIES",
          paragraphs: [
            {
              title: "Proja, Pita sa mesom, Pita sa sirom",
              engTitle: "Cornbread, meat pie, cheese pie",
            },
          ]
        },
        {
          title: "dodaci",
          engTitle: "ADDITIONS",
          paragraphs: [
            {
              title: "Masline",
              engTitle: "Olives",
            }
          ]
        },
      ]
    },
    {
      title: "Salate",
      engTitle: "SALADS",
      category: "35",
      subTitle: [
        {
          title: "Ruska",
          engTitle: "Russian salad",
        },
        {
          title: "Kupus salata",
          engTitle: "Cabbage salad",
        },
        {
          title: "Sezonska",
          engTitle: "Seasonal salad",
        },
      ]
    },
    {
      title: "Čorba",
      engTitle: "SOUPS",
      category: "35",
      subTitle: [
        {
          title: "Teleća",
          engTitle: "Veal broth",
        }
      ]
    },
    {
      title: "Glavno jelo",
      engTitle: "MAIN COURSE",
      category: "35",
      subTitle: [
        {
          title: "roštilj",
          engTitle: "GRILL",
          paragraphs: [
            {
              title: "Pljeskavica, Ćevapi, Vešalica, Pileće belo meso, Dimljeni vrat, Domaća kobasica, Pileći batak",
              engTitle: "Burger, Kebabs, Hanger, Chicken fillets, Smoked pork neck, Homemade sausage, Chicken drumsticks",
            },
          ]
        },
        {
          title: "prilog",
          engTitle: "SIDE DISH",
          paragraphs: [
            {
              title: "Pekarski krompir",
              engTitle: "Baked potatoes",
            }
          ]
        }
      ]
    },
    {
      title: "Piće",
      engTitle: "DRINKS",
      category: "35",
      subTitle: [
        {
          title: "rakije",
          engTitle: "RAKIJA",
          paragraphs: [
            {
              title: "Dunja, Kajsija, Šljiva, Loza, Viljamovka",
              engTitle: "Quince, Apricot, Plum, Grape, Viljamovka ( pear )",
            },
          ]
        },
        {
          title: "vina",
          engTitle: "WINE",
          paragraphs: [
            {
              title: "Crveno vino 0,7l, Roze vino 0,7l, Belo vino 0,7l ( Vinarija Oplenac )",
              engTitle: "Red wine 0.7l, Rosé 0.7l, White wine 0.7l (Winery Oplenac)",
            },
          ]
        },
        {
          title: "pivo",
          engTitle: "BEER",
          paragraphs: [
            {
              title: "Lav Premium 0,33l, Lav točeno 0,33l",
              engTitle: "Lav Premium 0.33l, Lav draught 0.33l",
            },
          ]
        },
        {
          title: "voda",
          engTitle: "WATER",
          paragraphs: [
            {
              title: "Knjaz Miloš gazirana, Aqua Viva negazirana",
              engTitle: "Knjaz Miloš mineral carbonated, Aqua Viva non-carbonated",
            },
          ]
        },
        {
          title: "sokovi",
          engTitle: "JUICES",
          paragraphs: [
            {
              title: "Coca-Cola, Coca-Cola Zero, Fanta, Bitter Lemon, Tonic Water, Sprite, Jabuka, Jagoda, Breskva, Đus",
              engTitle: "Coca-Cola, Coca-Cola Zero, Fanta, Bitter Lemon, Tonic Water, Sprite, Apple, Strawberry, Peach, Juice",
            },
          ]
        },
        {
          title: "ostala pića",
          engTitle: "OTHER DRINKS",
          paragraphs: [
            {
              title: "Vermut, Vodka, Vinjak, Dzin, Pelinkovac",
              engTitle: "Vermouth, Vodka, Vinjak, Gin, Pelinkovac",
            },
          ]
        },
        {
          title: "kafa",
          engTitle: "COFFEE",
          paragraphs: [
            {
              title: "Kafa domaća, Kafa espresso, Nes kafa",
              engTitle: "Homemade coffee, Espresso, Nescafe",
            },
          ]
        },
      ]
    },
    {
      title: "Predjelo",
      engTitle: "APPETIZERS",
      category: "37",
      subTitle: [
        {
          title: "mesni proizvodi",
          engTitle: "MEAT",
          paragraphs: [
            {
              title: "Pršuta Njeguška, Svinjska pečenica, Goveđa pečenica, Kulen, Budimska",
              engTitle: "Njeguši Prosciutto, pork prosciutto, beef prosciutto, Kulen sausage, Budim sausage",
            }
          ]
        },
        {
          title: "sirevi",
          engTitle: "CHEESES",
          paragraphs: [
            {
              title: "Kajmak, Mladi sir, Kačkavalj",
              engTitle: "Kajmak, fresh cheese, Kashkaval",
            },
          ]
        },
        {
          title: "peciva",
          engTitle: "PASTRIES",
          paragraphs: [
            {
              title: "Proja, Pita sa mesom, Pita sa sirom",
              engTitle: "Cornbread, meat pie, cheese pie",
            },
          ]
        },
        {
          title: "dodaci",
          engTitle: "ADDITIONS",
          paragraphs: [
            {
              title: "Masline",
              engTitle: "Olives",
            }
          ]
        },
      ]
    },
    {
      title: "Salate",
      engTitle: "SALADS",
      category: "37",
      subTitle: [
        {
          title: "Ruska",
          engTitle: "Russian salad",
        },
        {
          title: "Kupus salata",
          engTitle: "Cabbage salad",
        },
        {
          title: "Sezonska",
          engTitle: "Seasonal salad",
        },
      ]
    },
    {
      title: "Čorba",
      engTitle: "SOUPS",
      category: "37",
      subTitle: [
        {
          title: "Teleća",
          engTitle: "Veal broth",
        }
      ]
    },
    {
      title: "Međujelo",
      engTitle: "IN BETWEEN",
      category: "37",
      subTitle: [
        {
          title: "Sarmice od želja sa kiselim kupusom",
          engTitle: "Herb stuffed sour cabbage rolls",
        }
      ]
    },
    {
      title: "Glavno jelo",
      engTitle: "MAIN COURSE",
      category: "37",
      subTitle: [
        {
          title: "roštilj",
          engTitle: "GRILL",
          paragraphs: [
            {
              title: "Pljeskavica, Ćevapi, Vešalica, Pileće belo meso, Dimljeni vrat, Domaća kobasica, Pileći batak",
              engTitle: "Burger, Kebabs, Hanger, Chicken fillets, Smoked pork neck, Homemade sausage, Chicken drumsticks",
            },
          ]
        },
        {
          title: "teleći medaljoni",
          engTitle: "VEAL MEDALLIONS",
          paragraphs: [
            {
              title: "Sa vrganjima i šampinjonima",
              engTitle: "with boletus and champignons",
            }
          ]
        },
        {
          title: "ćuretina sa mlincima",
          engTitle: "TURKEY WITH 'MLINCI'",
        },
        {
          title: "prilog",
          engTitle: "SIDE DISH",
          paragraphs: [
            {
              title: "Pekarski krompir",
              engTitle: "Baked potatoes",
            }
          ]
        }
      ]
    },
    {
      title: "Piće",
      engTitle: "DRINKS",
      category: "37",
      subTitle: [
        {
          title: "rakije",
          engTitle: "RAKIJA",
          paragraphs: [
            {
              title: "Dunja, Kajsija, Šljiva, Loza, Viljamovka",
              engTitle: "Quince, Apricot, Plum, Grape, Viljamovka ( pear )",
            },
          ]
        },
        {
          title: "medene rakije",
          engTitle: "HONEY SPICED RAKIJA",
          paragraphs: [
            {
              title: "Malina, Dunja Jabuka i cimet",
              engTitle: "Raspberry, Quince, Apple - cinnamon",
            },
          ]
        },
        {
          title: "vina",
          engTitle: "WINE",
          paragraphs: [
            {
              title: "Crveno vino 0,7l, Roze vino 0,7l, Belo vino 0,7l ( Vinarija Oplenac )",
              engTitle: "Red wine 0.7l, Rosé 0.7l, White wine 0.7l (Winery Oplenac)",
            },
          ]
        },
        {
          title: "pivo",
          engTitle: "BEER",
          paragraphs: [
            {
              title: "Lav Premium 0,33l, Lav točeno 0,33l, Tuborg 0,33l, Budweiser tamno 0,33l",
              engTitle: "Lav Premium 0.33l, Lav draught 0.33l, Tuborg 0.33l, Budweiser dark 0.33l",
            },
          ]
        },
        {
          title: "voda",
          engTitle: "WATER",
          paragraphs: [
            {
              title: "Knjaz Miloš gazirana, Aqua Viva negazirana",
              engTitle: "Knjaz Miloš mineral carbonated, Aqua Viva non-carbonated",
            },
          ]
        },
        {
          title: "sokovi",
          engTitle: "JUICES",
          paragraphs: [
            {
              title: "Coca-Cola, Coca-Cola Zero, Fanta, Bitter Lemon, Tonic Water, Sprite, Jabuka, Jagoda, Breskva, Đus",
              engTitle: "Coca-Cola, Coca-Cola Zero, Fanta, Bitter Lemon, Tonic Water, Sprite, Apple, Strawberry, Peach, Juice",
            },
          ]
        },
        {
          title: "ostala pića",
          engTitle: "OTHER DRINKS",
          paragraphs: [
            {
              title: "Vermut, Vodka, Vinjak, Dzin, Pelinkovac",
              engTitle: "Vermouth, Vodka, Vinjak, Gin, Pelinkovac",
            },
          ]
        },
        {
          title: "strana pića",
          engTitle: "FOREIGN DRINKS",
          paragraphs: [
            {
              title: "Martini, Campari, Tequila, Ballantines, Jeger",
              engTitle: "Martini, Campari, Tequilla, Ballantine's, Jägermeister",
            },
          ]
        },
        {
          title: "kafa",
          engTitle: "COFFEE",
          paragraphs: [
            {
              title: "Kafa domaća, Kafa espresso, Nes kafa",
              engTitle: "Homemade coffee, Espresso, Nescafe",
            },
          ]
        },
      ]
    },
    {
      title: "Predjelo",
      engTitle: "APPETIZERS",
      category: "40",
      subTitle: [
        {
          title: "mesni proizvodi",
          engTitle: "MEAT",
          paragraphs: [
            {
              title: "Pršuta Njeguška, Svinjska pečenica, Goveđa pečenica, Kulen, Budimska",
              engTitle: "Njeguši Prosciutto, pork prosciutto, beef prosciutto, Kulen sausage, Budim sausage",
            }
          ]
        },
        {
          title: "sirevi",
          engTitle: "CHEESES",
          paragraphs: [
            {
              title: "Kajmak, Mladi sir, Kačkavalj",
              engTitle: "Kajmak, fresh cheese, Kashkaval",
            },
          ]
        },
        {
          title: "peciva",
          engTitle: "PASTRIES",
          paragraphs: [
            {
              title: "Proja, Pita sa mesom, Pita sa sirom",
              engTitle: "Cornbread, meat pie, cheese pie",
            },
          ]
        },
        {
          title: "dodaci",
          engTitle: "ADDITIONS",
          paragraphs: [
            {
              title: "Masline",
              engTitle: "Olives",
            }
          ]
        },
      ]
    },
    {
      title: "Salate",
      engTitle: "SALADS",
      category: "40",
      subTitle: [
        {
          title: "Ruska",
          engTitle: "Russian salad",
        },
        {
          title: "Kupus salata",
          engTitle: "Cabbage salad",
        },
        {
          title: "Sezonska",
          engTitle: "Seasonal salad",
        },
      ]
    },
    {
      title: "Čorba",
      engTitle: "SOUPS",
      category: "40",
      subTitle: [
        {
          title: "Teleća",
          engTitle: "Veal broth",
        }
      ]
    },
    {
      title: "Međujelo",
      engTitle: "IN BETWEEN",
      category: "40",
      subTitle: [
        {
          title: "Sarmice od želja sa kiselim kupusom",
          engTitle: "Herb stuffed sour cabbage rolls",
        }
      ]
    },
    {
      title: "Glavno jelo",
      engTitle: "MAIN COURSE",
      category: "40",
      subTitle: [
        {
          title: "roštilj",
          engTitle: "GRILL",
          paragraphs: [
            {
              title: "Pljeskavica, Ćevapi, Vešalica, Pileće belo meso, Dimljeni vrat, Domaća kobasica, Pileći batak",
              engTitle: "Burger, Kebabs, Hanger, Chicken fillets, Smoked pork neck, Homemade sausage, Chicken drumsticks",
            },
          ]
        },
        {
          title: "teleći medaljoni",
          engTitle: "VEAL MEDALLIONS",
          paragraphs: [
            {
              title: "Sa vrganjima i šampinjonima",
              engTitle: "with boletus and champignons",
            }
          ]
        },
        {
          title: "ćuretina sa mlincima",
          engTitle: "TURKEY WITH 'MLINCI'",
        },
        {
          title: "prilog",
          engTitle: "SIDE DISH",
          paragraphs: [
            {
              title: "Pekarski krompir",
              engTitle: "Baked potatoes",
            }
          ]
        }
      ]
    },
    {
      title: "pećenje",
      engTitle: "ROAST",
      category: "40",
      subTitle: [
        {
          title: "Svinjsko pečenje",
          engTitle: "PORK ROAST",
        },
        {
          title: "Jagnjeće pečenje",
          engTitle: "LAMB ROAST",
        },
      ]
    },
    {
      title: "Piće",
      engTitle: "DRINKS",
      category: "40",
      subTitle: [
        {
          title: "rakije",
          engTitle: "RAKIJA",
          paragraphs: [
            {
              title: "Dunja, Kajsija, Šljiva, Loza, Viljamovka",
              engTitle: "Quince, Apricot, Plum, Grape, Viljamovka ( pear )",
            },
          ]
        },
        {
          title: "medene rakije",
          engTitle: "HONEY SPICED RAKIJA",
          paragraphs: [
            {
              title: "Malina, Dunja Jabuka i cimet",
              engTitle: "Raspberry, Quince, Apple - cinnamon",
            },
          ]
        },
        {
          title: "vina",
          engTitle: "WINE",
          paragraphs: [
            {
              title: "Crveno vino 0,7l, Roze vino 0,7l, Belo vino 0,7l ( Vinarija Oplenac )",
              engTitle: "Red wine 0.7l, Rosé 0.7l, White wine 0.7l (Winery Oplenac)",
            },
          ]
        },
        {
          title: "pivo",
          engTitle: "BEER",
          paragraphs: [
            {
              title: "Lav Premium 0,33l, Lav točeno 0,33l, Tuborg 0,33l, Budweiser tamno 0,33l",
              engTitle: "Lav Premium 0.33l, Lav draught 0.33l, Tuborg 0.33l, Budweiser dark 0.33l",
            },
          ]
        },
        {
          title: "voda",
          engTitle: "WATER",
          paragraphs: [
            {
              title: "Knjaz Miloš gazirana, Aqua Viva negazirana",
              engTitle: "Knjaz Miloš mineral carbonated, Aqua Viva non-carbonated",
            },
          ]
        },
        {
          title: "sokovi",
          engTitle: "JUICES",
          paragraphs: [
            {
              title: "Coca-Cola, Coca-Cola Zero, Fanta, Bitter Lemon, Tonic Water, Sprite, Jabuka, Jagoda, Breskva, Đus",
              engTitle: "Coca-Cola, Coca-Cola Zero, Fanta, Bitter Lemon, Tonic Water, Sprite, Apple, Strawberry, Peach, Juice",
            },
          ]
        },
        {
          title: "ostala pića",
          engTitle: "OTHER DRINKS",
          paragraphs: [
            {
              title: "Vermut, Vodka, Vinjak, Dzin, Pelinkovac",
              engTitle: "Vermouth, Vodka, Vinjak, Gin, Pelinkovac",
            },
          ]
        },
        {
          title: "strana pića",
          engTitle: "FOREIGN DRINKS",
          paragraphs: [
            {
              title: "Martini, Campari, Tequila, Ballantines, Jeger",
              engTitle: "Martini, Campari, Tequilla, Ballantine's, Jägermeister",
            },
          ]
        },
        {
          title: "kafa",
          engTitle: "COFFEE",
          paragraphs: [
            {
              title: "Kafa domaća, Kafa espresso, Nes kafa",
              engTitle: "Homemade coffee, Espresso, Nescafe",
            },
          ]
        },
      ]
    },
]

const HallMenuTab = ({ title, engTitle, isActive, handleTabButton, category }) => {
  const { i18n } = useTranslation('')
  return (
    <button className={`hall-menu-tab ${isActive ? "active" : ""}`} onClick={() => handleTabButton(category)}>
      {i18n.language === 'sr' ? title : engTitle}
    </button>
  )
}

const HallMenuComponent = () => {

  const { i18n } = useTranslation('')

  const [ category, setCategory ] = useState('35')
  const [ content, setContent ] = useState([])

  useEffect(() => {
    setContent(HallMenuData.filter(data => data.category === category))
  },[category])

      /*----- Intersection Observer -----*/
useEffect(() => {

  const faders = document.querySelectorAll('.fade-in')
  const sliders = document.querySelectorAll('.slide-in')

  const appearOptions = {
    threshold: 0,
    rootMargin: "0px 0px -200px 0px"
  }

  const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
    entries.forEach(entry => {
      if(!entry.isIntersecting) {
        return;
      }else {
        entry.target.classList.add('appear')
        appearOnScroll.unobserve(entry.target)
      }
    })
  }, appearOptions)

  faders.forEach(fader => {
    appearOnScroll.observe(fader)
  })

  sliders.forEach(slider => {
    appearOnScroll.observe(slider)
  })

},[content])

  return (
    <div className="hall-menu-component">
        <div className="hall-menu-header fade-in">
          {/* <HallMenuTab category={'32'} engTitle={'32€ per person'} title={'32€ po osobi'} handleTabButton={setCategory} isActive={category === "32"} /> */}
          <HallMenuTab category={'35'} engTitle={'35€ per person'} title={'35€ po osobi'} handleTabButton={setCategory} isActive={category === "35"} />
          <HallMenuTab category={'37'} engTitle={'37€ per person'} title={'37€ po osobi'} handleTabButton={setCategory} isActive={category === "37"} />
          <HallMenuTab category={'40'} engTitle={'40€ per person'} title={'40€ po osobi'} handleTabButton={setCategory} isActive={category === "40"} />
        </div>
        <div className="hmc-content">
          <div className="hmc-container">
            <div className="hmc-wrap slide-in from-left">
              <div className="hmc-wrap-overlay"></div>
              <div className="hmc-img">
                <LazyLoadImage src={foodImg} alt="Slika hrane" />
              </div>`
              <div className={`hmc-scroll`}>
                <LazyLoadImage src={kosutaLogo} alt="Logo sajta" />
              </div>
            </div>
            <div className="hmc-menu">
              {
                content.map((item , index) => (
                  <div className='hmc-menu-title' key={`${category}-${index}`}>
                    <h1 className='slide-in from-left'>{i18n.language === 'sr' ? item.title : item.engTitle}</h1>
                    <div className="hmc-menu2">
                      {
                        item.subTitle.map((subTitle, subIndex) => (
                          <div className='hmc-menu-sub' key={subIndex}>
                            <h3 className='slide-in from-left'>{i18n.language === 'sr' ? subTitle.title : subTitle.engTitle}</h3>
                            <div className="hmc-menu3">
                              {
                                subTitle.paragraphs && subTitle.paragraphs.length > 0 &&
                                subTitle.paragraphs.map((paragraph, parIndex) => (
                                  <div key={parIndex}>
                                    <p className='slide-in from-left'>{i18n.language === 'sr' ? paragraph.title : paragraph.engTitle}</p>
                                  </div>
                                ))
                              }
                            </div>
                          </div>
                        ))
                      }
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
    </div>
  )
}

export default HallMenuComponent