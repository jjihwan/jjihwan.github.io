import SectionTitle from '@/components/ui/SectionTitle';
import Section from '@/components/ui/Section';
import type { Publication } from '@/lib/types';
import PublicationCard from '@/components/ui/PublicationCard';

interface PublicationsSectionProps {
  publications: Publication[];
}

export default function PublicationsSection({ publications }: PublicationsSectionProps) {
  return (
    <Section id="publications" className="scroll-mt-0">
      <SectionTitle id="publications">Publications</SectionTitle>
      <div className="space-y-4">
        {publications.map((pub, index) => (
          <PublicationCard key={index} publication={pub} />
        ))}
      </div>
    </Section>
  );
}
