import SectionTitle from '@/components/ui/SectionTitle';
import Section from '@/components/ui/Section';
import type { NewsItem } from '@/lib/types';
import ExternalLink from '@/components/ui/ExternalLink';

interface NewsSectionProps {
  news: NewsItem[];
}

export default function NewsSection({ news }: NewsSectionProps) {
  return (
    <Section id="news">
      <SectionTitle id="news">News</SectionTitle>
      <div className="space-y-3">
        {news.map((item, index) => (
          <article
            key={index}
            className="flex gap-4 py-1 rounded-lg hover:bg-zinc-100 transition-colors duration-200"
          >
            <time className="flex-shrink-0 text-sm font-medium text-zinc-600 w-24 pt-0.5">
              {item.date}
            </time>
            <div className="flex-1">
              {item.link ? (
                <ExternalLink href={item.link} showIcon={false}>
                  <span 
                    className="text-zinc-900 hover:text-zinc-600"
                    dangerouslySetInnerHTML={{ __html: item.title }}
                  />
                </ExternalLink>
              ) : (
                <span 
                  className="text-zinc-900"
                  dangerouslySetInnerHTML={{ __html: item.title }}
                />
              )}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
