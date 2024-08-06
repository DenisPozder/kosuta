import React, { useEffect, useState } from 'react'
import './rm-slider.css'
import restaurantImage from '../../../../../Assets/Restaurant/restaurantMealImg.jpg'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import { MdDinnerDining } from "react-icons/md";
import mealImg1 from '../../../../../Assets/Restaurant/meal1.jpg'
import mealImg2 from '../../../../../Assets/Restaurant/meal2.jpg'
import mealImg3 from '../../../../../Assets/Restaurant/meal3.jpg'
import mealImg4 from '../../../../../Assets/Restaurant/meal4.jpg'
import { useTranslation } from 'react-i18next';

const slideWidth = 280;

const _items = [
    {
        meal: {
            title: "Njeguška Pršuta",
            engTitle: "Njeguši Prosciutto",
            desc: "Njeguška Pršuta, tradicionalni crnogorski delikates, predstavlja vrhunski sušeni i dimljeni pršut koji potiče iz sela Njeguši",
            engDesc: "Njeguši Prosciutto, a traditional Montenegrin delicacy, is a superbly dried and smoked prosciutto originating from the village of Njeguši",
            image: mealImg1
        }
    },
    {
        meal: {
            title: "Pljeskavica",
            engTitle: "'Pljeskavica' Burger",
            desc: "Pljeskavica je sočni mesni burger pripremljena od pažljivo odabrane mešavine mlevenog mesa, često kombinujući junetinu i svinjetinu.",
            engDesc: "The burger is a juicy meat burger prepared from a carefully selected mixture of minced meat, often combining beef and pork.",
            image: mealImg2
        }
    },
    {
        meal: {
            title: "Pileći file na žaru",
            engTitle: "Grilled chicken fillet",
            desc: "Pileći file na žaru je ukusno jelo koje se priprema od sočnih pilećih fileta pečenih na roštilju. Fileti se obično pripremaju u začinima.",
            engDesc: "Grilled chicken fillet is a delicious dish prepared from juicy grilled chicken fillets. Fillets are usually prepared in spices to enhance the taste and juiciness of the meat.",
            image: mealImg3
        }
    },
    {
        meal: {
            title: "Bečka šnicla",
            engTitle: "Vienna steak",
            desc: "Bečka šnicla poznata i kao Bečki odrezak, je klasik austrijske kuhinje i jedno od najpoznatijih jela svetske kuhinje.",
            engDesc: "The Vienna Steak is a classic of Austrian cuisine and one of the most famous dishes of world cuisine.",
            image: mealImg4
        }
    },
]

const length = _items.length
_items.push(..._items)

const sleep = (ms = 0) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
};

const createItem = (position, idx) => {
    const item = {
        styles: {
            transform: `translateX(${position * slideWidth}px)`,
        },
        meal: _items[idx].meal,
    };

    switch (position) {
        case length - 1:
            item.styles = {...item.styles, height: '320px', top: '30px', left: '140px', opacity: ".6"};
            break
        case length + 1:
            item.styles = {...item.styles, height: '320px', top: '30px', left: "-140px", opacity: ".6"};
            break;
        case length:
            item.styles = {...item.styles, zIndex: '2'}
            break;
        default:
            item.styles = {...item.styles, opacity: 0, height: "320px", top: '30px'};
            break;
    }

    return item;
};

const RMItem = ({pos, idx, activeIdx}) => {
    const item = createItem(pos, idx, activeIdx)
    const { i18n } = useTranslation('')

    return (
        <div className="rm-item" style={item.styles}>
            <div className="rm-item-inner">
            <div className="rm-item-top">
                <img src={item.meal.image} alt="" />
            </div>
            <div className="rm-item-bottom">
                <div className="rm-itemb-text">
                    <h1><MdDinnerDining /><span>{i18n.language === 'sr' ? item.meal.title : item.meal.engTitle}</span></h1>
                    <p>{i18n.language === 'sr' ? item.meal.desc : item.meal.engDesc}</p>
                </div>
            </div>
            </div>
        </div>
    )
}

const keys = Array.from(Array(_items.length).keys());

const RMSlider = () => {
    const [items, setItems] = useState(keys);
    const [isTicking, setIsTicking] = useState(false);
    const [activeIdx, setActiveIdx] = useState(0);
    const bigLength = items.length;

    const prevClick = (jump = 1) => {
        if (!isTicking) {
            setIsTicking(true);
            setItems((prev) => {
                return prev.map((_, i) => prev[(i + jump) % bigLength]);
            });
        }
    };

    const nextClick = (jump = 1) => {
        if (!isTicking) {
            setIsTicking(true);
            setItems((prev) => {
                return prev.map(
                    (_, i) => prev[(i - jump + bigLength) % bigLength],
                );
            });
        }
    };

    useEffect(() => {
        if (isTicking) sleep(300).then(() => setIsTicking(false));
    }, [isTicking]);

    useEffect(() => {
        setActiveIdx((length - (items[0] % length)) % length)
    }, [items]);

  return (
    <div className="rm-slider-wrap-carousel">
        <div className="rm-slider-inner-carousel">
            <div className="rm-slider-container-carousel">
                <button className='rm-carousel-btn rm-carousel-prev' onClick={() => prevClick()}><AiOutlineLeft /></button>
                <div className="rm-slider-carousel-list">
                    {
                        items.map((pos, i) => (
                            <RMItem idx={i} key={i} pos={pos} />
                        ))
                    }
                </div>
                <button className='rm-carousel-btn rm-carousel-next' onClick={() => nextClick()}><AiOutlineRight /></button>
            </div>
        </div>
    </div>
  )
}

export default RMSlider