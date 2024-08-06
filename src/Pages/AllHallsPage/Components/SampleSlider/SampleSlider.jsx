import React, { useEffect, useState } from 'react'
import './sample-slider.css'
import sampleImage from '../../../../Assets/Hall/hall1.jpg'
import sampleImage2 from '../../../../Assets/Hall/hall2.jpg'
import sampleImage3 from '../../../../Assets/Hall/hall3.jpg'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'

const _items = [
    {
        image: {
            img: sampleImage
        }
    },
    {
        image: {
            img: sampleImage2
        }
    },
    {
        image: {
            img: sampleImage3
        }
    },
    {
        image: {
            img: sampleImage
        }
    },
    {
        image: {
            img: sampleImage2
        }
    },
    {
        image: {
            img: sampleImage2
        }
    },
    {
        image: {
            img: sampleImage2
        }
    },
    {
        image: {
            img: sampleImage2
        }
    },
    {
        image: {
            img: sampleImage2
        }
    },
]

const slideWidth = 1140

const sleep = (ms = 0) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
};

    const length = _items.length
    _items.push(..._items)

const createItem = ( position, idx ) => {
    const item = {
        styles: {
            transform: `translateX(${position * slideWidth}px)`,
        },
        image: _items[idx].image,
    };

    switch (position) {
        case length - 1:
            item.styles = {...item.styles, left: "140px", height: "480px", top: "40px", opacity: ".6"};
            break
        case length + 1:
            item.styles = {...item.styles, left: "-140px", height: "480px", top: "40px", opacity: ".6"};
            break;
        case length:
            item.styles = {...item.styles, zIndex: '2', boxShadow: "0 0 20px 5px rgba(0,0,0,0.5)"}
            break;
        default:
            item.styles = {...item.styles, opacity: "0", height: "480px", top: "40px"};
            break;
    }

    return item;
};

const SampleItem = ({ pos, idx, activeIdx }) => {
    const item = createItem(pos, idx, activeIdx)

    return (
        <div className='sample-item' style={item.styles}>
            <img src={item.image.img} alt="Slika za slajder" />
        </div>
    )
}

const keys = Array.from(Array(_items.length).keys());

const SampleSlider = () => {

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

    const handleDotClick = (idx) => {
        if (idx < activeIdx) prevClick(activeIdx - idx);
        if (idx > activeIdx) nextClick(idx - activeIdx);
    };

    useEffect(() => {
        if (isTicking) sleep(300).then(() => setIsTicking(false));
    }, [isTicking]);

    useEffect(() => {
        setActiveIdx((length - (items[0] % length)) % length)
    }, [items]);

  return (
    <>
    <div className="sample-slider-wrap">
        <div className="sample-slider-inner">
            <div className="sample-slider-container">
                <button className='ssc-btn ssc-prev' onClick={() => prevClick()}><AiOutlineLeft /></button>
                <div className="sample-slider-list">
                    {
                        items.map((pos, i) => (
                            <SampleItem pos={pos} key={i} idx={i} />
                        ))
                    }
                </div>
                <button className='ssc-btn ssc-next' onClick={() => nextClick()}><AiOutlineRight /></button>
            </div>
        </div>
    </div>
    <div className="sample-slider-indicator">
        {
            items.slice(0, length).map((pos, i) => (
                <button key={i} onClick={() => handleDotClick(i)} className={i === activeIdx ? "ssi-btn active" : "ssi-btn"}></button>
            ))
        }
    </div>
    </>
  )
}

export default SampleSlider