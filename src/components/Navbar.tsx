import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Experience', href: '#experience' },
    { label: 'Research', href: '#research' },
    { label: 'Skills', href: '#skills' },
    { label: 'Education', href: '#education' },
    { label: 'Credentials', href: '#certifications' },
];

export const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 30);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const scrollTo = (href: string) => {
        setMobileOpen(false);
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="navbar-inner">
                <div className="nav-logo" onClick={() => scrollTo('#home')}>
                    <div className="nav-logo-icon">YA</div>
                    <span>Yash Agarwal</span>
                </div>

                <div className="nav-links">
                    {navItems.map((item) => (
                        <button
                            key={item.label}
                            className="nav-link"
                            onClick={() => scrollTo(item.href)}
                        >
                            {item.label}
                        </button>
                    ))}
                    <button
                        className="nav-link nav-cta"
                        onClick={() => scrollTo('#contact')}
                    >
                        Contact
                    </button>
                </div>

                <button
                    className="nav-mobile-toggle"
                    onClick={() => setMobileOpen(!mobileOpen)}
                    aria-label="Toggle menu"
                >
                    {mobileOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        className="nav-mobile-menu open"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                    >
                        {navItems.map((item) => (
                            <button
                                key={item.label}
                                className="nav-link"
                                onClick={() => scrollTo(item.href)}
                            >
                                {item.label}
                            </button>
                        ))}
                        <button
                            className="nav-link"
                            onClick={() => scrollTo('#contact')}
                        >
                            Contact
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};
