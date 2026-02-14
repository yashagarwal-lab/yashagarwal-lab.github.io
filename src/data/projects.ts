import { ProjectItem } from '../types';

export const projects: ProjectItem[] = [
    {
        title: 'Project ATLAS: RL for Physical Dynamics & Control',
        tech: ['DDPG', 'Gymnasium', 'TensorFlow', 'Control Theory'],
        github: 'https://github.com/yashagarwal-lab/Project-ATLAS',
        date: 'August 2025 — Present',
        bullets: [
            'Formulated a continuous control task using a Deep Deterministic Policy Gradient (DDPG) agent to optimize complex physical layouts in high-dimensional action spaces.',
            'Engineered a custom physics-based simulation environment in Gymnasium, modeling non-linear fluid dynamics (wake effects) to train robust planning policies.',
            'Achieved 92.6% efficiency against heuristic baselines, demonstrating the efficacy of RL for spatial planning in physical systems.',
        ],
    },
    {
        title: 'Vision Transformer (ViT) from First Principles',
        tech: ['PyTorch', 'Computer Vision', 'Matrix Calculus'],
        github: 'https://github.com/yashagarwal-lab/vision-transformer-cifar10',
        date: 'July 2025',
        bullets: [
            'Implemented a Vision Transformer architecture from scratch using only PyTorch primitives to deconstruct Multi-Head Self-Attention and patch embeddings.',
            'Investigated signal propagation in deep networks by manually integrating LayerScale and Stochastic Depth, stabilizing convergence in data-constrained regimes.',
        ],
    },
];
