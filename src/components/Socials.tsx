import { motion } from 'framer-motion';


import { socialLinks } from '../data/socials';

export const Socials = () => {
    return (
        <section id="contact" className="connect-section">
            <motion.span
                className="section-label"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
            >
                Connect
            </motion.span>

            <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
            >
                Get in Touch
            </motion.h2>

            <div className="connect-grid">
                {socialLinks.map((link, i) => (
                    <motion.a
                        key={i}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="connect-card"
                        initial={{ opacity: 0, y: 8 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.06, duration: 0.3 }}
                    >
                        {link.icon}
                        <div>
                            <div className="connect-label">{link.name}</div>
                            <div className="connect-sublabel">{link.label}</div>
                        </div>
                    </motion.a>
                ))}
            </div>
        </section>
    );
};
