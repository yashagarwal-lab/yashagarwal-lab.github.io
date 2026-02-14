import { Linkedin, Mail } from 'lucide-react';
import { SocialLink } from '../types';

export const socialLinks: SocialLink[] = [
    {
        name: 'LinkedIn',
        icon: <Linkedin size={16} />,
        url: 'https://www.linkedin.com/in/yashagarwal2004/',
        label: 'yashagarwal2004',
    },
    {
        name: 'Email',
        icon: <Mail size={16} />,
        url: 'mailto:y2907ash@gmail.com',
        label: 'y2907ash@gmail.com',
    },
];
