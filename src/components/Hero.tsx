import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowRight } from 'lucide-react';

const tags = [
    { label: 'Deep RL' },
    { label: 'Computer Vision' },
    { label: 'Generative AI' },
    { label: 'Control Theory' },
    { label: 'Full-Stack AI' },
];

export const Hero = () => {
    const scrollTo = (href: string) => {
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className="hero" id="home">
            <motion.div
                className="hero-layout"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
                <div className="hero-content">
                    <span className="hero-greeting">Hi, I'm</span>

                    <h1>
                        Yash Agarwal
                    </h1>

                    <p className="hero-role">
                        Co-founder & Lead AI Engineer at{' '}
                        <a href="https://myzenn.com" target="_blank" rel="noopener noreferrer">
                            MyZenn
                        </a>
                    </p>

                    <p className="hero-subtitle">
                        Undergraduate researcher at Jadavpur University working on
                        reinforcement learning, computer vision, and autonomous
                        decision-making systems.
                    </p>

                    <div className="hero-tags">
                        {tags.map((t) => (
                            <span
                                key={t.label}
                                className={`hero-tag ${t.accent ? 'hero-tag--accent' : ''}`}
                            >
                                {t.label}
                            </span>
                        ))}
                    </div>

                    <div className="hero-actions">
                        <a
                            href="https://github.com/yashagarwal-lab"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary"
                        >
                            <Github size={16} />
                            GitHub
                        </a>
                        <button className="btn btn-ghost" onClick={() => scrollTo('#experience')}>
                            View Work
                            <ArrowRight size={14} />
                        </button>

                        <span className="hero-divider" />

                        <a
                            href="https://linkedin.com/in/yashagarwal2004"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hero-social-link"
                            aria-label="LinkedIn"
                        >
                            <Linkedin size={18} />
                        </a>
                        <a
                            href="mailto:y2907ash@gmail.com"
                            className="hero-social-link"
                            aria-label="Email"
                        >
                            <Mail size={18} />
                        </a>
                    </div>
                </div>

                <div className="hero-profile">
                    <img src="/images/profile.png" alt="Yash Agarwal" />
                </div>
            </motion.div>
        </section>
    );
};
