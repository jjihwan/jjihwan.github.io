import { Publication } from '@/lib/types';

export const publications: Publication[] = [
  {
    title: 'FIFO-Diffusion: Generating Infinite Videos from Text without Training',
    authors: ['Jihwan Kim*', 'Junoh Kang*', 'Jinyoung Choi', 'Bohyung Han'],
    venue: 'NeurIPS 2024',
    year: 2024,
    thumbnail: '/images/fifo.png',
    links: {
      project: 'http://jjihwan.github.io/projects/FIFO-Diffusion',
      arxiv: 'https://arxiv.org/abs/2405.11473',
      code: 'https://github.com/jjihwan/FIFO-Diffusion_public'
    }
  },
  {
    title: 'Generating Animated Layouts as Structured Text Representations',
    authors: ['Yeonsang Shin*', 'Jihwan Kim*', 'Yumin Song', 'Kyungseung Lee', 'Hyunhee Chung', 'Taeyoung Na'],
    venue: 'CVPRW 2025 (AI4CC)',
    year: 2025,
    thumbnail: '/images/vaker.png',
    links: {
      project: 'https://yeonsangshin.github.io/projects/Vaker/',
      arxiv: 'https://arxiv.org/abs/2505.00975'
    }
  }
];
