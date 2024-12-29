import React from 'react';
import Bannar from '../components/Bannar';
import Categori from '../components/categori';
import Popular from '../components/Popular';
import Featured from '../components/Featured';

const Home = () => {
    return (
        <div>
           <Bannar></Bannar>
           <Categori></Categori>
           <Popular></Popular>
           <Featured></Featured>
        </div>
    );
};

export default Home;