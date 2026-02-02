import React from 'react';
import { Calendar, Clock, MapPin, Mic2, Music, Ticket } from 'lucide-react';
import { motion } from 'framer-motion';

const EventDetails = () => {
    const details = [
        { icon: <Calendar className="w-8 h-8" />, label: "DATE", info: "17th February 2026" },
        { icon: <Clock className="w-8 h-8" />, label: "TIME", info: "18:00 (6:00 PM)" },
        { icon: <MapPin className="w-8 h-8" />, label: "VENUE", info: "ADEPR Rehoboth", subInfo: "GODIYALI" },
        { icon: <Mic2 className="w-8 h-8" />, label: "PRESENTED BY", info: "Shalom Family" },
        { icon: <Music className="w-8 h-8" />, label: "ALBUM", info: '"THE INHERITANCE"', subInfo: "Live Recording" },
        { icon: <Ticket className="w-8 h-8" />, label: "ENTRANCE", info: "FREE", subInfo: "All Welcome" },
    ];

    return (
        <section id="event" className="py-24 bg-spiritual-black text-white border-y border-gold/10">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="section-title"
                >
                    EVENT DETAILS
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
                    {details.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="card-gold group"
                        >
                            <div className="flex flex-col items-center text-center">
                                <div className="mb-4 text-gold group-hover:scale-110 transition-transform duration-300">
                                    {item.icon}
                                </div>
                                <h4 className="text-gold font-heading text-sm tracking-widest mb-2">{item.label}</h4>
                                <p className="text-2xl font-bold mb-1">{item.info}</p>
                                {item.subInfo && <p className="text-white/60 font-light">{item.subInfo}</p>}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default EventDetails;
