import { motion } from 'framer-motion';

import { skillCategories } from '../data/skills';

export const Skills = () => {
    return (
        <section id="skills">
            <motion.span
                className="section-label"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
            >
                Toolkit
            </motion.span>

            <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
            >
                Technical Skills
            </motion.h2>

            <div className="skills-grid">
                {skillCategories.map((cat, i) => (
                    <motion.div
                        key={i}
                        className="skill-category"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.08, duration: 0.35 }}
                    >
                        <h3>{cat.title}</h3>
                        <div className="skill-tags">
                            {cat.skills.map((skill) => (
                                <span
                                    key={skill.name}
                                    className={`skill-tag ${skill.highlighted ? 'highlighted' : ''}`}
                                >
                                    {skill.name}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};
