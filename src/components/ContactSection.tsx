import { useState } from "react";
import { Button } from "./ui/button";
import { ScrollReveal } from "./ScrollReveal";
import { LinkedInIcon, TwitterIcon, InstagramIcon, MailIcon, ArrowRightIcon, SOCIAL_LINKS } from "./Icons";

const contactCards = [
  { platform: "linkedin" as const, Icon: LinkedInIcon },
  { platform: "twitter" as const, Icon: TwitterIcon },
  { platform: "instagram" as const, Icon: InstagramIcon },
  { platform: "email" as const, Icon: MailIcon },
];

export function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  return (
    <section id="contact" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <ScrollReveal>
          <div className="text-center">
            <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">
              Let's Build Intelligent Systems from Data
            </h2>
            <p className="mt-4 text-muted-foreground">
              Interested in collaborating or discussing ML solutions? Let's connect.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={150}>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {contactCards.map(({ platform, Icon }) => {
              const info = SOCIAL_LINKS[platform];
              return (
                <a
                  key={platform}
                  href={info.url}
                  target={platform === "email" ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="group rounded-xl bg-card p-5 shadow-card border border-border transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-orange-light text-brand-orange mb-3">
                    <Icon />
                  </div>
                  <div className="font-heading font-semibold text-foreground">{info.label}</div>
                  <div className="text-sm text-muted-foreground mt-0.5">{info.handle}</div>
                  <div className="mt-3 flex items-center gap-1 text-sm font-medium text-brand-orange group-hover:gap-2 transition-all duration-200">
                    {platform === "email" ? "Send email" : "Connect"} <ArrowRightIcon className="w-3.5 h-3.5" />
                  </div>
                </a>
              );
            })}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={300}>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="mt-12 mx-auto max-w-lg space-y-4"
          >
            {[
              { name: "name", label: "Name", type: "text" },
              { name: "email", label: "Email", type: "email" },
            ].map((field) => (
              <div key={field.name}>
                <label className="text-sm font-medium text-foreground">{field.label}</label>
                <input
                  type={field.type}
                  value={formData[field.name as keyof typeof formData]}
                  onChange={(e) => setFormData((p) => ({ ...p, [field.name]: e.target.value }))}
                  className="mt-1 w-full rounded-lg border border-border bg-card px-4 py-2.5 text-sm text-foreground outline-none transition-all duration-200 focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20"
                />
              </div>
            ))}
            <div>
              <label className="text-sm font-medium text-foreground">Message</label>
              <textarea
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData((p) => ({ ...p, message: e.target.value }))}
                className="mt-1 w-full rounded-lg border border-border bg-card px-4 py-2.5 text-sm text-foreground outline-none transition-all duration-200 focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 resize-none"
              />
            </div>
            <Button variant="brand" size="lg" className="w-full">
              Send Message
            </Button>
          </form>
        </ScrollReveal>
      </div>
    </section>
  );
}
