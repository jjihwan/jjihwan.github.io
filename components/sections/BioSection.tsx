import SectionTitle from '@/components/ui/SectionTitle';
import Section from '@/components/ui/Section';

interface BioSectionProps {
  bioParagraphs: string[];
}

export default function BioSection({ bioParagraphs }: BioSectionProps) {
  return (
    <Section id="about">
      {/* <SectionTitle id="about">About</SectionTitle> */}
      <div className="space-y-4 text-zinc-700 leading-relaxed">
        {bioParagraphs.map((paragraph, index) => (
          <p key={index} className="text-base md:text-lg" dangerouslySetInnerHTML={{ __html: paragraph }} />
        ))}
      </div>
    </Section>
  );
}
