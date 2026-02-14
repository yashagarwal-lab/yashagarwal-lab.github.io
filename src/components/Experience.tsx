import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

import { experiences } from '../data/experience';

export const Experience = () => {
    return (
        <section id="experience">
            <motion.span
                className="section-label"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
            >
                Career
            </motion.span>

            <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
            >
                Experience
            </motion.h2>

            <div className="timeline">
                {experiences.map((exp, i) => (
                    <motion.div
                        key={i}
                        className="timeline-item"
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.08, duration: 0.4 }}
                    >
                        <div className="timeline-card">
                            <div className="timeline-header">
                                <div>
                                    <div className="timeline-company">
                                        {exp.logo && (
                                            <img src={exp.logo} alt={exp.company} className="company-logo" />
                                        )}
                                        <span>{exp.company}</span>
                                        {exp.companyLink && (
                                            <a href={exp.companyLink} target="_blank" rel="noopener noreferrer" style={{ marginLeft: 6 }}>
                                                <ExternalLink size={13} style={{ verticalAlign: 'middle' }} />
                                            </a>
                                        )}
                                    </div>
                                    <div className="timeline-role">{exp.role}</div>
                                    <div className="timeline-location">{exp.location}</div>
                                </div>
                                <span className="timeline-period">{exp.period}</span>
                            </div>
                            <ul className="timeline-bullets">
                                {exp.bullets.map((b, j) => (
                                    <li key={j}>{b}</li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};
