export const SOCIAL_LINKS = {
  linkedin: { url: "https://linkedin.com/in/emmanuel", label: "LinkedIn", handle: "@emmanuel" },
  twitter: { url: "https://x.com/emmanuel", label: "X (Twitter)", handle: "@emmanuel" },
  instagram: { url: "https://instagram.com/emmanuel", label: "Instagram", handle: "@emmanuel" },
  email: { url: "mailto:hello@eonixstudio.com", label: "Email", handle: "hello@eonixstudio.com" },
};

export function LinkedInIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className} width="18" height="18">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export function TwitterIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className} width="18" height="18">
      <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
      <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
    </svg>
  );
}

export function InstagramIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className} width="18" height="18">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function MailIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className} width="18" height="18">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="M22 7l-10 7L2 7" />
    </svg>
  );
}

export function ArrowRightIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} width="16" height="16">
      <path d="M5 12h14" />
      <path d="M12 5l7 7-7 7" />
    </svg>
  );
}

export function SocialIconButton({ platform }: { platform: keyof typeof SOCIAL_LINKS }) {
  const info = SOCIAL_LINKS[platform];
  const icons = { linkedin: LinkedInIcon, twitter: TwitterIcon, instagram: InstagramIcon, email: MailIcon };
  const Icon = icons[platform];
  return (
    <a
      href={info.url}
      target={platform === "email" ? undefined : "_blank"}
      rel="noopener noreferrer"
      aria-label={info.label}
      className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors duration-200 hover:text-foreground hover:border-primary/30"
    >
      <Icon />
    </a>
  );
}
