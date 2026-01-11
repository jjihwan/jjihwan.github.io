import SectionTitle from '@/components/ui/SectionTitle';
import Section from '@/components/ui/Section';
import Timeline, { TimelineItem } from '@/components/ui/Timeline';
import type { Experience } from '@/lib/types';

interface ExperienceSectionProps {
  experiences: Experience[];
}

export default function ExperienceSection({ experiences }: ExperienceSectionProps) {
  return (
    <Section id="experience">
      <SectionTitle id="experience">Experience</SectionTitle>
      <Timeline>
        {experiences.map((exp) => (
          <TimelineItem
            key={exp.organization + exp.dateRange.start}
            title={exp.organization}
            subtitle={exp.role}
            dateRange={exp.dateRange}
            details={exp.responsibilities}
            supervisor={exp.supervisor}
          />
        ))}
      </Timeline>
    </Section>
  );
}
