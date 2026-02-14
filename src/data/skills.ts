import { SkillCategory } from '../types';

export const skillCategories: SkillCategory[] = [
    {
        title: 'Programming Languages',
        skills: [
            { name: 'Python', highlighted: true },
            { name: 'C++', highlighted: true },
            { name: 'Verilog', highlighted: true },
            { name: 'SQL' },
            { name: 'MATLAB' },
        ],
    },
    {
        title: 'ML & Robotics',
        skills: [
            { name: 'PyTorch (Custom Kernels)', highlighted: true },
            { name: 'Gymnasium', highlighted: true },
            { name: 'TensorFlow', highlighted: true },
            { name: 'Keras' },
            { name: 'NumPy' },
            { name: 'Pandas' },
            { name: 'Scikit-learn' },
        ],
    },
    {
        title: 'Mathematical Foundations',
        skills: [
            { name: 'Linear Algebra', highlighted: true },
            { name: 'Probability Theory', highlighted: true },
            { name: 'Stochastic Processes' },
            { name: 'Control Theory' },
            { name: 'Digital Signal Processing' },
        ],
    },
    {
        title: 'Developer Tools',
        skills: [
            { name: 'Git / GitHub' },
            { name: 'Docker' },
            { name: 'Linux (Arch)' },
            { name: 'MLflow' },
            { name: 'VS Code' },
        ],
    },
    {
        title: 'Research Areas',
        skills: [
            { name: 'Deep Reinforcement Learning', highlighted: true },
            { name: 'Computer Vision', highlighted: true },
            { name: 'Generative AI', highlighted: true },
            { name: 'Control Theory', highlighted: true },
        ],
    },
];
