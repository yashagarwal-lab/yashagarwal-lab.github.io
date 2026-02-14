import { motion } from 'framer-motion';


import { achievements } from '../data/achievements';

export const Achievements = () => {
    return (
        <section id="achievements">
            <motion.span
                className="section-label"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
            >
                Recognition
            </motion.span>

            <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
            >
                Achievements
            </motion.h2>

            {/* Featured UN photo */}
            <motion.div
                className="achievement-featured"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45 }}
            >
                <img src="/images/un-panelist.png" alt="Yash Agarwal speaking at UN India, New Delhi" />
                <div className="achievement-featured-caption">
                    <span>UN India, New Delhi · 14 October 2025</span>
                    <p>Panelist at "Building India's Climate Dividend" — 1M1B × United Nations India</p>
                </div>
            </motion.div>

            <div className="certs-grid">
                {achievements.map((item, i) => (
                    <motion.div
                        key={i}
                        className="cert-item"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.08, duration: 0.3 }}
                    >
                        <div
                            className="cert-icon"
                            style={{ background: item.color, color: 'var(--text-secondary)' }}
                        >
                            {item.icon}
                        </div>
                        <div className="cert-content">
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};
