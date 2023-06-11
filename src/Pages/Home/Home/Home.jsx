import React from 'react';
import TopSlider from '../TopSlider/TopSlider';
import ExtraSection from '../ExtraSection/ExtraSection';
import PopularClassesSection from '../PopularClassesSection/PopularClassesSection';
import PopularInstructorsSection from './PopularInstructorsSection/PopularInstructorsSection';

const Home = () => {
    return (
        <div>
            
            <TopSlider></TopSlider>
            <PopularClassesSection></PopularClassesSection>
            <PopularInstructorsSection></PopularInstructorsSection>
            <ExtraSection></ExtraSection>
        </div>
    );
};

export default Home;