import { Globe, Trophy, Target, Zap } from 'lucide-react';
import { AchievementItem } from '../types';

export const achievements: AchievementItem[] = [
    {
        icon: <Globe size={18} />,
        color: '#eff6ff',
        title: 'UN India — Selected Panelist',
        description: 'Chosen as top debater to represent the forum at UN India offices, New Delhi',
    },
    {
        icon: <Trophy size={18} />,
        color: '#fef3c7',
        title: 'SRIJAN 2025 — JU Tech Fest',
        description: '5th Place, Data Drift ML Competition · Finalist in StratEdgeX & Ace the Case',
    },
    {
        icon: <Target size={18} />,
        color: '#f0fdf4',
        title: 'WBJEE 2023 — Rank 902',
        description: 'Top 0.7% among 125,000+ candidates',
    },
    {
        icon: <Zap size={18} />,
        color: '#eff6ff',
        title: 'JEE Mains 2025 — 98th Percentile',
        description: 'National-level engineering entrance examination',
    },
    {
        icon: <Target size={18} />,
        color: '#faf5ff',
        title: 'BITSAT 2023 — Score 267',
        description: 'BITS Pilani Scholastic Aptitude Test',
    },
];
