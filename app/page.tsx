import HeroSection from '@/components/sections/HeroSection';
import BioSection from '@/components/sections/BioSection';
import NewsSection from '@/components/sections/NewsSection';
import PublicationsSection from '@/components/sections/PublicationsSection';
import ExperienceSection from '@/components/sections/ExperienceSection';
import ContactSection from '@/components/sections/ContactSection';
import { ProfileJSON, EducationJSON, ExperienceJSON, NewsJSON, PublicationJSON } from '@/lib/types';

import profile from '@/components/data/profile.json';
import news from '@/components/data/news.json';
import publications from '@/components/data/publications.json';
import experience from '@/components/data/experience.json';
import education from '@/components/data/education.json';

export default function Home() {
   return (
     <main className="min-h-screen bg-zinc-50 font-sans">
       <HeroSection profile={profile as ProfileJSON} />
       <BioSection bioParagraphs={profile.bio} />
       <NewsSection news={news as NewsJSON[]} />
       <ExperienceSection experiences={experience as ExperienceJSON[]} />
       <PublicationsSection publications={publications as PublicationJSON[]} />
       <ContactSection socialLinks={profile.socialLinks as any[]} />
     </main>
   );
}

