import React from 'react';
import { Book, Mic2 } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="py-24 bg-white text-spiritual-black relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{ backgroundImage: `radial-gradient(circle at 2px 2px, #D4AF37 1px, transparent 0)`, backgroundSize: '40px 40px' }} />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="section-title text-black"
                >
                    ABOUT THE INHERITANCE
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 mt-16 text-center md:text-left">
                    {/* Vision */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="group p-8 bg-gray-50 rounded-3xl border border-transparent hover:border-gold/20 transition-all duration-500"
                    >
                        <div className="w-16 h-16 bg-gold/10 rounded-2xl flex items-center justify-center mb-6 mx-auto md:mx-0 group-hover:scale-110 transition-transform">
                            <Book className="w-8 h-8 text-gold" />
                        </div>
                        <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                        <p className="text-gray-600 leading-relaxed text-lg">
                            The Inheritance is more than an album—it's a movement of worship
                            calling believers back to the promises of God. Through powerful
                            worship and biblical truth, we gather to remember what Christ
                            has secured for us.
                        </p>
                    </motion.div>

                    {/* Recording */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="group p-8 bg-gray-50 rounded-3xl border border-transparent hover:border-gold/20 transition-all duration-500"
                    >
                        <div className="w-16 h-16 bg-gold/10 rounded-2xl flex items-center justify-center mb-6 mx-auto md:mx-0 group-hover:scale-110 transition-transform">
                            <Mic2 className="w-8 h-8 text-gold" />
                        </div>
                        <h3 className="text-2xl font-bold mb-4">The Recording</h3>
                        <p className="text-gray-600 leading-relaxed text-lg">
                            Join us for a live worship experience as we record this prophetic
                            album. Your voice, your worship, and your presence will be part
                            of this lasting testimony of faith.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
