import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { FaMapMarkerAlt, FaWhatsapp, FaEnvelope } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-white w-full mt-8 border-t">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                
                <div className="col-span-1 lg:col-span-2">
                    <h2 className="text-3xl font-bold text-[#5CAF90] flex items-center gap-2">
                        <span className="text-4xl">🛒</span> MARUF
                    </h2>
                    <p className="text-sm mt-3 text-gray-600">
                        Grabit is the biggest market of grocery products. Get your daily
                        needs from our store.
                    </p>

                    <div className="flex gap-3 mt-5 flex-wrap">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                            alt="Google Play"
                            className="w-24 sm:w-28"
                        />
                        <img
                            src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                            alt="App Store"
                            className="w-24 sm:w-28"
                        />
                    </div>
                </div>

              
                <div>
                    <h3 className="font-semibold text-gray-800 mb-4">Category</h3>
                    <ul className="space-y-2 text-sm text-gray-600">
                        <li>Dried Fruit</li>
                        <li>Cookies</li>
                        <li>Foods</li>
                        <li>Fresh Fruit</li>
                        <li>Tuber Root</li>
                        <li>Vegetables</li>
                    </ul>
                </div>

               
                <div>
                    <h3 className="font-semibold text-gray-800 mb-4">Company</h3>
                    <ul className="space-y-2 text-sm text-gray-600">
                        <li>About us</li>
                        <li>Delivery</li>
                        <li>Legal Notice</li>
                        <li>Terms & conditions</li>
                        <li>Secure payment</li>
                        <li>Contact us</li>
                    </ul>
                </div>

               
                <div>
                    <h3 className="font-semibold text-gray-800 mb-4">Account</h3>
                    <ul className="space-y-2 text-sm text-gray-600">
                        <li>Sign In</li>
                        <li>View Cart</li>
                        <li>Return Policy</li>
                        <li>Become a Vendor</li>
                        <li>Affiliate Program</li>
                        <li>Payments</li>
                    </ul>
                </div>

               
                <div>
                    <h3 className="font-semibold text-gray-800 mb-4">Contact</h3>
                    <ul className="space-y-3 text-sm text-gray-600">
                        <li className="flex items-start gap-2">
                            <FaMapMarkerAlt className="text-[#5CAF90] mt-1 shrink-0" />
                            2548 Broaddus Maple Court, Madisonville KY 4783, USA.
                        </li>
                        <li className="flex items-center gap-2">
                            <FaWhatsapp className="text-[#5CAF90]" /> +00 9876543210
                        </li>
                        <li className="flex items-center gap-2">
                            <FaEnvelope className="text-[#5CAF90]" /> example@email.com
                        </li>
                    </ul>

                    <div className="flex gap-3 mt-5">
                        <FaFacebookF className="text-white bg-gray-600 p-2 rounded-md text-2xl cursor-pointer hover:bg-[#5CAF90] transition" />
                        <FaTwitter className="text-white bg-gray-600 p-2 rounded-md text-2xl cursor-pointer hover:bg-[#5CAF90] transition" />
                        <FaLinkedinIn className="text-white bg-gray-600 p-2 rounded-md text-2xl cursor-pointer hover:bg-[#5CAF90] transition" />
                        <FaInstagram className="text-white bg-gray-600 p-2 rounded-md text-2xl cursor-pointer hover:bg-[#5CAF90] transition" />
                    </div>
                </div>
            </div>

           
            <div className="border-t mt-6 py-4 text-center text-sm text-gray-500 flex flex-col sm:flex-row justify-between items-center px-4 sm:px-6 max-w-7xl mx-auto gap-3">
                <p className="text-center sm:text-left">
                    Copyright © Grabit all rights reserved. Powered by Grabit.
                </p>
                <div className="flex gap-2 justify-center sm:justify-end">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg"
                        alt="Visa"
                        className="w-10"
                    />
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg"
                        alt="PayPal"
                        className="w-10"
                    />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
