import React from 'react';
import { Calendar, Clock, MapPin, Mic2, Music, Ticket, CheckCircle2 } from 'lucide-react';
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
        <section id="event" className="py-24 bg-spiritual-black text-white border-y border-gold/10 overflow-hidden">
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

                {/* Booking CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    viewport={{ once: true }}
                    className="mt-20 text-center"
                >
                    <div className="bg-gold/5 border border-gold/20 p-8 md:p-12 rounded-[2.5rem] max-w-4xl mx-auto backdrop-blur-sm relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-110 transition-transform duration-700">
                            <CheckCircle2 className="w-32 h-32 text-gold" />
                        </div>

                        <h3 className="text-2xl md:text-3xl font-bold mb-6">Want to ensure you don't miss it?</h3>
                        <p className="text-white/70 text-lg mb-10 max-w-2xl mx-auto font-light">
                            Schedule this event directly in your calendar.
                        </p>

                        <a
                            href="https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=NjhwbTRlOWljbGgzY2I5azY5Z2o4YjlrYzloajBiOXA2Y3BqaWJiM2NsaGo0ZTFwY2xnamlwOW42ayBibmVtYWNocmlzdGlhbkBt&tmsrc=bnemachristian%40gmail.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-gold !inline-flex !px-12 !py-5 text-xl relative z-10 hover:shadow-gold/40 shadow-2xl"
                        >
                            <Calendar className="w-6 h-6" />
                            BOOK NOW
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default EventDetails;
