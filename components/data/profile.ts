import { Profile } from '@/lib/types';

export const profile: Profile = {
  name: 'Jihwan Kim',
  photo: '/images/profile.jpeg',
  position: 'Student Researcher',
  affiliation: 'Google DeepMind / Seoul National University',
  location: 'Seoul, South Korea',
  email: 'kjh26720@snu.ac.kr',
  bio: [
    'I am a Student Researcher at <a href="https://deepmind.google/" target="_blank" rel="noopener noreferrer" class="text-zinc-900 hover:text-zinc-700 underline">Google DeepMind</a> working with <a href="https://boqinggong.github.io/index.html" target="_blank" rel="noopener noreferrer" class="text-zinc-900 hover:text-zinc-700 underline">Prof. Boqing Gong</a> and <a href="https://faculty.ucmerced.edu/mhyang/" target="_blank" rel="noopener noreferrer" class="text-zinc-900 hover:text-zinc-700 underline">Prof. Ming-Hsuan Yang</a>. I\'m also a first-year graduate student in <a href="https://gsai.snu.ac.kr/" target="_blank" rel="noopener noreferrer" class="text-zinc-900 hover:text-zinc-700 underline">Interdisciplinary Program in Artificial Intelligence</a> at Seoul National University, advised by <a href="https://cv.snu.ac.kr/index.php/~bhhan/" target="_blank" rel="noopener noreferrer" class="text-zinc-900 hover:text-zinc-700 underline">Prof. Bohyung Han</a>.',
    'Previously, I completed my undergraduate studies in <a href="https://ece.snu.ac.kr/" target="_blank" rel="noopener noreferrer" class="text-zinc-900 hover:text-zinc-700 underline">Department of Electrical and Computer Engineering</a> at SNU, where I also conducted research at CVLab on video generation via diffusion models.',
    'My research interests include diffusion models, world models, and vision-language models.'
  ],
  quickLinks: [
    {
      label: 'CV',
      url: '/files/cv.pdf'
    },
  ],
  socialLinks: [
    {
      platform: 'email',
      url: 'mailto:kjh26720@snu.ac.kr',
      label: 'Email'
    },
    {
      platform: 'twitter',
      url: 'https://twitter.com/jji_hwannn',
      label: 'Twitter'
    },
    {
      platform: 'linkedin',
      url: 'https://www.linkedin.com/in/jjihwan',
      label: 'LinkedIn'
    },
    {
      platform: 'github',
      url: 'https://github.com/jjihwan',
      label: 'GitHub'
    },
    {
      platform: 'google-scholar',
      url: 'https://scholar.google.co.kr/citations?user=QmvZVFQAAAAJ&hl=ko&oi=sra',
      label: 'Google Scholar'
    }
  ]
};
