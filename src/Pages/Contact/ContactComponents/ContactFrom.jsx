import React from "react";

const ContactFrom = () => {
    return (
        <section className="py-2 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                    
                    <div className="w-full h-[400px] rounded-xl overflow-hidden shadow">
                        <iframe
                            title="Google Map"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12085.35635752465!2d-38.48138323219992!3d-12.942231885666008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7160f92a1b69db9%3A0x84e93ab74ad14db4!2sSalvador%2C%20BA%2C%20Brazil!5e0!3m2!1sen!2sbr!4v1683923522507!5m2!1sen!2sbr"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>

                    
                    <div className="bg-white shadow rounded-xl p-6">
                        <form className="space-y-4">
                            <div>
                                <input
                                    type="text"
                                    placeholder="Full Name"
                                    className="input input-bordered w-full"
                                />
                            </div>
                            <div>
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className="input input-bordered w-full"
                                />
                            </div>
                            <div>
                                <input
                                    type="text"
                                    placeholder="Phone"
                                    className="input input-bordered w-full"
                                />
                            </div>
                            <div>
                                <textarea
                                    placeholder="Message"
                                    className="textarea textarea-bordered w-full h-32"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="btn bg-green-600 hover:bg-green-700 text-white border-none"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactFrom;
