import { Education } from '@/lib/types';

export const education: Education[] = [
  {
    degree: 'M.S. in Interdisciplinary Program in Artificial Intelligence',
    institution: 'Seoul National University',
    dateRange: {
      start: 'Sep. 2024',
      end: 'Present'
    }
  },
  {
    degree: 'B.S. in Electrical & Computer Engineering',
    institution: 'Seoul National University',
    dateRange: {
      start: 'Mar. 2019',
      end: 'Feb. 2024'
    },
    details: [
      'Graduated Summa Cum Laude',
      'Conducted research at CVLab on video generation'
    ]
  }
];
