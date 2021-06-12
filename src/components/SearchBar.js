import React from 'react';

const SearchBar = () => {
    return (
        <section className="bg-primaryShad p-7 flex justify-center items-center">
            <div className="shadow w-1/2 flex rounded-full bg-light">
                <input className="w-full rounded p-3 px-5 rounded-full" type="text" placeholder="SEARCH YOUR FAVORITE FOOD..." />
                <button className="w-auto bg-light flex justify-end items-center text-primary flex rounded-full px-5 p-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </button>
            </div>
        </section>
    );
};

export default SearchBar;