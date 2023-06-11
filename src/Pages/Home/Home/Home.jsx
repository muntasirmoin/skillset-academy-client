import React from 'react';
import TopSlider from '../TopSlider/TopSlider';
import ExtraSection from '../ExtraSection/ExtraSection';
import PopularClassesSection from '../PopularClassesSection/PopularClassesSection';
import PopularInstructorsSection from './PopularInstructorsSection/PopularInstructorsSection';
import { Helmet } from 'react-helmet';

const Home = () => {
    return (
        <div>
             <Helmet>
                <title>SkillSet | Home </title>
            </Helmet>
            
            <TopSlider></TopSlider>
            <PopularClassesSection></PopularClassesSection>
            <PopularInstructorsSection></PopularInstructorsSection>
            <ExtraSection></ExtraSection>
        </div>
    );
};

export default Home;