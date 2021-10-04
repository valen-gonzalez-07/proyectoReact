import * as React from 'react';
import Slider from '../Components/Slider/Slider';
import { SliderData } from '../Components/Slider/SliderData';

const Home = () => {
    return (
        <div transition-style="in:circle:center">
            <Slider slides={SliderData} />
        </div>
    )
}

export default Home;
