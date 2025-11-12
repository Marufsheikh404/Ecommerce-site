import React from 'react';
import img1 from '../../../assets/image/12.jpg'
import img2 from '../../../assets/image/13.jpg'
import img3 from '../../../assets/image/14.jpg'
import { Link } from 'react-router';

const Collaction = () => {
    return (
        <div className='container mx-auto px-4 lg:my-10 flex flex-col lg:flex-row  items-stretch gap-3'>
            <div className="card flex-1 mt-4 lg:mt-0 bg-base-100 image-full w-full lg:w-96 shadow-sm relative">
                <figure>
                    <img
                        src={img1}
                        alt="Shoes" />
                </figure>
                <div className="card-body relative">
                    <div className='absolute left-45 top-10'>
                        <h2 className="text-2xl">Womens Collections</h2>
                        <div className="card-actions">
                            <Link to={'category'}> <button className="btn btn-xs text-white mt-2 ml-3 bg-[#5CAF90] border-none hover:bg-[#367f65] transition-all duration-300">Shop Now</button></Link>
                        </div>
                    </div>
                </div>
                <p className='absolute top-0 left-0 bg-white text-xs font-semibold'>50% Off</p>
            </div>

            <div className="card flex-1 bg-base-100 mt-4 lg:mt-0 image-full w-full lg:w-96 shadow-sm relative">
                <figure>
                    <img
                        src={img2}
                        alt="Shoes" />
                </figure>
                <div className="card-body relative">
                    <div className='absolute left-45 top-10'>
                        <h2 className="text-2xl">Kids Collections</h2>
                        <div className="card-actions">
                            <Link to={'category'}> <button className="btn btn-xs text-white mt-2 ml-3 bg-[#5CAF90] border-none hover:bg-[#367f65] transition-all duration-300">Shop Now</button></Link>                        </div>
                    </div>
                </div>
                <p className='absolute top-0 left-0 bg-white text-xs font-semibold'>50% Off</p>
            </div>

            <div className="card flex-1 mt-4 lg:mt-0 bg-base-100 image-full w-full lg:w-96 shadow-sm relative">
                <figure>
                    <img
                        src={img3}
                        alt="Shoes" />
                </figure>
                <div className="card-body relative">
                    <div className='absolute left-45 top-10'>
                        <h2 className="text-2xl">Mans Collections</h2>
                        <div className="card-actions">
                            <Link to={'category'}> <button className="btn btn-xs text-white mt-2 ml-3 bg-[#5CAF90] border-none hover:bg-[#367f65] transition-all duration-300">Shop Now</button></Link>                        </div>
                    </div>
                </div>
                <p className='absolute top-0 left-0 bg-white text-xs font-semibold'>50% Off</p>
            </div>
        </div>
    );
};

export default Collaction;