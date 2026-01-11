import type { SectionProps } from '@/lib/types';

export default function Section({ children, className = '', id }: SectionProps) {
  return (
    <section
      id={id}
      className={`py-6 px-4 md:py-6 lg:px-0 max-w-4xl mx-auto ${className}`}
    >
      {children}
    </section>
  );
}
