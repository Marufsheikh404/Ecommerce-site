import { useEffect } from "react";
import SectionTitle from "../../../Components/SharedComponents/SectionTitle";
import about from '../../../assets/image/about-2.png'
import about2 from '../../../assets/image/about-3.png'
import about3 from '../../../assets/image/about.png'
import Aos from "aos";

const AboutHero = () => {
    useEffect(() => {
        Aos.init({
            duration: 800,
            easing: "ease-out",
            once: false,
            mirror: false,
        });
    }, []);
    return (
        <section className="max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-2 gap-10 items-center">
            {/* Left - Images */}
            <div data-aos="zoom-out-right" className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                    <img
                        src={about}
                        alt="Grocery store"
                        className="rounded-2xl shadow-lg w-full h-80 object-cover"
                    />
                    <img
                        src={about2}
                        alt="Indoor plants"
                        className="rounded-2xl shadow-lg w-full h-60 object-cover"
                    />
                </div>
                <img
                    src={about3}
                    alt="Farmer picking tomatoes"
                    className="rounded-2xl shadow-lg w-full h-full object-cover"
                />
            </div>

            {/* Right - Text */}
            <div>
                <div data-aos="fade-up" data-aos-duration ="2000">  <SectionTitle title={'Who We'} colorTitle={'Are ?'}></SectionTitle></div>
                <p data-aos="fade-up" data-aos-duration ="2000" className="text-lg text-gray-700 font-medium mb-6 uppercase cts">
                    We’re here to serve only the best products for you, enriching your
                    homes with the best essentials.
                </p>
                <div data-aos="fade-up" data-aos-duration ="2000" className="space-y-4 text-gray-600 leading-relaxed ct">
                    <p>
                        Lorem ipsum is simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been the industry standard dummy text ever
                        since the 1500s, when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has survived not only
                        five centuries, but also the leap into electronic typesetting,
                        remaining essentially unchanged.
                    </p>
                    <p>
                        Lorem ipsum has survived not only five centuries, but also the leap
                        into electronic typesetting, remaining essentially unchanged.
                    </p>
                    <p>
                        Lorem ipsum is simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been the industry standard dummy text ever
                        since the 1500s, when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AboutHero;
