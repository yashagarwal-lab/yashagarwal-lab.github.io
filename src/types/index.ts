import React from 'react';

export interface ExperienceItem {
    company: string;
    companyLink?: string;
    logo?: string;
    role: string;
    period: string;
    location: string;
    bullets: string[];
}

export interface ProjectItem {
    title: string;
    tech: string[];
    github: string;
    date: string;
    bullets: string[];
}

export interface CertificationItem {
    title: string;
    issuer?: string;
    note?: string;
    pdf?: string;
    gold?: boolean;
    logo?: string;
    badge?: string; // For Credly badges
    date?: string;
}

export interface EducationItem {
    university: string;
    degree: string;
    period: string;
    location: string;
    sgpa: string;
    coreCoursework: string[];
    mathCoursework: string[];
    logo?: string;
}

export interface SkillItem {
    name: string;
    highlighted?: boolean;
}

export interface SkillCategory {
    title: string;
    skills: SkillItem[];
}

export interface SocialLink {
    name: string;
    icon: React.ReactNode;
    url: string;
    label: string;
}

export interface AchievementItem {
    icon: React.ReactNode;
    color: string;
    title: string;
    description: string;
    // For featured achievements
    featured?: boolean;
    image?: string;
    caption?: string;
    date?: string;
}
