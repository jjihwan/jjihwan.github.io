"use client";

import SectionTitle from '@/components/ui/SectionTitle';
import Section from '@/components/ui/Section';
import SocialLink from '@/components/ui/SocialLink';
import type { SocialLink as SocialLinkType } from '@/lib/types';

interface ContactSectionProps {
  socialLinks: SocialLinkType[];
}

export default function ContactSection({ socialLinks }: ContactSectionProps) {
  return (
    <Section id="contact">
      {/* <SectionTitle id="contact">Contact</SectionTitle> */}
      <div className="flex flex-col items-center gap-6">
        {/* <p className="text-center text-zinc-700 text-base">
          Feel free to reach out through any of these channels
        </p> */}
        <div className="flex flex-wrap justify-center gap-3">
          {socialLinks.map((link) => (
            <SocialLink key={link.url} link={link} />
          ))}
        </div>
        <p className="text-center text-sm text-zinc-500">
          Last updated: <time>{new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long' })}</time>, Published by <a href="https://github.com/o-bard-o">@o-bard-o</a>
        </p>
      </div>
    </Section>
  );
}
