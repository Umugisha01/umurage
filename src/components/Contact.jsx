import React from 'react';
import { Phone, MessageCircle, Instagram, Youtube } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
    return (
        <section id="contact" className="py-24 bg-white text-spiritual-black border-t border-gray-100">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="section-title text-black"
                >
                    GET IN TOUCH
                </motion.div>

                <div className="max-w-4xl mx-auto">
                    {/* Main Contact Card */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
                        viewport={{ once: true }}
                        className="card-gold bg-gray-50 border-gray-200 text-center p-12 mb-20"
                    >
                        <div className="w-20 h-20 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
                            <Phone className="w-10 h-10 text-gold" />
                        </div>
                        <h3 className="text-sm tracking-[0.3em] font-bold text-gray-500 mb-2">CALL OR WHATSAPP</h3>
                        <p className="text-4xl font-extrabold mb-10">+250 783 850 464</p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                            <a href="tel:+250783850464" className="btn-gold w-full sm:w-auto">
                                <Phone className="w-5 h-5" />
                                CALL NOW
                            </a>
                            <a href="https://wa.me/250783850464" target="_blank" rel="noopener noreferrer" className="px-10 py-3 border-2 border-green-500 text-green-600 hover:bg-green-500 hover:text-white rounded-full font-bold transition-all duration-300 w-full sm:w-auto flex items-center justify-center gap-2">
                                <MessageCircle className="w-5 h-5" />
                                WHATSAPP
                            </a>
                        </div>

                        <p className="mt-10 text-gray-400 max-w-md mx-auto italic">
                            "For inquiries, prayer requests, or event information"
                        </p>
                    </motion.div>

                    {/* Social Media */}
                    <div className="text-center">
                        <motion.h3
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            viewport={{ once: true }}
                            className="text-gold font-heading tracking-[0.2em] font-bold mb-8"
                        >
                            STAY CONNECTED
                        </motion.h3>

                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            viewport={{ once: true }}
                            className="text-gray-500 mb-12"
                        >
                            Follow us for updates, worship content, and event announcements
                        </motion.p>

                        <div className="flex justify-center gap-8">
                            {[
                                { icon: <Instagram className="w-8 h-8" />, label: "Instagram", url: "https://www.instagram.com/desstudios250/", handle: "@desstudios250" },
                                { icon: <Youtube className="w-8 h-8" />, label: "YouTube", url: "https://youtube.com/@shalomgabrisd.e.sstudios7450", handle: "Shalom Gabriel | D.E.S Studios" }
                            ].map((social, index) => (
                                <motion.a
                                    key={index}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5 + index * 0.1 }}
                                    whileHover={{ y: -5, scale: 1.05 }}
                                    viewport={{ once: true }}
                                    className="flex flex-col items-center group"
                                >
                                    <div className="w-20 h-20 rounded-full border-2 border-gold/30 flex items-center justify-center mb-4 group-hover:border-gold group-hover:bg-gold/5 transition-all duration-300">
                                        <div className="text-gold group-hover:scale-110 transition-transform">
                                            {social.icon}
                                        </div>
                                    </div>
                                    <span className="font-bold block group-hover:text-gold transition-colors">{social.label}</span>
                                    <span className="text-xs text-gray-400 mt-1">{social.handle}</span>
                                </motion.a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
