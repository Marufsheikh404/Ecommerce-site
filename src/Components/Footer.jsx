import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { FaMapMarkerAlt, FaWhatsapp, FaEnvelope } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-white container mx-auto px-4 my-4">
            <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-6">
                {/* Brand */}
                <div className="col-span-2 md:col-span-1">
                    <h2 className="text-3xl font-bold text-[#5CAF90] flex items-center gap-2">
                        <span className="text-4xl">🛒</span> MARUF
                    </h2>
                    <p className="text-sm mt-3">
                        Grabit is the biggest market of grocery products. Get your daily
                        needs from our store.
                    </p>

                    <div className="flex gap-3 mt-5">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                            alt="Google Play"
                            className="w-20"
                        />
                        <img
                            src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                            alt="App Store"
                            className="w-20"
                        />
                    </div>
                </div>

                {/* Category */}
                <div>
                    <h3 className="font-semibold text-gray-800 mb-4">Category</h3>
                    <ul className="space-y-2 text-sm">
                        <li>Dried Fruit</li>
                        <li>Cookies</li>
                        <li>Foods</li>
                        <li>Fresh Fruit</li>
                        <li>Tuber Root</li>
                        <li>Vegetables</li>
                    </ul>
                </div>

                {/* Company */}
                <div>
                    <h3 className="font-semibold text-gray-800 mb-4">Company</h3>
                    <ul className="space-y-2 text-sm">
                        <li>About us</li>
                        <li>Delivery</li>
                        <li>Legal Notice</li>
                        <li>Terms & conditions</li>
                        <li>Secure payment</li>
                        <li>Contact us</li>
                    </ul>
                </div>

                {/* Account */}
                <div>
                    <h3 className="font-semibold text-gray-800 mb-4">Account</h3>
                    <ul className="space-y-2 text-sm">
                        <li>Sign In</li>
                        <li>View Cart</li>
                        <li>Return Policy</li>
                        <li>Become a Vendor</li>
                        <li>Affiliate Program</li>
                        <li>Payments</li>
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h3 className="font-semibold text-gray-800 mb-4">Contact</h3>
                    <ul className="space-y-3 text-sm">
                        <li className="flex items-start gap-2">
                            <FaMapMarkerAlt className="text-[#5CAF90] mt-1" />
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
                        <FaFacebookF className="text-white bg-gray-600 p-2 rounded-md text-2xl cursor-pointer" />
                        <FaTwitter className="text-white bg-gray-600 p-2 rounded-md text-2xl cursor-pointer" />
                        <FaLinkedinIn className="text-white bg-gray-600 p-2 rounded-md text-2xl cursor-pointer" />
                        <FaInstagram className="text-white bg-gray-600 p-2 rounded-md text-2xl cursor-pointer" />
                    </div>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="border-t mt-6 py-4 text-center text-sm text-gray-500 flex flex-col md:flex-row justify-between items-center px-6 max-w-7xl mx-auto">
                <p>Copyright © Grabit all rights reserved. Powered by Grabit.</p>
                <div className="flex gap-2 mt-2 md:mt-0 px-2">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg"
                        alt="Visa"
                        className="w-10 ml-3"
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
