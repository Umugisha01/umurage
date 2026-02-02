import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
    return (
        <footer className="py-12 bg-spiritual-black text-white border-t border-gold/10">
            <div className="container mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center"
                >
                    <img src="/logo.png" alt="Shalom Family" className="h-12 mb-6 opacity-60" />

                    <h2 className="text-xl font-heading font-bold tracking-widest mb-2">
                        THE <span className="text-gold">INHERITANCE</span>
                    </h2>

                    <p className="text-white/40 text-sm mb-8 font-light">
                        Shalom Family Presents | D.E.S Studios
                    </p>

                    <div className="flex gap-8 mb-8 text-sm text-white/60">
                        <a href="#" className="hover:text-gold transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-gold transition-colors">Terms of Service</a>
                    </div>

                    <p className="text-white/20 text-xs uppercase tracking-widest">
                        THE INHERITANCE © 2026 | All Rights Reserved
                    </p>
                </motion.div>
            </div>
        </footer>
    );
};

export default Footer;
