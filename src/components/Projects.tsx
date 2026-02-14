import { motion } from 'framer-motion';
import { Github } from 'lucide-react';

import { projects } from '../data/projects';

export const Projects = () => {
    return (
        <section id="research">
            <motion.span
                className="section-label"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
            >
                Research
            </motion.span>

            <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
            >
                Independent Research & Development
            </motion.h2>

            <div className="projects-grid">
                {projects.map((project, i) => (
                    <motion.div
                        key={i}
                        className="project-card"
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1, duration: 0.4 }}
                    >
                        <div className="project-header">
                            <h3 className="project-title">{project.title}</h3>
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="project-link"
                                aria-label="View on GitHub"
                            >
                                <Github size={18} />
                            </a>
                        </div>

                        <div className="project-tech">
                            {project.tech.map((t) => (
                                <span key={t} className="tech-tag">{t}</span>
                            ))}
                        </div>

                        <ul className="project-bullets">
                            {project.bullets.map((b, j) => (
                                <li key={j}>{b}</li>
                            ))}
                        </ul>

                        <div className="project-date">{project.date}</div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};
