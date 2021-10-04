import * as React from 'react';
import Slider from '../Components/Slider/Slider';
import { SliderData } from '../Components/Slider/SliderData';

const Home = () => {
    return (
        <>
            <Slider slides={SliderData} />
        </>
    )
}

export default Home;
