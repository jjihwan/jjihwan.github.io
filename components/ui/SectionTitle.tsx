import type { SectionTitleProps } from '@/lib/types';

export default function SectionTitle({ children, id, className = '' }: SectionTitleProps) {
  return (
    <h2
      id={id}
      className={`text-2xl font-bold mb-8 pb-2 border-b border-zinc-200 text-zinc-900 ${className}`}
    >
      {children}
    </h2>
  );
}
