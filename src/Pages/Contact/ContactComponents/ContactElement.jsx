import React from "react";
import { Mail, Globe, Phone, MapPin, Smartphone } from "lucide-react";
import SectionTitle from "../../../Components/SharedComponents/SectionTitle";

const ContactElement = () => {
    return (
        <section className="py-8 bg-white">
            <div className="max-w-6xl mx-auto text-center px-6">
            
                <div className="flex items-center justify-center mb-8"><SectionTitle title={'Get In '} colorTitle={'Touch'}></SectionTitle></div>
                <p className="text-gray-500 mb-10 cts">
                    Please select a topic below related to your inquiry. If you don’t find
                    what you need, fill out our contact form.
                </p>

           
                <div className="grid md:grid-cols-3 gap-6">
                    
                    <div className="bg-gray-50 p-8 rounded-xl shadow-sm hover:shadow-2xl transition">
                        <div className="flex justify-center mb-4">
                            <div className="bg-gray-700 text-white p-4 rounded-lg">
                                <Mail className="w-6 h-6" />
                            </div>
                        </div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-3">
                            Mail & Website
                        </h3>
                        <div className="flex justify-center items-center text-gray-600 gap-2 mb-2">
                            <Mail size={16} />
                            <span>mail.example@gmail.com</span>
                        </div>
                        <div className="flex justify-center items-center text-gray-600 gap-2">
                            <Globe size={16} />
                            <span>www.yourdomain.com</span>
                        </div>
                    </div>

                  
                    <div className="bg-gray-50 p-8 rounded-xl shadow-sm hover:shadow-2xl transition">
                        <div className="flex justify-center mb-4">
                            <div className="bg-gray-700 text-white p-4 rounded-lg">
                                <Smartphone className="w-6 h-6" />
                            </div>
                        </div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-3">
                            Contact
                        </h3>
                        <div className="flex justify-center items-center text-gray-600 gap-2 mb-2">
                            <Phone size={16} />
                            <span>(+91)-9876XXXXXX</span>
                        </div>
                        <div className="flex justify-center items-center text-gray-600 gap-2">
                            <Phone size={16} />
                            <span>(+91)-987654XXXX</span>
                        </div>
                    </div>

                  
                    <div className="bg-gray-50 p-8 rounded-xl shadow-sm hover:shadow-2xl transition">
                        <div className="flex justify-center mb-4">
                            <div className="bg-gray-700 text-white p-4 rounded-lg">
                                <MapPin className="w-6 h-6" />
                            </div>
                        </div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-3">
                            Address
                        </h3>
                        <div className="flex justify-center items-center text-gray-600 gap-2 text-center">
                            <MapPin size={37} />
                            <span>
                                Ruami Mello Moraes Filho, 987 – Salvador – MA, 40352, Brazil.
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactElement;
