import { Link } from "@tanstack/react-router";
import { BrandIcon } from "./BrandIcon";
import { LinkedInIcon, TwitterIcon, InstagramIcon, MailIcon, SOCIAL_LINKS } from "./Icons";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-10 sm:grid-cols-3">
          <div>
            <div className="flex items-center gap-2 text-brand-orange">
              <BrandIcon />
              <span className="font-heading text-lg font-bold text-foreground">Eonix Studio</span>
            </div>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              Turning raw data into intelligent systems that drive real business value through machine learning engineering.
            </p>
          </div>
          <div>
            <h4 className="font-heading text-sm font-semibold text-foreground mb-4">Navigation</h4>
            <div className="flex flex-col gap-2">
              <Link to="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Home</Link>
              <Link to="/case-study" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Case Study</Link>
              <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Contact</a>
            </div>
          </div>
          <div>
            <h4 className="font-heading text-sm font-semibold text-foreground mb-4">Connect</h4>
            <div className="flex flex-col gap-2">
              {(["linkedin", "twitter", "instagram", "email"] as const).map((p) => {
                const icons = { linkedin: LinkedInIcon, twitter: TwitterIcon, instagram: InstagramIcon, email: MailIcon };
                const Icon = icons[p];
                const info = SOCIAL_LINKS[p];
                return (
                  <a key={p} href={info.url} target={p === "email" ? undefined : "_blank"} rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                    <Icon className="w-4 h-4" />
                    {info.label}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-muted-foreground">
          <span>© 2026 Eonix Studio. All rights reserved.</span>
          <span>Designed with precision.</span>
        </div>
      </div>
    </footer>
  );
}
