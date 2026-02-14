import { motion } from 'framer-motion';
import { ExternalLink, Medal, FileText } from 'lucide-react';

import { nptelCerts, oracleCerts, googleCerts, otherCerts, unCerts } from '../data/certifications';

export const Certifications = () => {
    return (
        <section id="certifications">
            <motion.span
                className="section-label"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
            >
                Credentials
            </motion.span>

            <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
            >
                Certifications
            </motion.h2>

            {/* NPTEL — highest weightage, visual cards */}
            <motion.div
                className="cert-section"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
            >
                <div className="cert-section-header">
                    <h3>NPTEL Certifications</h3>
                </div>
                <div className="nptel-grid">
                    {nptelCerts.map((cert, i) => (
                        <motion.a
                            key={i}
                            href={cert.pdf}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`nptel-card ${cert.gold ? 'nptel-card--gold' : ''}`}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.35 }}
                        >
                            {cert.gold && (
                                <div className="nptel-gold-badge">
                                    <Medal size={14} />
                                    Gold Medal
                                </div>
                            )}
                            <div className="nptel-card-icon">
                                <img src={cert.logo} alt={cert.issuer} style={{ width: '48px', height: '48px', objectFit: 'contain' }} />
                            </div>
                            <h4>{cert.title}</h4>
                            <p className="nptel-issuer">{cert.issuer}</p>
                            <p className="nptel-note">{cert.note}</p>
                            <span className="nptel-view">
                                View Certificate <ExternalLink size={11} />
                            </span>
                        </motion.a>
                    ))}
                </div>
            </motion.div>

            {/* Oracle */}
            <motion.div
                className="cert-section"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.4 }}
            >
                <div className="cert-section-header">
                    <h3>
                        <img src="/images/oracle.png" alt="Oracle" className="provider-logo" />
                        Oracle Certified Professional
                    </h3>
                    <a href="https://www.credly.com/users/yashagarwal-lab" target="_blank" rel="noopener noreferrer" className="cert-verify-link">
                        Verify on Credly <ExternalLink size={12} />
                    </a>
                </div>
                <div className="cert-badge-grid cert-badge-grid--featured">
                    {oracleCerts.map((cert, i) => (
                        <motion.div
                            key={i}
                            className="cert-badge-card"
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.06, duration: 0.3 }}
                        >
                            <img src={cert.badge} alt={cert.title} className="cert-badge-img" />
                            <span className="cert-badge-title">{cert.title}</span>
                            <span className="cert-badge-date">{cert.date}</span>
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            {/* Google Cloud */}
            <motion.div
                className="cert-section"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15, duration: 0.4 }}
            >
                <div className="cert-section-header">
                    <h3>
                        <img src="/images/google.png" alt="Google Cloud" className="provider-logo" />
                        Google Cloud Skill Badges
                    </h3>
                    <a href="https://www.credly.com/users/yashagarwal-lab" target="_blank" rel="noopener noreferrer" className="cert-verify-link">
                        Verify on Credly <ExternalLink size={12} />
                    </a>
                </div>
                <div className="cert-badge-grid">
                    {googleCerts.map((cert, i) => (
                        <motion.div
                            key={i}
                            className="cert-badge-card"
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.06, duration: 0.3 }}
                        >
                            <img src={cert.badge} alt={cert.title} className="cert-badge-img" />
                            <span className="cert-badge-title">{cert.title}</span>
                            <span className="cert-badge-date">{cert.date}</span>
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            {/* UN */}
            <motion.div
                className="cert-section"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.4 }}
            >
                <div className="cert-section-header">
                    <h3>United Nations</h3>
                </div>
                {unCerts.map((cert, i) => (
                    <a
                        key={i}
                        href={cert.pdf}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="un-card"
                    >
                        <img src={cert.image} alt={cert.title} className="un-card-img" />
                        <div className="un-card-content">
                            <h4>{cert.title}</h4>
                            <p>{cert.description}</p>
                            <span className="nptel-view">
                                View Certificate <ExternalLink size={11} />
                            </span>
                        </div>
                    </a>
                ))}
            </motion.div>

            {/* Other Badges */}
            <motion.div
                className="cert-section"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.25, duration: 0.4 }}
            >
                <div className="cert-section-header">
                    <h3>Other Certifications</h3>
                </div>
                <div className="cert-badge-grid">
                    {otherCerts.map((cert, i) => (
                        <motion.div
                            key={i}
                            className="cert-badge-card"
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.06, duration: 0.3 }}
                        >
                            <img src={cert.badge} alt={cert.title} className="cert-badge-img" />
                            <span className="cert-badge-title">{cert.title}</span>
                            <span className="cert-badge-date">{cert.date}</span>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};
