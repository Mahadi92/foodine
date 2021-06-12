import React from 'react';
import food1 from '../images/food1.jpg';
import food2 from '../images/food2.jpg';
import food3 from '../images/food3.jpg';
import food4 from '../images/food4.jpg';
import food5 from '../images/food5.jpg';
import food6 from '../images/food6.jpg';
import food7 from '../images/food7.jpg';


const Category = () => {


    return (
        <section className="container m-auto p-10 h-96">
            <div className="grid grid-rows-3 grid-flow-col gap-4">
                <div className="row-span-3 overflow-hidden">
                    <img src={food1} alt="" />
                </div>
                <div className="col-span-2 overflow-hidden">
                    <img src={food1} alt="" />
                </div>
                <div className="row-span-2 col-span-2 overflow-hidden">
                    <img src={food1} alt="" />
                </div>
            </div>
        </section>
    );
};

export default Category;