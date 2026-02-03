import React, { useState } from 'react';
import { Landmark, Smartphone, Copy, Check, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Donation = () => {
    const [copiedId, setCopiedId] = useState(null);

    const handleCopy = (text, id) => {
        navigator.clipboard.writeText(text);
        setCopiedId(id);
        setTimeout(() => setCopiedId(null), 2000);
    };

    const paymentDetails = [
        {
            type: "BANK TRANSFER",
            icon: <Landmark className="w-10 h-10 mb-4 text-gold" />,
            items: [
                { label: "Bank", value: "Equity Bank" },
                { label: "Account Name", value: "Emmanuel Shaloom DUSHIME" },
                { label: "Account Number", value: "4003100999954" }
            ],
            copyValue: "4003100999954",
            copyLabel: "COPY ACCOUNT DETAILS",
            id: "bank"
        },
        {
            type: "MOBILE MONEY",
            icon: <Smartphone className="w-10 h-10 mb-4 text-gold" />,
            items: [
                { label: "MTN Mobile Money", value: "+250 796 323 149" },
                { label: "Names", value: "Esther Bien Aimée BARADUKUNDA" }
            ],
            copyValue: "+250796323149",
            copyLabel: "COPY MOBILE NUMBER",
            id: "momo",
            dialCode: "*182*1*1*0796323149#"
        }
    ];

    return (
        <section id="donation" className="py-24 bg-gradient-to-b from-spiritual-black to-spiritual-dark text-white overflow-hidden">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="section-title"
                >
                    PARTNER WITH US
                </motion.div>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    viewport={{ once: true }}
                    className="text-center text-white/70 max-w-2xl mx-auto -mt-6 mb-16 text-lg"
                >
                    Support the recording of this worship album and help spread
                    the message of our inheritance in Christ.
                </motion.p>

                <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    {paymentDetails.map((detail, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index === 0 ? -30 : 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="relative p-10 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm group hover:border-gold/30 transition-all duration-500"
                        >
                            <div className="flex flex-col items-center mb-8">
                                {detail.icon}
                                <h3 className="text-xl font-bold tracking-[0.2em]">{detail.type}</h3>
                            </div>

                            <div className="space-y-6 mb-10">
                                {detail.items.map((item, i) => (
                                    <div key={i} className="border-b border-white/10 pb-4 last:border-0">
                                        <p className="text-gold/60 text-xs uppercase tracking-widest mb-1">{item.label}</p>
                                        <p className="text-xl font-medium">{item.value}</p>
                                    </div>
                                ))}
                            </div>

                            <button
                                onClick={() => handleCopy(detail.copyValue, detail.id)}
                                className="w-full py-4 border border-gold hover:bg-gold hover:text-black transition-all duration-300 rounded-xl flex items-center justify-center gap-3 font-bold relative overflow-hidden group"
                            >
                                <AnimatePresence mode="wait">
                                    {copiedId === detail.id ? (
                                        <motion.div
                                            key="check"
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            exit={{ scale: 0 }}
                                            className="flex items-center gap-2"
                                        >
                                            <Check className="w-5 h-5" />
                                            COPIED!
                                        </motion.div>
                                    ) : (
                                        <motion.div
                                            key="copy"
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            exit={{ scale: 0 }}
                                            className="flex items-center gap-2"
                                        >
                                            <Copy className="w-5 h-5 group-hover:scale-110 transition-transform" />
                                            {detail.copyLabel}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </button>

                            {detail.dialCode && (
                                <a
                                    href={`tel:${detail.dialCode}`}
                                    className="w-full py-4 border border-gold hover:bg-gold hover:text-black transition-all duration-300 rounded-xl flex items-center justify-center gap-3 font-bold mt-4"
                                >
                                    <Phone className="w-5 h-5" />
                                    CALL NOW
                                </a>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Donation;
