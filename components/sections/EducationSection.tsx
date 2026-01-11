import SectionTitle from '@/components/ui/SectionTitle';
import Section from '@/components/ui/Section';
import Timeline, { TimelineItem } from '@/components/ui/Timeline';
import type { Education } from '@/lib/types';

interface EducationSectionProps {
  education: Education[];
}

export default function EducationSection({ education }: EducationSectionProps) {
  return (
    <Section id="education">
      <SectionTitle id="education">Education</SectionTitle>
      <Timeline>
        {education.map((edu) => (
          <TimelineItem
            key={edu.institution + edu.dateRange.start}
            title={edu.degree}
            subtitle={edu.institution}
            dateRange={edu.dateRange}
            details={edu.details}
          />
        ))}
      </Timeline>
    </Section>
  );
}
