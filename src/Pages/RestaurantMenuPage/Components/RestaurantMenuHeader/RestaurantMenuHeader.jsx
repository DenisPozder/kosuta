import React, { useEffect, useState } from 'react'
import './restaurant-menu-header.css'
import { MdRestaurantMenu } from "react-icons/md";
import { BiSolidDrink } from "react-icons/bi";
import mealDecoration1 from '../../../../Assets/Restaurant/restaurantMeal3.png'
import mealDecoration2 from '../../../../Assets/Restaurant/restaurantMeal4.png'
import mealDecoration3 from '../../../../Assets/Restaurant/restaurantMeal5.png'
import mealDecoration4 from '../../../../Assets/Restaurant/restaurantMeal6.png'
import leavesLeft from '../../../../Assets/Restaurant/leavesLeft.png'
import leavesRight from '../../../../Assets/Restaurant/leavesRight.png'
import background from '../../../../Assets/Restaurant/background.jpg'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useTranslation } from 'react-i18next';

const RestaurantMenuHeader = () => {

    const RestaurantMenuData = [
        {
            id: 1,
            title: "Predjelo",
            engTitle: "Appetizers",
            category: "meals",
            items: [
                {
                    id: 1,
                    title: "Zakuska 'Košuta' (za 2 osobe)",
                    engTitle: "Appetizer 'Košuta' (for 2)",
                    price: "1600"
                },
                {
                    id: 2,
                    title: "Njeguška pršuta",
                    engTitle: "Njeguši Prosciutto",
                    price: "750"
                },
                {
                    id: 3,
                    title: "Goveđa pršuta",
                    engTitle: "Beef prosciutto",
                    price: "700"
                },
                {
                    id: 4,
                    title: "Svinjska pršuta",
                    engTitle: "Pork prosciutto",
                    price: "700"
                },
                {
                    id: 5,
                    title: "Tvrdi sir",
                    engTitle: "Hard cheese",
                    price: "500"
                },
                {
                    id: 6,
                    title: "Kajmak",
                    engTitle: "Kajmak cheese",
                    price: "600"
                },
                {
                    id: 7,
                    title: "Mladi sir",
                    engTitle: "Fresh cheese",
                    price: "450"
                },
                {
                    id: 8,
                    title: "Pečurke na žaru",
                    engTitle: "Grilled mushrooms",
                    price: "500"
                },
                // {
                //     id: 9,
                //     title: "Proja",
                //     engTitle: "Cornbread",
                //     price: "*"
                // },
                // {
                //     id: 10,
                //     title: "Masline",
                //     engTitle: "Olives",
                //     price: "*"
                // },
                {
                    id: 9,
                    title: "Cezar salata",
                    engTitle: "Caesar salad",
                    price: "850"
                },
            ]
        },
        {
            id: 2,
            title: "Čorbe",
            engTitle: "Soups",
            category: "meals",
            items: [
                {
                    id: 1,
                    title: "Teleća čorba",
                    engTitle: "Veal broth",
                    price: "380"
                },
                // {
                //     id: 2,
                //     title: "Supa pileća",
                //     engTitle: "Chicken Soups",
                //     price: "*"
                // },
                {
                    id: 2,
                    title: "Riblja čorba",
                    engTitle: "Fish soup",
                    price: "300"
                },
            ]
        },
        {
            id: 3,
            title: "Pečenje",
            engTitle: "Roast",
            category: "meals",
            items: [
                // {
                //     id: 1,
                //     title: "Jagnjeće pečenje sa ražnja ( 1kg )",
                //     engTitle: "Spit roasted lamb ( 1kg )",
                //     price: "*"
                // },
                // {
                //     id: 2,
                //     title: "Praseće pečenje ( 1kg )",
                //     engTitle: "Roasted pork ( 1kg )",
                //     price: "*"
                // },
                {
                    id: 1,
                    title: "Teleće pečenje ispod sača - porcija ( prilog pekarski krompir )",
                    engTitle: "Veal roast under the bell - portion ( side dish baked potatoes )",
                    price: "1700"
                },
                // {
                //     id: 4,
                //     title: "Jagnjeće pečenje ispod sača - porcija",
                //     engTitle: "Lamb roast under the bell - portion",
                //     price: "*"
                // },
            ]
        },
        {
            id: 4,
            title: "Varivo",
            engTitle: "Side dishes",
            category: "meals",
            items: [
                {
                    id: 1,
                    title: "Pomfrit",
                    engTitle: "French fries",
                    price: "400"
                },
                {
                    id: 2,
                    title: "Krompir ispod sača",
                    engTitle: "Potatoes under the bell",
                    price: "300"
                },
                {
                    id: 3,
                    title: "Grilovano povrće",
                    engTitle: "Grilled vegetables",
                    price: "600"
                },
                {
                    id: 4,
                    title: "Kuver",
                    engTitle: "Couvert",
                    price: "150"
                },
            ]
        },
        {
            id: 5,
            title: "Jela sa roštilja",
            engTitle: "Grilled dishes",
            category: "meals",
            items: [
                {
                    id: 1,
                    title: "Ćevapi ( prilog pomfrit )",
                    engTitle: "Kebabs (side dish french fries)",
                    price: "850"
                },
                {
                    id: 2,
                    title: "Pljeskavica ( prilog pomfrit )",
                    engTitle: "'Pljeskavica' burger ( side dish french fries )",
                    price: "850"
                },
                {
                    id: 3,
                    title: "Ćevapi na kajmaku ( prilog pomfrit )",
                    engTitle: "Kebabs with kajmak (side dish french fries)",
                    price: "900"
                },
                {
                    id: 4,
                    title: "Pljeskavica u kajmaku ( prilog pomfrit )",
                    engTitle: "Pljeskavica with kajmak (side dish french fries)",
                    price: "900"
                },
                {
                    id: 5,
                    title: "Gurmanska pljeskavica ( prilog pomfrit )",
                    engTitle: "Gourmet pljeskavica (side dish french fries)",
                    price: "900"
                },
                {
                    id: 6,
                    title: "Bela vešalica ( prilog pomfrit )",
                    engTitle: "White hanger (side dish french fries)",
                    price: "1000"
                },
                {
                    id: 7,
                    title: "Dimljeni vrat ( prilog pomfrit )",
                    engTitle: "Smoked pork neck (side dish french fries)",
                    price: "1000"
                },
                {
                    id: 8,
                    title: "Ražnjići svinjski ( prilog pomfrit )",
                    engTitle: "Pork skewers (side dish french fries)",
                    price: "900"
                },
                {
                    id: 9,
                    title: "Leskovački uštipci ( prilog pomfrit )",
                    engTitle: "Leskovac fritters (side dish french fries)",
                    price: "900"
                },
                {
                    id: 10,
                    title: "Svinjski file na žaru ( prilog pomfrit )",
                    engTitle: "Grilled pork fillet ( side dish french fries )",
                    price: "1000"
                },
                {
                    id: 11,
                    title: "Domaća dimljena kobasica ( prilog pomfrit )",
                    engTitle: "Homemade smoked sausage (side dish french fries)",
                    price: "880"
                },
                {
                    id: 12,
                    title: "Mešano meso 800g ( prilog pomfrit )",
                    engTitle: "Mixed meat 800g (side dish french fries)",
                    price: "1600"
                },
                {
                    id: 13,
                    title: "Dimljena vešalica ( prilog pomfrit )",
                    engTitle: "Smoked hanger (side dish french fries)",
                    price: "1000"
                },
            ]
        },
        {
            id: 6,
            title: "Jela od bifteka",
            engTitle: "Steaks",
            category: "meals",
            items: [
                {
                    id: 1,
                    title: "Tatar biftek ( za 2 osobe )",
                    engTitle: "Steak tartare ( for two )",
                    price: "2100"
                },
                {
                    id: 2,
                    title: "Biftek na žaru",
                    engTitle: "Grilled steak",
                    price: "2400"
                },
                {
                    id: 3,
                    title: "Ramstek ( pomfrit, grilovano povrće )",
                    engTitle: "Rumpsteak",
                    price: "1800"
                },
            ]
        },
        {
            id: 7,
            title: "Sosovi",
            engTitle: "Sauces",
            category: "meals",
            items: [
                {
                    id: 1,
                    title: "Sos od pečuraka",
                    engTitle: "Mushroom sauce",
                    price: "350"
                },
                {
                    id: 2,
                    title: "Tartar sos",
                    engTitle: "Tartare sauce",
                    price: "250"
                },
            ]
        },
        {
            id: 8,
            title: "Jela od pilećeg mesa",
            engTitle: "Chicken",
            category: "meals",
            items: [
                {
                    id: 1,
                    title: "Pileći file na žaru",
                    engTitle: "Grilled chicken fillet",
                    price: "860"
                },
                {
                    id: 2,
                    title: "Pileći batak ( prilog pomfrit )",
                    engTitle: "Chicken drumsticks (side dish french fries)",
                    price: "800"
                },
                {
                    id: 3,
                    title: "Piletina sa mlincima i mileramom",
                    engTitle: "Chicken with mlinci and sour milk",
                    price: "1000"
                },
                {
                    id: 4,
                    title: "Pileći file pohovan sa susamom ( prilog pomfrit )",
                    engTitle: "Chicken fillet fried with sesame (side dish french fries)",
                    price: "950"
                },
                {
                    id: 5,
                    title: "Pileći file u četiri vrste sira ( prilog pomfrit )",
                    engTitle: "Chicken fillet Quattro Fromaggi (side dish french fries)",
                    price: "960"
                },
            ]
        },
        {
            id: 9,
            title: "Jela po porudžbini",
            engTitle: "A la carte",
            category: "meals",
            items: [
                {
                    id: 1,
                    title: "Punjena vešalica ( prilog pomfrit )",
                    engTitle: "Stuffed hanger (side dish french fries)",
                    price: "1100"
                },
                {
                    id: 2,
                    title: "Rolovana vešalica u slanini ( prilog pomfrit )",
                    engTitle: "Bacon rolled hanger (side dish french fries)",
                    price: "1150"
                },
                {
                    id: 3,
                    title: "Karađordeva šnicla ( prilog pomfrit, tartar sos )",
                    engTitle: "'Karadjordje' steak (side dish french fries, tartare sauce)",
                    price: "1100"
                },
                {
                    id: 4,
                    title: "Bečka šnicla ( prilog pomfrit )",
                    engTitle: "Vienna steak (side dish french fries)",
                    price: "1000"
                },
                {
                    id: 5,
                    title: "Pariska šnicla ( prilog pomfrit )",
                    engTitle: "Paris steak (side dish french fries)",
                    price: "1000"
                },
                {
                    id: 6,
                    title: "Natur šnicla ( prilog pomfrit )",
                    engTitle: "Nature steak (side dish french fries)",
                    price: "950"
                },
                {
                    id: 7,
                    title: "Medaljoni u sosu od pečuraka ( prilog pomfrit )",
                    engTitle: "Medallions in mushroom sauce (side dish french fries)",
                    price: "1100"
                },
                {
                    id: 8,
                    title: "Plava traka ( prilog pomfrit )",
                    engTitle: "Blue ribbon (side dish french fries)",
                    price: "1100"
                },
                {
                    id: 9,
                    title: "Dimljena svinjska rebra u kajmaku ( prilog pekarski krompir )",
                    engTitle: "Smoked pork ribs in kajmak ( side dish baked potatoes )",
                    price: "1100"
                },
                {
                    id: 10,
                    title: "Doručak ( prilog pomfrit )",
                    engTitle: "Breakfast (side dish french fries)",
                    price: "550"
                },
            ]
        },
        {
            id: 9,
            title: "Riba",
            engTitle: "Fish",
            category: "meals",
            items: [
                {
                    id: 1,
                    title: "Fileti dimljene pastrmke ( prilog blitva, bareni krompir )",
                    engTitle: "Smoked trout fillets ( side dish swiss chard, boiled potatoes)",
                    price: "1300"
                },
            ]
        },
        {
            id: 10,
            title: "Salate",
            engTitle: "Salads",
            category: "meals",
            items: [
                {
                    id: 1,
                    title: "Srpska salata",
                    engTitle: "Serbian salad",
                    price: "470"
                },
                {
                    id: 2,
                    title: "Šopska salata",
                    engTitle: "Traditional (Šopska) salad",
                    price: "490"
                },
                // {
                //     id: 3,
                //     title: "Cvekla",
                //     engTitle: "Beetroot salad",
                //     price: "*"
                // },
                {
                    id: 3,
                    title: "Grčka salata",
                    engTitle: "Greek salad",
                    price: "540"
                },
                {
                    id: 4,
                    title: "Vitaminska salata",
                    engTitle: "Vitamin salad",
                    price: "440"
                },
                {
                    id: 5,
                    title: "Zelena salata",
                    engTitle: "Green salad",
                    price: "390"
                },
                {
                    id: 6,
                    title: "Paradajz salata",
                    engTitle: "Tomato salad",
                    price: "440"
                },
                {
                    id: 7,
                    title: "Paradajz salata sa sirom",
                    engTitle: "Tomato salad with cheese",
                    price: "490"
                },
                {
                    id: 8,
                    title: "Krastavac salata",
                    engTitle: "Cucumber salad",
                    price: "440"
                },
                {
                    id: 9,
                    title: "Ajvar ( domaci )",
                    engTitle: "Ajvar ( homemade )",
                    price: "590"
                },
                {
                    id: 10,
                    title: "Urnebes salata",
                    engTitle: "'Urnebes' salad",
                    price: "440"
                },
                {
                    id: 11,
                    title: "Ljuta paprika u ulju ( komad )",
                    engTitle: "Hot pepper in oil ( one piece )",
                    price: "290"
                },
                {
                    id: 12,
                    title: "Kupus salata",
                    engTitle: "Cabbage salad",
                    price: "390"
                },
                {
                    id: 13,
                    title: "Mešana sezonska salata",
                    engTitle: "Mixed seasonal salad",
                    price: "420"
                },
                {
                    id: 14,
                    title: "Bašta salata",
                    engTitle: "Garden salad",
                    price: "1000"
                },
                {
                    id: 15,
                    title: "Rotkvice",
                    engTitle: "Radishes",
                    price: "340"
                },
                {
                    id: 16,
                    title: "Mladi luk",
                    engTitle: "Spring onions",
                    price: "340"
                },
                {
                    id: 17,
                    title: "Tarator",
                    engTitle: "Tartare",
                    price: "420"
                },
                {
                    id: 18,
                    title: "Paprika u ulju pečena",
                    engTitle: "Roasted paprika in oil",
                    price: "430"
                },
            ]
        },
        {
            id: 11,
            title: "Deserti",
            engTitle: "Desserts",
            category: "meals",
            items: [
                {
                    id: 1,
                    title: "Voćna torta",
                    engTitle: "Fruitcake",
                    price: "490"
                },
                {
                    id: 2,
                    title: "Čokoladna torta",
                    engTitle: "Chocolate cake",
                    price: "490"
                },
                {
                    id: 3,
                    title: "Baklava",
                    engTitle: "'Baklava'",
                    price: "490"
                },
                // {
                //     id: 4,
                //     title: "Palačinke ( snikers, eurokrem, marmelada, orasi i med )",
                //     engTitle: "Crepes ( snickers, chocolate cream, marmalade, walnuts and honey )",
                //     price: "340"
                // },
                {
                    id: 4,
                    title: "Tulumba",
                    engTitle: "'Tulumba'",
                    price: "440"
                },
                {
                    id: 5,
                    title: "Sladoled ( kugla )",
                    engTitle: "Ice cream ( scoop )",
                    price: "100"
                },
                {
                    id: 6,
                    title: "Urmašice",
                    engTitle: "'Urmašice' syrup biscuits",
                    price: "440"
                },
            ]
        },
        {
            id: 12,
            title: "Crvena vina",
            engTitle: "Red wines",
            category: "drinks",
            items: [
                {
                    id: 1,
                    title: "Vranac - Plantaže 13. jul ( 0.7l )",
                    engTitle: "Vranac - Plantations 13. July ( 0.7l )",
                    price: "800"
                },
                {
                    id: 2,
                    title: "Lederer kabernet sauvingnon ( Vinarija Čoka 0,7l )",
                    engTitle: "Lederer cabernet sauvingnon ( Winery Čoka 0,7l )",
                    price: "1000"
                },
                {
                    id: 3,
                    title: "Lederer merlot ( Vinarija Čoka 0,7l )",
                    engTitle: "Lederer merlot ( Winery Čoka 0,7l )",
                    price: "1000"
                },
                {
                    id: 4,
                    title: "Vinarija Ohrid merlot ( 0.7l )",
                    engTitle: "Winery Ohrid merlot ( 0.7l )",
                    price: "1900"
                },
                {
                    id: 5,
                    title: "Vinarija Ohrid vranac ( 0.7l )",
                    engTitle: "Winery Ohrid vranac ( 0.7l )",
                    price: "1900"
                },
                {
                    id: 6,
                    title: "Muštuluk crni ( Vinarija Čoka 0,7 )",
                    engTitle: "Muštuluk black ( Winery Čoka 0,7 )",
                    price: "1300"
                },
                {
                    id: 7,
                    title: "Radovanović cabernet ( 0.7l )",
                    engTitle: "Radovanović cabernet ( 0.7l )",
                    price: "1900"
                },
                {
                    id: 8,
                    title: "Kovačević Aurelius ( 0.7l )",
                    engTitle: "Kovačević Aurelius ( 0.7l )",
                    price: "1900"
                },
                {
                    id: 9,
                    title: "Međaš Vino Župa ( 0.7l )",
                    engTitle: "Međaš Vino Župa ( 0.7l )",
                    price: "800"
                },
                {
                    id: 10,
                    title: "Lagum Merlot ( Vino Župa 0.7l )",
                    engTitle: "Lagum Merlot ( Winery Župa 0.7l )",
                    price: "1500"
                },
                {
                    id: 11,
                    title: "Lagum Tamjanika ( Vino Župa 0,7l )",
                    engTitle: "Lagum Tamjanika ( Vino Župa 0,7l )",
                    price: "1500"
                },
                {
                    id: 12,
                    title: "Monah 'S' Pik Oplenac ( 0.7l )",
                    engTitle: "Monah 'S' Pik Oplenac ( 0.7l )",
                    price: "2900"
                },
                {
                    id: 13,
                    title: "Čaša vina ( 0.2l )",
                    engTitle: "Wine glass ( 0.2l )",
                    price: "250"
                },
            ]
        },
        {
            id: 13,
            title: "Bela vina",
            engTitle: "White wines",
            category: "drinks",
            items: [
                {
                    id: 1,
                    title: "Krstaš - Plantaze 13. jul ( 0.7l )",
                    engTitle: "Krstaš - Plantations 13. July ( 0.7l )",
                    price: "800"
                },
                {
                    id: 2,
                    title: "Lederer Chardonnay ( Vinarija Čoka 0,7l )",
                    engTitle: "Lederer Chardonnay ( Winery Čoka 0,7l )",
                    price: "1000"
                },
                {
                    id: 3,
                    title: "Lederer Sauvignom ( Vinarija Čoka 0,7l )",
                    engTitle: "Lederer Sauvignom ( Winery Čoka 0,7l )",
                    price: "1000"
                },
                {
                    id: 4,
                    title: "Lederer muskat ( Vinarija Čoka 0,7l )",
                    engTitle: "Lederer muskat ( Winery Čoka 0,7l )",
                    price: "1000"
                },
                {
                    id: 5,
                    title: "Muštuluk beli ( Vinarija Čoka 0,7l )",
                    engTitle: "Muštuluk white ( Winery Čoka 0,7l )",
                    price: "1300"
                },
                {
                    id: 6,
                    title: "Vinarija Ohrid rizling ( 0,7 )",
                    engTitle: "Winery Ohrid Riesling ( 0,7l )",
                    price: "1800"
                },
                {
                    id: 7,
                    title: "Vinarija Ohrid Sauvignom ( 0.7l )",
                    engTitle: "Winery Ohrid Sauvignom ( 0.7l )",
                    price: "1800"
                },
                {
                    id: 8,
                    title: "Međaš Vino Župa ( 0.7l )",
                    engTitle: "Međaš Wine Župa ( 0.7l )",
                    price: "800"
                },
                {
                    id: 9,
                    title: "Tamjanika Vino Župa ( 0.7l )",
                    engTitle: "Tamjanika Wine Župa ( 0.7l )",
                    price: "1500"
                },
                {
                    id: 10,
                    title: "Kovacevic Chardonnay ( 0.7l )",
                    engTitle: "Kovačević Chardonnay ( 0.7l )",
                    price: "1800"
                },
                {
                    id: 11,
                    title: "Radovanovic Chardonnay ( 0,7l )",
                    engTitle: "Radovanović Chardonnay ( 0,7l )",
                    price: "1800"
                },
                {
                    id: 12,
                    title: "Tamjanka Spasic ( 0.7l )",
                    engTitle: "Tamjanka Spasic ( 0.7l )",
                    price: "1800"
                },
                {
                    id: 13,
                    title: "Malvazija Kozlović ( 0.7l )",
                    engTitle: "Malvasia Kozlović ( 0.7l )",
                    price: "2800"
                },
            ]
        },
        {
            id: 14,
            title: "Roze vina",
            engTitle: "Rosé wines",
            category: "drinks",
            items: [
                {
                    id: 1,
                    title: "Rubin ( 0.7l )",
                    engTitle: "Rubin ( 0.7l )",
                    price: "900"
                },
                {
                    id: 2,
                    title: "Radovanovic ( 0,7l )",
                    engTitle: "Radovanović ( 0.7l )",
                    price: "1500"
                },
                {
                    id: 3,
                    title: "Kovačević ( 0,7l )",
                    engTitle: "Kovačević ( 0.7l )",
                    price: "1500"
                },
                {
                    id: 4,
                    title: "Rose '10' ( Vino Župa 0,7l )",
                    engTitle: "Rosé '10' ( Wine Župa 0,7l )",
                    price: "800"
                },
                {
                    id: 5,
                    title: "Lagum 'Syrah' ( Vino Župa 0,7l )",
                    engTitle: "Lagum 'Syrah' ( Vino Župa 0,7l )",
                    price: "1500"
                },
                {
                    id: 6,
                    title: "Roze Vinarija Čoka ( 0,7 )",
                    engTitle: "Rosé Winery Čoka ( 0,7 )",
                    price: "800"
                },
            ]
        },
        {
            id: 15,
            title: "Vina od voća",
            engTitle: "Fruit wines",
            category: "drinks",
            items: [
                {
                    id: 1,
                    title: "Kupinovo voćno vino ( 187ml )",
                    engTitle: "Blackberry fruit wine ( 187ml )",
                    price: "250"
                },
                {
                    id: 2,
                    title: "Malina voćno vino ( 187ml )",
                    engTitle: "Raspberry fruit wine ( 187ml )",
                    price: "250"
                },
                {
                    id: 3,
                    title: "Višnja voćno vino ( 187ml )",
                    engTitle: "Cherry fruit wine ( 187ml )",
                    price: "250"
                },
                {
                    id: 4,
                    title: "Aronija voćno vino ( 187ml )",
                    engTitle: "Chokeberry fruit wine ( 187ml )",
                    price: "250"
                },
                {
                    id: 5,
                    title: "Di Luna Snagria ( 187ml )",
                    engTitle: "Di Luna Sangria ( 187ml )",
                    price: "250"
                },
                {
                    id: 6,
                    title: "Di Luna Snagria White ( 187ml )",
                    engTitle: "Di Luna Sangria White ( 187ml )",
                    price: "250"
                },
            ]
        },
        {
            id: 16,
            title: "Kafa i topli napici",
            engTitle: "Coffee and hot drinks",
            category: "drinks",
            items: [
                {
                    id: 1,
                    title: "Espresso",
                    engTitle: "Espresso",
                    price: "240"
                },
                {
                    id: 2,
                    title: "Macchiato",
                    engTitle: "Macchiato",
                    price: "250"
                },
                {
                    id: 3,
                    title: "Cappuccino",
                    engTitle: "Cappuccino",
                    price: "290"
                },
                {
                    id: 4,
                    title: "Kafa sa slagom",
                    engTitle: "Coffee with whipped cream",
                    price: "300"
                },
                {
                    id: 5,
                    title: "Ness kafa",
                    engTitle: "Nescafe",
                    price: "300"
                },
                {
                    id: 6,
                    title: "Čaj",
                    engTitle: "Tea",
                    price: "240"
                },
                {
                    id: 7,
                    title: "Ceđena pomorandža",
                    engTitle: "Fresh orange juice",
                    price: "390"
                },
                {
                    id: 8,
                    title: "Limunada",
                    engTitle: "Lemonade",
                    price: "340"
                },
                {
                    id: 9,
                    title: "Kisela voda ( 0,25/1l )",
                    engTitle: "Mineral water ( 0,25/1l )",
                    price: "240/290"
                },
                {
                    id: 10,
                    title: "Aqua viva ( 0,25/1l )",
                    engTitle: "Aqua viva ( 0,25/1l )",
                    price: "240/290"
                },
            ]
        },
        {
            id: 17,
            title: "Gazirani sokovi",
            engTitle: "Sodas",
            category: "drinks",
            items: [
                {
                    id: 1,
                    title: "Coca cola ( 0,33l )",
                    engTitle: "Coca cola ( 0,33l )",
                    price: "350"
                },
                {
                    id: 2,
                    title: "Fanta ( 0,33l )",
                    engTitle: "Fanta ( 0,33l )",
                    price: "350"
                },
                {
                    id: 3,
                    title: "Sprite ( 0,33l )",
                    engTitle: "Sprite ( 0,33l )",
                    price: "350"
                },
                {
                    id: 4,
                    title: "Bitter Lemon ( 0,33l )",
                    engTitle: "Bitter Lemon ( 0,33l )",
                    price: "350"
                },
                {
                    id: 5,
                    title: "Tonic Watter ( 0,33l )",
                    engTitle: "Tonic Water ( 0,33l )",
                    price: "350"
                },
            ]
        },
        {
            id: 18,
            title: "Negazirani sokovi",
            engTitle: "Still beverages",
            category: "drinks",
            items: [
                {
                    id: 1,
                    title: "Đus ( 0,25l )",
                    engTitle: "Juice ( 0.25l )",
                    price: "370"
                },
                {
                    id: 2,
                    title: "Jagoda ( 0,25l )",
                    engTitle: "Strawberry ( 0.25l )",
                    price: "370"
                },
                {
                    id: 3,
                    title: "Breskva ( 0,25l )",
                    engTitle: "Peach ( 0.25l )",
                    price: "370"
                },
                {
                    id: 4,
                    title: "Jabuka ( 0,25l )",
                    engTitle: "Apple ( 0.25l )",
                    price: "370"
                },
                {
                    id: 5,
                    title: "Borovnica ( 0,25l )",
                    engTitle: "Blueberry ( 0.25l )",
                    price: "370"
                },
            ]
        },
        {
            id: 19,
            title: "Energetska pića",
            engTitle: "Energy drinks",
            category: "drinks",
            items: [
                {
                    id: 1,
                    title: "Guarana",
                    engTitle: "Guarana",
                    price: "*"
                },
                {
                    id: 2,
                    title: "Red Bull",
                    engTitle: "Red Bull",
                    price: "*"
                },
            ]
        },
        {
            id: 20,
            title: "Žestoka alkoholna pića",
            engTitle: "Spirits",
            category: "drinks",
            items: [
                {
                    id: 1,
                    title: "Ballantine's ( 0,3l )",
                    engTitle: "Ballantine's ( 0.03l )",
                    price: "300"
                },
                {
                    id: 2,
                    title: "Johnny Walker ( 0,3l )",
                    engTitle: "Johnny Walker ( 0.03l )",
                    price: "300"
                },
                {
                    id: 3,
                    title: "Chivas Regal ( 0,3l )",
                    engTitle: "Chivas Regal ( 0.03l )",
                    price: "500"
                },
                {
                    id: 4,
                    title: "Jack Daniels ( 0,3l )",
                    engTitle: "Jack Daniel's ( 0.03l )",
                    price: "450"
                },
                {
                    id: 5,
                    title: "Tequila ( 0,3l )",
                    engTitle: "Tequilla ( 0.03l )",
                    price: "300"
                },
                {
                    id: 6,
                    title: "Smirnoff ( 0,3l )",
                    engTitle: "Smirnoff ( 0.03l )",
                    price: "300"
                },
                {
                    id: 7,
                    title: "Absolut Vodka ( 0,3l )",
                    engTitle: "Absolut Vodka ( 0.03l )",
                    price: "300"
                },
                {
                    id: 8,
                    title: "Baileys ( 0,3l )",
                    engTitle: "Baileys ( 0.03l )",
                    price: "300"
                },
                {
                    id: 9,
                    title: "Jager ( 0,3l )",
                    engTitle: "Jägermeister ( 0.03l )",
                    price: "300"
                },
                {
                    id: 10,
                    title: "Gin ( 0,3l )",
                    engTitle: "Gin ( 0.03l )",
                    price: "300"
                },
                {
                    id: 11,
                    title: "Pelinkovac - bitter liquer ( 0,3l )",
                    engTitle: "Pelinkovac - bitter liquer ( 0.03l )",
                    price: "250"
                },
                {
                    id: 12,
                    title: "Campari ( 0,3l )",
                    engTitle: "Campari ( 0.03l )",
                    price: "300"
                },
                {
                    id: 13,
                    title: "Martini ( 0,3l )",
                    engTitle: "Martini ( 0.03l )",
                    price: "300"
                },
                {
                    id: 14,
                    title: "Vermut ( 0,3l )",
                    engTitle: "Vermouth ( 0.03l )",
                    price: "300"
                },
                {
                    id: 15,
                    title: "Francuski konjak ( 0,3l )",
                    engTitle: "French cognac ( 0.03l )",
                    price: "500"
                },
                {
                    id: 16,
                    title: "Vodka - domaca ( 0,3l )",
                    engTitle: "Vodka ( 0.03l )",
                    price: "250"
                },
                {
                    id: 17,
                    title: "Vinjak ( 0,3l )",
                    engTitle: "Vinjak ( 0.03l )",
                    price: "250"
                },
                {
                    id: 18,
                    title: "Ballantine's 12yrs ( 0,3l )",
                    engTitle: "Ballantine's 12yrs ( 0.03l )",
                    price: "550"
                },
                {
                    id: 19,
                    title: "Johnny Walker - Black label ( 0,3l )",
                    engTitle: "Johnny Walker - Black Label ( 0.03l )",
                    price: "500"
                },
            ]
        },
        {
            id: 21,
            title: "Piva",
            engTitle: "Beers",
            category: "drinks",
            items: [
                {
                    id: 1,
                    title: "Lav pivo ( 0,33l )",
                    engTitle: "Lav ( 0.33l )",
                    price: "260"
                },
                {
                    id: 2,
                    title: "Tuborg ( 0,33l )",
                    engTitle: "Tuborg ( 0.33l )",
                    price: "290"
                },
                {
                    id: 3,
                    title: "Erdinger ( 0,33l )",
                    engTitle: "Erdinger ( 0.33l )",
                    price: "350"
                },
                {
                    id: 4,
                    title: "Calsberg ( 0,33l )",
                    engTitle: "Carlsberg ( 0.33l )",
                    price: "350"
                },
                {
                    id: 5,
                    title: "Budweiser tamno pivo ( 0,33l )",
                    engTitle: "Budweiser dark ( 0.33l )",
                    price: "290"
                },
                {
                    id: 6,
                    title: "Točeno Lav pivo ( 0,33l )",
                    engTitle: "Lav draught ( 0.33l )",
                    price: "250"
                },
                {
                    id: 7,
                    title: "Točeno Tuborg ( 0,33l )",
                    engTitle: "Tuborg draught ( 0.33l )",
                    price: "280"
                },
                {
                    id: 8,
                    title: "Stella Artois ( 0,33l )",
                    engTitle: "Stella Artois ( 0.33l )",
                    price: "390"
                },
            ]
        },
        {
            id: 22,
            title: "Rakije",
            engTitle: "Rakija",
            category: "drinks",
            items: [
                {
                    id: 1,
                    title: "Viljamovka ( 0,3l )",
                    engTitle: "Viljamovka ( pear ) ( 0.03l )",
                    price: "380"
                },
                {
                    id: 2,
                    title: "Kajsija ( 0,3l )",
                    engTitle: "Apricot ( 0.03l )",
                    price: "380"
                },
                {
                    id: 3,
                    title: "Dunja ( 0,3l )",
                    engTitle: "Quince ( 0.03l )",
                    price: "380"
                },
                {
                    id: 4,
                    title: "Šljiva ( 0,3l )",
                    engTitle: "Plum ( 0.03l )",
                    price: "380"
                },
                {
                    id: 5,
                    title: "Loza ( 0,3l )",
                    engTitle: "Grape ( 0.03l )",
                    price: "380"
                },
            ]
        },
        {
            id: 23,
            title: "Medene rakije",
            engTitle: "Honey spiced rakija",
            category: "drinks",
            items: [
                {
                    id: 1,
                    title: "Dunja ( 0,3l )",
                    engTitle: "Quince ( 0.03l )",
                    price: "340"
                },
                {
                    id: 2,
                    title: "Malina ( 0,3l )",
                    engTitle: "Raspberry ( 0.03l )",
                    price: "340"
                },
                {
                    id: 3,
                    title: "Jabuka - cimet ( 0,3l )",
                    engTitle: "Apple - cinnamon ( 0.03l )",
                    price: "340"
                },
            ]
        },
    ]

    const [ category, setCategory ] = useState("MEALS")
    const [ menu, setMenu ] = useState(RestaurantMenuData)
    const { t, i18n } = useTranslation('restaurantMenu')

    useEffect(() => {
        if (category === "MEALS") {
            const filteredItems = RestaurantMenuData.filter(menu => menu.category === 'meals')
            setMenu(filteredItems)
        }else if (category === "DRINKS") {
            const filteredItems = RestaurantMenuData.filter(menu => menu.category === 'drinks')
            setMenu(filteredItems)
        }else {
            setMenu(RestaurantMenuData)
        }
    },[category])

  return (
    <div className="restaurant-menu-header">
        {/* <img src={branchTree} alt="Dekorativna slika" className='rmh-tree1' /> */}
        <LazyLoadImage src={leavesLeft} alt="Dekorativna slika" className='rmh-leaves-left' />
        <LazyLoadImage src={leavesRight} alt="Dekorativna slika" className='rmh-leaves-right' />
        <LazyLoadImage src={background} alt="Pozadina" className='rmh-background' />
        <div className="rmh-ot"></div>
        <div className="rmh-ob"></div>
        <div className="rmh-content">
            <h1 className='rmh-h1 slide-in from-top'>{t('rmhDesc')}</h1>
            <div className="rmhc-items fade-in">
                <div className={`rmhc-item ${category === "MEALS" ? "rmhc-item-active" : ""}`} onClick={() => setCategory("MEALS")}>
                    <h3 className='rmhc-h3'><span>{t('rmhTitle1')}</span> <MdRestaurantMenu /></h3>
                </div>
                <div className={`rmhc-item ${category === "DRINKS" ? "rmhc-item-active" : ""}`} onClick={() => setCategory("DRINKS")}>
                    <h3 className='rmhc-h3'><span>{t('rmhTitle2')}</span> <BiSolidDrink /></h3>
                </div>
            </div>
            <div className="rmhc-wrap">
                {/* <img src={branchRight} alt="Dekorativna slika" className='rmhcw-branch-right' /> */}
                <LazyLoadImage src={mealDecoration1} alt="Dekorativna slika" className='meal-decoration1' />
                <LazyLoadImage src={mealDecoration2} alt="Dekorativna slika" className='meal-decoration2' />
                <LazyLoadImage src={mealDecoration3} alt="Dekorativna slika" className='meal-decoration3' />
                <LazyLoadImage src={mealDecoration4} alt="Dekorativna slika" className='meal-decoration4' />
                <div className={`rmhcw-content`}>
                    {
                        menu.map((menuItem, index) => (
                            <div className="rmhcw-item fade-in" key={index}>
                                <h1>{i18n.language === 'sr' ? menuItem.title : menuItem.engTitle}</h1>
                                <div className="rmhcw-meal-price">
                                {
                                    menuItem.items.map((item, indexMenu) => (
                                        <div className="rmhcwm-item" key={indexMenu}>
                                            <h3>{i18n.language === 'sr' ? item.title : item.engTitle}</h3>
                                            <h2>{item.price} RSD</h2>
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

export default RestaurantMenuHeader