import React from 'react';
import SearchBar from './SearchBar';
import foodPlate from '../images/food-plate.png';

const Header = () => {
    return (
        <header className="w-full">
            <SearchBar />

            <div className="flex items-center justify-center">
                <div className="w-2/5 flex items-center justify-center">
                    <div>
                        <h1 className="font-header text-dark text-7xl">Taste Our</h1>
                        <h1 className="font-header-2 text-dark text-6xl">Delicious Foods</h1>
                        <p className="mt-5 w-4/5">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci voluptates corrupti, saepe, ex mollitia reiciendis eaque amet.</p>
                    </div>
                </div>
                <div className="w-2/5 flex items-center justify-center">
                    <img src={foodPlate} className="w-96" alt="" />
                </div>
            </div>
        </header>
    );
};

export default Header;