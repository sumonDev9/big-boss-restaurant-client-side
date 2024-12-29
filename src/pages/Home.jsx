import React from 'react';
import Bannar from '../components/Bannar';
import Categori from '../components/categori';
import Popular from '../components/Popular';
import Featured from '../components/Featured';
import Testimonial from '../components/Testimonial';

const Home = () => {
    return (
        <div>
           <Bannar></Bannar>
           <Categori></Categori>
           <Popular></Popular>
           <Featured></Featured>
           <Testimonial></Testimonial>
        </div>
    );
};

export default Home;