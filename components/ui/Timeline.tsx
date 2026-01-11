import { TimelineItem } from './TimelineItem';
import type { DateRange } from '@/lib/types';

interface TimelineProps {
  children: React.ReactNode;
  className?: string;
}

export default function Timeline({ children, className = '' }: TimelineProps) {
  return (
    <div className={`relative ${className}`}>
      {children}
    </div>
  );
}

export { TimelineItem };
export type { DateRange };
