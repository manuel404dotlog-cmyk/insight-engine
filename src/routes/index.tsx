import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { HeroDashboard } from "@/components/HeroDashboard";
import { FeaturedProject } from "@/components/FeaturedProject";
import { ContactSection } from "@/components/ContactSection";
import { ScrollReveal } from "@/components/ScrollReveal";
import { ArrowRightIcon, SocialIconButton } from "@/components/Icons";

export const Route = createFileRoute("/")({
  component: HomePage,
  head: () => ({
    meta: [
      { title: "Eonix Studio — Building Intelligent Systems from Data" },
      { name: "description", content: "ML engineering studio turning raw data into production-grade predictive systems for real business problems." },
      { property: "og:title", content: "Eonix Studio — Building Intelligent Systems from Data" },
      { property: "og:description", content: "ML engineering studio turning raw data into production-grade predictive systems." },
    ],
  }),
});

function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-28 pb-20 sm:pt-36 sm:pb-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-brand-orange">Eonix Studio</span>
              <h1 className="mt-4 font-heading text-4xl font-bold leading-tight text-foreground sm:text-5xl lg:text-6xl">
                Building Intelligent Systems from Data
              </h1>
              <p className="mt-2 font-heading text-lg text-muted-foreground">Emmanuel — ML Engineer</p>
              <p className="mt-4 max-w-md text-muted-foreground leading-relaxed">
                Focused on transforming complex datasets into actionable business intelligence through production-grade machine learning systems.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Button variant="brand" size="lg" asChild>
                  <Link to="/case-study" className="group">
                    View Case Study
                    <ArrowRightIcon className="transition-transform duration-200 group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button variant="brand-outline" size="lg" asChild>
                  <a href="#contact">Contact</a>
                </Button>
              </div>
              <div className="mt-8 flex items-center gap-3">
                <span className="text-xs text-muted-foreground">Connect</span>
                <SocialIconButton platform="linkedin" />
                <SocialIconButton platform="twitter" />
                <SocialIconButton platform="instagram" />
                <SocialIconButton platform="email" />
              </div>
            </div>
            <div className="hidden lg:block">
              <HeroDashboard />
            </div>
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-6 sm:grid-cols-2">
            {[
              {
                title: "Customer Churn Prediction",
                desc: "Leverage behavioral patterns and historical data to identify at-risk customers before they leave, enabling targeted retention campaigns.",
                bars: [30, 55, 45, 70, 60, 85, 75],
              },
              {
                title: "Fraud Detection",
                desc: "Real-time anomaly detection systems that identify suspicious patterns in transaction data, reducing financial losses and protecting customers.",
                scatter: true,
              },
            ].map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 150}>
                <div className="group rounded-2xl bg-card p-7 shadow-card border border-border transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover h-full">
                  {/* Mini viz */}
                  <div className="w-14 h-14 rounded-xl bg-brand-orange-light flex items-center justify-center mb-5">
                    {item.scatter ? (
                      <svg viewBox="0 0 32 32" width="28" height="28">
                        {[
                          [8, 20], [12, 16], [14, 22], [18, 12], [20, 18], [24, 8], [10, 14], [22, 14],
                        ].map(([cx, cy], j) => (
                          <circle key={j} cx={cx} cy={cy} r="2" fill="var(--brand-orange)" opacity={0.5 + j * 0.06} />
                        ))}
                        <circle cx={26} cy={6} r="2.5" fill="var(--brand-burnt)" />
                      </svg>
                    ) : (
                      <svg viewBox="0 0 32 32" width="28" height="28">
                        {item.bars!.map((h, j) => (
                          <rect key={j} x={2 + j * 4} y={32 - h * 0.3} width="3" height={h * 0.3} rx="1" fill="var(--brand-orange)" opacity={0.5 + h / 200} />
                        ))}
                      </svg>
                    )}
                  </div>
                  <h3 className="font-heading text-xl font-bold text-foreground">{item.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  <Link to="/case-study" className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-brand-orange group-hover:gap-2 transition-all duration-200">
                    Learn more <ArrowRightIcon className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <FeaturedProject />

      {/* About */}
      <section className="py-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <ScrollReveal>
            <span className="text-xs font-semibold uppercase tracking-widest text-brand-orange">About</span>
            <h2 className="mt-3 font-heading text-3xl font-bold text-foreground sm:text-4xl">
              The Engineer Behind Eonix Studio
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Emmanuel is a machine learning engineer with deep expertise in predictive modeling, data engineering, and building production-grade ML systems. With a background spanning telecommunications, finance, and technology, he brings a pragmatic, results-driven approach to every project.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Eonix Studio represents the culmination of years of hands-on experience — a focused practice dedicated to solving complex business problems through intelligent, data-driven systems that deliver measurable impact.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <ContactSection />
      <Footer />
    </div>
  );
}
