import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [showScrollTop, setShowScrollTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
            setShowScrollTop(window.scrollY > 500);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Event', href: '#event' },
        { name: 'Location', href: '#location' },
        { name: 'Donation', href: '#donation' },
        { name: 'Contact', href: '#contact' },
    ];

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <>
            <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-black/95 backdrop-blur-md py-3 md:py-4 border-b border-gold/10' : 'bg-transparent py-4 md:py-8'
                }`}>
                <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
                    <a href="#" className="flex items-center gap-2 md:gap-3 text-lg md:text-2xl font-bold font-heading tracking-tighter">
                        <img src="/logo.png" alt="Logo" className="h-6 md:h-8 w-auto" />
                        <div className="flex flex-col md:flex-row md:items-baseline md:gap-2">
                            <span>THE <span className="text-gold">INHERITANCE</span></span>
                            <span className="text-[10px] md:text-xs text-white/60 font-medium tracking-widest uppercase -mt-1 md:mt-0">Shalom Family</span>
                        </div>
                    </a>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-10">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-sm font-medium tracking-widest uppercase hover:text-gold transition-colors block relative group overflow-hidden"
                            >
                                {link.name}
                                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-gold -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
                            </a>
                        ))}
                        <a href="#donation" className="btn-gold !px-6 !py-2 text-sm !rounded-md">
                            DONATE
                        </a>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button className="md:hidden text-gold p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        {isMenuOpen ? <X className="w-6 h-6 md:w-8 md:h-8" /> : <Menu className="w-6 h-6 md:w-8 md:h-8" />}
                    </button>
                </div>

                {/* Mobile Nav Overlay */}
                <AnimatePresence>
                    {isMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, x: '100%' }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: '100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            className="fixed inset-0 bg-black z-40 flex flex-col items-center justify-center gap-8 text-2xl font-heading"
                        >
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsMenuOpen(false)}
                                    className="hover:text-gold transition-colors tracking-widest"
                                >
                                    {link.name}
                                </a>
                            ))}
                            <a
                                href="#donation"
                                onClick={() => setIsMenuOpen(false)}
                                className="btn-gold !rounded-none w-full max-w-[200px]"
                            >
                                DONATE
                            </a>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>

            {/* Back to Top Button */}
            <AnimatePresence>
                {showScrollTop && (
                    <motion.button
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        onClick={scrollToTop}
                        className="fixed bottom-8 right-8 z-50 w-12 h-12 bg-gold text-black rounded-full flex items-center justify-center shadow-lg hover:bg-gold-light transition-colors"
                    >
                        <ArrowUp className="w-6 h-6" />
                    </motion.button>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
