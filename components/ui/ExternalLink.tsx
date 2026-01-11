import type { Link } from '@/lib/types';

interface ExternalLinkProps {
  href: string;
  children: React.ReactNode;
  showIcon?: boolean;
}

export default function ExternalLink({
  href,
  children,
  showIcon = true
}: ExternalLinkProps) {
  return (
    <a
      href={href}
      className="inline-flex items-center gap-1 text-zinc-900 hover:text-zinc-600 transition-colors duration-200"
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
      {showIcon && (
        <svg
          className="w-4 h-4 inline-block"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
          />
        </svg>
      )}
    </a>
  );
}
