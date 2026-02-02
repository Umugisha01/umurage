import React from 'react';
import { ChevronDown, Calendar, Heart, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
            {/* Background with parallax effect placeholder */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 hover:scale-105"
                style={{
                    backgroundImage: `url('/hero-bg.jpg')`,
                    filter: 'brightness(0.3) blur(4px)'
                }}
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/60" />

            {/* Content */}
            <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-6 md:mb-8"
                >
                    <img src="/logo.png" alt="Shalom Family" className="h-12 md:h-16 mx-auto mb-4 md:mb-6 opacity-80 hover:opacity-100 transition-opacity" />
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-4xl sm:text-6xl md:text-8xl font-heading font-extrabold mb-4 tracking-tighter leading-tight"
                >
                    THE <span className="text-gold shine-effect">INHERITANCE</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="text-lg sm:text-xl md:text-2xl font-light mb-6 md:mb-8 text-white/90"
                >
                    Live Album Recording
                </motion.p>

                <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 1, delay: 0.8 }}
                    className="h-[1px] md:h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent mb-6 md:mb-8"
                />

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1 }}
                    className="text-base sm:text-lg md:text-xl italic mb-8 md:mb-12 text-white/80 leading-relaxed font-light px-2"
                >
                    "The Inheritance is a worship expression calling God's people
                    to remember, receive, and walk in what He has prepared
                    for them through Christ."
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.3 }}
                    className="flex flex-col md:flex-row items-center justify-center gap-6"
                >
                    <a href="#event" className="btn-gold group">
                        <Calendar className="w-5 h-5 transition-transform group-hover:scale-110" />
                        SAVE THE DATE
                    </a>
                    <a href="#donation" className="px-8 py-3 border border-white/30 hover:border-gold hover:text-gold rounded-full transition-all duration-300 flex items-center gap-2 backdrop-blur-sm">
                        <Heart className="w-5 h-5 text-red-500" />
                        DONATE NOW
                    </a>
                    <a href="#location" className="px-8 py-3 border border-white/30 hover:border-gold hover:text-gold rounded-full transition-all duration-300 flex items-center gap-2 backdrop-blur-sm">
                        <MapPin className="w-5 h-5 text-gold" />
                        GET DIRECTIONS
                    </a>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gold/60"
            >
                <ChevronDown className="w-8 h-8" />
            </motion.div>
        </section>
    );
};

export default Hero;
