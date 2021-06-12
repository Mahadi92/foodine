import React from 'react';
import Category from '../components/Category';
import Header from '../components/Header';
import Navbar from '../components/Navbar';

const Home = () => {
    return (
        <div>
            <div className="header-bg">
                <Navbar />
                <Header />
            </div>
            <Category />
        </div>
    );
};

export default Home;