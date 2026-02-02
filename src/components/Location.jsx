import React from 'react';
import { MapPin, Navigation } from 'lucide-react';
import { motion } from 'framer-motion';

const Location = () => {
    return (
        <section id="location" className="py-24 bg-white text-spiritual-black">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="section-title text-black"
                >
                    FIND US HERE
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="max-w-5xl mx-auto mt-12 overflow-hidden rounded-3xl shadow-2xl border-4 border-white"
                >
                    <div className="bg-gray-50 p-6 flex flex-col md:flex-row items-center justify-between gap-6 border-b">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center">
                                <MapPin className="text-gold w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold">ADEPR Rehoboth (GODIYALI)</h3>
                                <p className="text-gray-500">Address: 24P4+HPV, Kigali</p>
                            </div>
                        </div>

                        <a
                            href="https://www.google.com/maps/dir/?api=1&destination=-1.9635125,30.1067969"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-gold whitespace-nowrap"
                        >
                            <Navigation className="w-5 h-5" />
                            OPEN IN GOOGLE MAPS
                        </a>
                    </div>

                    <div className="aspect-video w-full">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4527.446362893336!2d30.1067969!3d-1.9635125000000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca4258ed8e797%3A0x914d56cfbeccf7c8!2s24P4%2BHPV%2C%20Kigali!5e1!3m2!1sen!2srw!4v1770044861634!5m2!1sen!2srw"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            title="Event Location"
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Location;
