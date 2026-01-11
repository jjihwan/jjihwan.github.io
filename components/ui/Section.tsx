import type { SectionProps } from '@/lib/types';

export default function Section({ children, className = '', id }: SectionProps) {
  return (
    <section
      id={id}
      className={`py-8 px-4 md:py-12 lg:px-8 max-w-4xl mx-auto ${className}`}
    >
      {children}
    </section>
  );
}
