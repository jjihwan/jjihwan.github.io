export interface Link {
  label: string;
  url: string;
}

export interface DateRange {
  start: string;
  end: string | "Present";
}

export interface Profile {
  name: string;
  photo: string;
  position: string;
  affiliation: string;
  location: string;
  email: string;
  bio: string[];
  quickLinks: Link[];
  socialLinks: SocialLink[];
}

export interface ResearchInterest {
  title: string;
  description?: string;
}

export interface Education {
  degree: string;
  institution: string;
  dateRange: DateRange;
  details?: string[];
}

export interface Publication {
  title: string;
  authors: string[];
  venue: string;
  year?: number;
  thumbnail?: string;
  links: {
    project?: string;
    arxiv?: string;
    code?: string;
    pdf?: string;
  };
}

export interface Experience {
  organization: string;
  role: string;
  dateRange: DateRange;
  responsibilities: string[];
  supervisor?: string;
}

export interface Honor {
  title: string;
  date: string;
  description?: string[];
  prize?: string;
}

export interface NewsItem {
  date: string;
  title: string;
  link?: string;
}

export interface SocialLink {
  platform: 'email' | 'twitter' | 'linkedin' | 'instagram' | 'github' | 'google-scholar';
  url: string;
  label?: string;
}

export interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export interface SectionTitleProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
}

export interface TimelineItemProps {
  title: string;
  subtitle: string;
  dateRange: DateRange;
  details?: string[];
  supervisor?: string;
}

export interface PublicationCardProps {
  publication: Publication;
}

export interface SocialLinkProps {
  link: SocialLink;
}
