import HeroSection from '@/components/sections/HeroSection';
import BioSection from '@/components/sections/BioSection';
import NewsSection from '@/components/sections/NewsSection';
import PublicationsSection from '@/components/sections/PublicationsSection';
import ExperienceSection from '@/components/sections/ExperienceSection';
import ContactSection from '@/components/sections/ContactSection';

import { profile } from '@/components/data/profile';
import { news } from '@/components/data/news';
import { publications } from '@/components/data/publications';
import { experience } from '@/components/data/experience';

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-50 font-sans">
      <HeroSection profile={profile} />
      <BioSection bioParagraphs={profile.bio} />
      <NewsSection news={news} />
      <ExperienceSection experiences={experience} />
      <PublicationsSection publications={publications} />
      <ContactSection socialLinks={profile.socialLinks} />
    </main>
  );
}
