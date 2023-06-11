import React from 'react';
import TopSlider from '../TopSlider/TopSlider';
import ExtraSection from '../ExtraSection/ExtraSection';
import PopularClassesSection from '../PopularClassesSection/PopularClassesSection';

const Home = () => {
    return (
        <div>
            <h2>Home</h2>
            <TopSlider></TopSlider>
            <PopularClassesSection></PopularClassesSection>
            <ExtraSection></ExtraSection>
        </div>
    );
};

export default Home;