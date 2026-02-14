import { CertificationItem } from '../types';

export const nptelCerts: CertificationItem[] = [
    {
        title: 'Machine Learning & Deep Learning — Fundamentals and Applications',
        issuer: 'IIT Guwahati',
        note: 'Elite + Gold Medal · Top 5% Topper',
        pdf: '/certs/nptel-ml-dl.pdf',
        logo: '/images/iit-guwahati.png',
        gold: true,
    },
    {
        title: 'Deep Learning for Computer Vision',
        issuer: 'IIT Hyderabad',
        note: 'CNN architectures, YOLO, SSD, GANs',
        pdf: '/certs/nptel-dl-cv.pdf',
        logo: '/images/iit-hyderabad.png',
        gold: false,
    },
];

export const oracleCerts: CertificationItem[] = [
    {
        title: 'Generative AI Professional',
        badge: '/certs/oracle-genai.jpg',
        date: 'Sep 2025',
    },
    {
        title: 'AI Vector Search Professional',
        badge: '/certs/oracle-vector.jpg',
        date: 'Oct 2025',
    },
    {
        title: 'Data Science Professional',
        badge: '/certs/oracle-datascience.jpg',
        date: 'Oct 2025',
    },
    {
        title: 'Multicloud Architect',
        badge: '/certs/oracle-multicloud.jpg',
        date: 'Oct 2025',
    },
    {
        title: 'DevOps Professional',
        badge: '/certs/oracle-devops.jpg',
        date: 'Oct 2025',
    },
];

export const googleCerts: CertificationItem[] = [
    {
        title: 'Develop GenAI Apps with Gemini and Streamlit',
        badge: '/certs/google-genai-apps.png',
        date: 'Jun 2025',
    },
    {
        title: 'Prompt Design in Vertex AI',
        badge: '/certs/google-prompt-design.png',
        date: 'Jun 2025',
    },
    {
        title: 'Explore Generative AI with the Vertex AI Gemini API',
        badge: '/certs/google-vertex-gemini.png',
        date: 'Jun 2025',
    },
    {
        title: 'Inspect Rich Documents with Gemini Multimodality',
        badge: '/certs/google-multimodality.png',
        date: 'Jun 2025',
    },
    {
        title: 'Build Real World AI Applications with Gemini and Imagen',
        badge: '/certs/google-gemini-imagen.png',
        date: 'May 2025',
    },
];

export const otherCerts: CertificationItem[] = [
    {
        title: 'AI Fundamentals — IBM SkillsBuild',
        badge: '/certs/ibm-granite.png',
        date: 'Jun 2025',
    },
    {
        title: 'Complete DS, ML & DL Bootcamp — Udemy',
        badge: '/certs/udemy-ds.jpg',
        date: '2025',
    },
    {
        title: 'Hack2skill Certificate',
        badge: '/certs/hack2skill.png',
        date: '2025',
    },
    {
        title: '1M1B Green Intern',
        badge: '/certs/1m1b-badge.jpg',
        date: 'Oct 2025',
    },
];

// UN Cert uses a slightly different structure in component, but fits standard logic if we adapt
export const unCerts = [
    {
        title: 'UN India — General Assembly Event',
        description: 'Selected as top debater to represent the forum at UN India offices, New Delhi',
        image: '/certs/un-event.jpg',
        pdf: '/certs/un-debate.pdf',
    },
];
