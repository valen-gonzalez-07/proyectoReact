import * as React from "react";
import './Slider.scss';
import { SliderData } from "./SliderData";
import ButtonSlide from "../ButtonSlide/ButtonSlide";

const Slider = ({slides}) => {

    const [background, setBackground] = React.useState("");

    const [current, setCurrent] = React.useState(0); 
    const length = slides.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }

    return (
        <section className="slideContainer">
            <i className="fas fa-arrow-circle-left slideArrow" onClick={prevSlide}></i>
            {SliderData.map((slide) => {
                return (
                    <section key={slide.id} className={slide.id === current ? "slide-active" : "slide"}>
                        {slide.id === current && (
                            <div className={`slideDataContainer ${slide.className}`}>
                                <div className="slideData" >
                                    <p className="slideTitle">{slide.title}</p>
                                    <p className="slideDescription">{slide.description}</p>
                                    <ButtonSlide onClick={() => setBackground(slide.className)} />
                                </div>
                                <div className="slideImg">
                                    <div className="slideCircle"></div>
                                    <img className="slideWine" src={slide.img} alt={slide.title} />
                                </div>
                            </div>
                        )}
                    </section>
                )
            })}
            <i className="fas fa-arrow-circle-right slideArrow" onClick={nextSlide}></i>
        </section>
    )
}

export default Slider;