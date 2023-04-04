import React from 'react';
import coxsBazar from '../Images/coxsBazar.jpg'
import sreemangal from '../Images/Sreemangal.jpg'
import sundarban from '../Images/sundarban.jpg'
import './news.css'
const News = () => {
    return (
        <div className='news-container flex grid-cols-4 flex-row h-screen text-black p-10  w-full md:w-auto'>
            <div className=' basis-2/5 grid-cols-1 text-center'>
                <p className='text-4xl'>Cox's bazar</p>
                <p className='text-xl text-black'>With our system, you can easily book flights, hotels, rental cars, and other travel-related services for your employees. You can also set travel policies and budgets, track expenses,
                 and generate reports to keep track of your travel spending. ...</p>
              
            </div>
            <div className='basis-3/5 flex flex-row grid-cols-3 grid-flow-col m-2'>
                <div className="card  bg-base-100 shadow-xl image-full mx-1">
                    <figure><img src={coxsBazar} alt="Cox's Bazar" /></figure>
                    <div className="card-body">
                       <p className='text-4xl'>COX'S BAZAR</p>
                    </div>
                </div>
                {/* <div className="card  bg-base-100 shadow-xl image-full mx-1">
                    <figure><img src={sreemangal} alt="Sreemangal" /></figure>
                    <div className="card-body">
                       <p className='text-4xl'>SREEMANGAL</p>
                    </div>
                </div>
                <div className="card  bg-base-100 shadow-xl image-full mx-1">
                    <figure><img src={sundarban} alt="Shoes" /></figure>
                    <div className="card-body">
                    <p className='text-4xl align-text-bottom'>SUNDAR BAN</p>
                    </div>
                </div> */}

            </div>

        </div>
    );
};

export default News;