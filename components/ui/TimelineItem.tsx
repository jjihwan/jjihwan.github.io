import type { DateRange, TimelineItemProps } from '@/lib/types';

export function TimelineItem({
  title,
  subtitle,
  dateRange,
  details = [],
  supervisor,
  logo
}: TimelineItemProps) {
  return (
    <article className={`flex gap-8 items-center pb-12 last:pb-0 ${!logo ? 'pl-6' : ''}`}>
      {logo ? (
        <div className="flex-shrink-0 w-24 h-24 rounded-2xl bg-white border border-zinc-200 flex items-center justify-center overflow-hidden shadow-sm hover:shadow-md transition-shadow">
          <img src={logo} alt={title} className="w-16 h-16 object-contain" />
        </div>
      ) : (
        <div className="absolute left-[-9px] top-2 w-4 h-4 rounded-full bg-zinc-900 border-2 border-white"></div>
      )}

      <div className="flex-1 min-w-0">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="text-xl font-bold text-zinc-900 tracking-tight">
              {title}
            </h3>
            <p className="text-base font-medium text-zinc-600">{subtitle}</p>
          </div>
          <div className="text-right">
            <p className="text-sm font-medium text-zinc-500 whitespace-nowrap">
              {dateRange.start} - {dateRange.end}
            </p>
          </div>
        </div>

        {supervisor && (
          <p className="text-sm text-zinc-600 mb-2">
            <span className="font-semibold text-zinc-800">Supervisor:</span> {supervisor}
          </p>
        )}

        {/* {details.length > 0 && (
          <ul className="list-disc list-inside text-sm text-zinc-700 space-y-1">
            {details.map((detail, index) => (
              <li key={index}>{detail}</li>
            ))}
          </ul>
        )} */}
      </div>
    </article>
  );
}
