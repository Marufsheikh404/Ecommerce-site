
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';
import image from '../../../assets/carosul/10002.jpg'
import image2 from '../../../assets/carosul/10003.jpg'
import { MdKeyboardDoubleArrowRight } from 'react-icons/md';
const Hero = () => {
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
                        <img src={image} alt="slide1" />
                        <div className='absolute top-55 left-30'>
                            <p data-aos="zoom-in" className='text-[#5CAF90] font-semibold mb-4'>Stating at $23.33</p>
                            <h1 data-aos="zoom-in" className='text-4xl leading-10 font-bold text-[#ffffff]'>Fashen Sells For <br /> Women</h1>
                            <button data-aos="zoom-in" className='px-8 py-2 mt-6 rounded-md font-semibold hover:bg-[#5CAF90] transition-all duration-300 bg-[#4B5966] text-white flex items-center gap-4'>Shop Shop <span> <MdKeyboardDoubleArrowRight /></span></button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='relative'>
                        <img src={image2} alt="slide1" />
                        <div className='absolute top-55 left-30'>
                            <p data-aos="zoom-in" className='text-[#5CAF90] font-semibold mb-4'>Stating at $23.33 </p>
                            <h1 data-aos="zoom-in" className='text-4xl font-bold leading-10 text-[#ffffff]'>Fashen Sells For <br /> Women</h1>
                            <div>
                                <button data-aos="zoom-in" className='px-8 py-2 mt-6 rounded-md font-semibold hover:bg-[#5CAF90] transition-all duration-300 bg-[#4B5966] text-white flex items-center gap-4'>Shop <span> <MdKeyboardDoubleArrowRight /></span></button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Hero;