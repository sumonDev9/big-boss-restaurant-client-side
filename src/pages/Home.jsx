import React from 'react';
import Bannar from '../components/Bannar';
import Categori from '../components/categori';
import Popular from '../components/Popular';

const Home = () => {
    return (
        <div>
           <Bannar></Bannar>
           <Categori></Categori>
           <Popular></Popular>
        </div>
    );
};

export default Home;