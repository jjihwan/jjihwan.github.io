import type { DateRange } from '@/lib/types';

interface TimelineItemProps {
  title: string;
  subtitle: string;
  dateRange: DateRange;
  details?: string[];
  supervisor?: string;
}

export function TimelineItem({
  title,
  subtitle,
  dateRange,
  details = [],
  supervisor
}: TimelineItemProps) {
  return (
    <article className="relative pl-6 pb-8 last:pb-0">
      <div className="absolute left-[-9px] top-2 w-4 h-4 rounded-full bg-zinc-900 border-2 border-white"></div>

      <div className="mb-1">
        <h3 className="text-lg font-semibold text-zinc-900">
          {title}
        </h3>
        <p className="text-sm text-zinc-600">{subtitle}</p>
      </div>

      <p className="text-sm text-zinc-500 mb-2">
        {dateRange.start} - {dateRange.end}
      </p>

      {supervisor && (
        <p className="text-sm text-zinc-600 mb-2">
          Supervisor: {supervisor}
        </p>
      )}

      {/* {details.length > 0 && (
        <ul className="list-disc list-inside text-sm text-zinc-700 space-y-1">
          {details.map((detail, index) => (
            <li key={index}>{detail}</li>
          ))}
        </ul>
      )} */}
    </article>
  );
}
