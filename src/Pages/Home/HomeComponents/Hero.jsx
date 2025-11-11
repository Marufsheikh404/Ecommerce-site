
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';
import image from '../../../assets/image/carosul/10002.jpg'
import image2 from '../../../assets/image/carosul/10003.jpg'
const Hero = () => {
    return (
        <div className='container mx-auto px-4'>
            <Swiper
            modules={[Autoplay]}
            autoplay={{
                delay: 3000,      // 3 sec
                disableOnInteraction: false,
            }}
            loop={true}
            speed={1000}         // smooth transition speed
            slidesPerView={1}
            >
                <SwiperSlide>
                    <div className='relative'>
                        <img src={image} alt="slide1" />
                        <div className='absolute top-28 left-20'>
                            <p className='text-[#516EBF] font-semibold'>Stating at <span className='text-[#1b44b4] font-bold'>$23.33</span></p>
                            <h1 className='text-4xl leading-10 font-bold text-[#4B5966]'>Fashen Sells For <br /> Women</h1>
                            <button className='px-8 py-2 mt-6 rounded-md font-semibold hover:bg-[#1e3850] transition-all duration-300 bg-[#4B5966] text-white'>Shop</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='relative'>
                        <img src={image2} alt="slide1" />
                        <div className='absolute top-28 left-20'>
                            <p className='text-[#516EBF] font-semibold'>Stating at <span className='text-[#1b44b4] font-bold'>$23.33</span></p>
                            <h1 className='text-4xl font-bold leading-10 text-[#4B5966]'>Fashen Sells For <br /> Women</h1>
                            <button className='px-8 py-2 mt-6 rounded-md font-semibold hover:bg-[#1e3850] transition-all duration-300 bg-[#4B5966] text-white'>Shop</button>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Hero;