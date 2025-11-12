import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';
import cover from '../../../assets/image/execulisive colloction.jpg'
import { MdKeyboardDoubleArrowRight } from 'react-icons/md';

const LastestExclusive = () => {
    return (
        <div className='container mx-auto px-4'>
            <Swiper
                modules={[Autoplay]}
                autoplay={{
                    delay: 3000,    
                    disableOnInteraction: false,
                }}
                loop={true}
                speed={1000}        
                slidesPerView={1}
            >
                <SwiperSlide>
                    <div className='relative'>
                        <img src={cover} alt="slide1" />
                        <div className='hidden lg:block absolute top-28 right-20'>
                            <p className='text-[#1b44b4] font-semibold'>Stating at <span className='text-[#1b44b4] font-bold'>$23.33</span></p>
                            <h1 className='text-4xl leading-10 font-bold text-[#ffffff]'>Fashen Sells For <br /> Women</h1>
                            <button className='px-8 py-2 mt-6 rounded-md font-semibold hover:bg-[#1e3850] transition-all duration-300 bg-[#4B5966] text-white flex items-center gap-2'>Shop <span><MdKeyboardDoubleArrowRight /></span></button>                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='relative'>
                        <img src={cover} alt="slide1" />
                        <div className='hidden lg:block absolute top-28 right-20'>
                            <p className='text-[#1b44b4] font-semibold'>Stating at <span className='text-[#1b44b4] font-bold'>$23.33</span></p>
                            <h1 className='text-4xl leading-10 font-bold text-[#ffffff]'>Fashen Sells For <br /> Women</h1>
                            <button className='px-8 py-2 mt-6 rounded-md font-semibold hover:bg-[#1e3850] transition-all duration-300 bg-[#4B5966] text-white flex items-center gap-2'>Shop <span><MdKeyboardDoubleArrowRight /></span></button>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default LastestExclusive;