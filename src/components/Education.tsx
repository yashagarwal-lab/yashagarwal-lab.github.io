import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Calendar, TrendingUp } from 'lucide-react';

import { education } from '../data/education';

export const Education = () => {
    return (
        <section id="education">
            <motion.span
                className="section-label"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
            >
                Academic
            </motion.span>

            <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
            >
                Education
            </motion.h2>

            <motion.div
                className="education-card"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
            >
                <div className="education-icon">
                    <img src="/images/ju-logo.png" alt="Jadavpur University" style={{ width: '48px', height: '48px', objectFit: 'contain' }} />
                </div>

                <div>
                    <h3 style={{ fontSize: '1.2rem', color: 'var(--text-primary)', marginBottom: '0.2rem' }}>
                        {education.university}
                    </h3>
                    <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)' }}>
                        {education.degree}
                    </p>

                    <div className="education-meta">
                        <span><Calendar size={13} /> {education.period}</span>
                        <span><MapPin size={13} /> {education.location}</span>
                        <span><TrendingUp size={13} /> SGPA: {education.sgpa}</span>
                    </div>

                    <div className="coursework">
                        <h4>Core Coursework</h4>
                        <div className="coursework-tags">
                            {education.coreCoursework.map((c) => (
                                <span key={c} className="coursework-tag">{c}</span>
                            ))}
                        </div>
                    </div>

                    <div className="coursework" style={{ marginTop: '0.6rem' }}>
                        <h4>Mathematics</h4>
                        <div className="coursework-tags">
                            {education.mathCoursework.map((c) => (
                                <span key={c} className="coursework-tag">{c}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};
