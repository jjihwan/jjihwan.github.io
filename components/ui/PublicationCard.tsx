import type { PublicationCardProps } from '@/lib/types';
import ExternalLink from './ExternalLink';

export default function PublicationCard({ publication }: PublicationCardProps) {
  return (
    <article className="flex flex-col sm:flex-row gap-4 p-4 rounded-lg bg-zinc-50 border border-zinc-200 hover:shadow-md transition-shadow duration-200">
      {publication.thumbnail && (
        <div className="flex-shrink-0">
          <img
            src={publication.thumbnail}
            alt={publication.title}
            className="w-full sm:w-56 h-32 object-cover rounded-md"
            loading="lazy"
          />
        </div>
      )}

      <div className="flex flex-col justify-between flex-1">
        <div>
          <h3 className="text-lg font-semibold text-zinc-900 mb-2">
            <ExternalLink href={publication.links.project || publication.links.arxiv || '#'} showIcon={false}>
              {publication.title}
            </ExternalLink>
          </h3>

          <p className="text-sm text-zinc-600 mb-1 leading-relaxed">
            {publication.authors.map((author, index) => {
              const isJihwan = author.trim() === 'Jihwan Kim*' || author.trim() === 'Jihwan Kim';
              return (
                <span key={index} className="inline-block mr-1">
                  {isJihwan ? <strong>{author}</strong> : author}
                  {index < publication.authors.length - 1 ? ',' : ''}
                </span>
              );
            })}
          </p>

          <p className="text-sm text-zinc-700">
            {publication.venue}
            {publication.affiliation && (
              <span className="font-normal"> | Work done at {publication.affiliation}</span>
            )}
          </p>
        </div>

        <div className="flex flex-wrap gap-2 mt-3">
          {publication.links.project && (
            <ExternalLink href={publication.links.project} showIcon={false}>
              <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-zinc-200 text-zinc-700 hover:bg-zinc-300 transition-colors">
                Project
              </span>
            </ExternalLink>
          )}

          {publication.links.arxiv && (
            <ExternalLink href={publication.links.arxiv} showIcon={false}>
              <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-zinc-200 text-zinc-700 hover:bg-zinc-300 transition-colors">
                ArXiv
              </span>
            </ExternalLink>
          )}

          {publication.links.code && (
            <ExternalLink href={publication.links.code} showIcon={false}>
              <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-zinc-200 text-zinc-700 hover:bg-zinc-300 transition-colors">
                Code
              </span>
            </ExternalLink>
          )}

          {publication.links.pdf && (
            <ExternalLink href={publication.links.pdf} showIcon={false}>
              <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-zinc-200 text-zinc-700 hover:bg-zinc-300 transition-colors">
                PDF
              </span>
            </ExternalLink>
          )}
        </div>
      </div>
    </article>
  );
}