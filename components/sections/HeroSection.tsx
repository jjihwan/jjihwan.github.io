"use client";

import Image from 'next/image';
import { useState } from 'react';
import { Profile } from '@/lib/types';
import SocialLink from '@/components/ui/SocialLink';
import ExternalLink from '@/components/ui/ExternalLink';

interface HeroSectionProps {
  profile: Profile;
}

export default function HeroSection({ profile }: HeroSectionProps) {
  return (
    <section className="py-6 px-4 md:py-10 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col items-center gap-6 text-center md:flex-row md:items-start md:text-left md:gap-8">
          <div className="flex-shrink-0">
            <Image
              src={profile.photo}
              alt={profile.name}
              width={200}
              height={200}
              className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover border-4 border-zinc-200"
              priority
            />
          </div>

          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-2">
              {profile.name}
            </h1>

            <h2 className="text-lg md:text-xl text-zinc-700 my-2">
              {profile.affiliation}
            </h2>

            <div className="flex flex-wrap gap-2 mt-4 pr-20">
              {profile.socialLinks.map((link) => (
                <SocialLink key={link.url} link={link} />
              ))}
            </div>

            {/* <div className="flex flex-wrap gap-3 mb-6 mt-6">
              {profile.quickLinks.map((link) => {
                return (
                  <ExternalLink
                    key={link.url}
                    href={link.url}
                    showIcon={false}
                  >
                    <span className="inline-block px-4 py-2 rounded-full bg-zinc-900 text-white font-medium hover:bg-zinc-700 transition-colors">
                      {link.label}
                    </span>
                  </ExternalLink>
                );
              })}
            </div> */}

          </div>
        </div>
      </div>
    </section>
  );
}
