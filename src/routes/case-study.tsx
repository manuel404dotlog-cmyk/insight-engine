import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ScrollReveal } from "@/components/ScrollReveal";

export const Route = createFileRoute("/case-study")({
  component: CaseStudyPage,
  head: () => ({
    meta: [
      { title: "Case Study — Eonix Studio" },
      { name: "description", content: "Deep dive into telecom churn prediction and fraud detection ML systems built by Eonix Studio." },
      { property: "og:title", content: "Case Study — Eonix Studio" },
      { property: "og:description", content: "Telecom churn prediction and fraud detection ML case studies." },
    ],
  }),
});

function NumberedSection({ num, title, text }: { num: string; title: string; text: string }) {
  return (
    <ScrollReveal>
      <div className="grid gap-4 sm:grid-cols-[80px_1fr] items-start py-6">
        <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-brand-orange text-brand-orange font-heading font-bold text-sm">
          {num}
        </div>
        <div>
          <h3 className="font-heading text-xl font-bold text-foreground">{title}</h3>
          <p className="mt-2 text-muted-foreground leading-relaxed">{text}</p>
        </div>
      </div>
    </ScrollReveal>
  );
}

function RiskCards({ items }: { items: { label: string; count: string; color: string }[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-3">
      {items.map((item) => (
        <div key={item.label} className="rounded-xl bg-card p-5 shadow-card border border-border">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: item.color }} />
            <span className="text-sm font-medium text-foreground">{item.label}</span>
          </div>
          <div className="font-heading text-2xl font-bold text-foreground">{item.count}</div>
        </div>
      ))}
    </div>
  );
}

function CaseStudyPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-28 pb-16 sm:pt-36">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-sm text-muted-foreground mb-6">
            <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
            <span className="mx-2">→</span>
            <span className="text-foreground">Case Study</span>
          </div>
          <span className="text-xs font-semibold uppercase tracking-widest text-brand-orange">Case Study</span>
          <h1 className="mt-3 font-heading text-3xl font-bold text-foreground sm:text-5xl">
            Telecom Churn Prediction System
          </h1>
          <p className="mt-4 max-w-2xl text-muted-foreground leading-relaxed">
            Reducing customer churn in telecommunications through advanced machine learning prediction models and proactive retention strategies.
          </p>
        </div>
      </section>

      {/* Problem / Solution / Approach */}
      <section className="py-12">
        <div className="mx-auto max-w-6xl px-6 space-y-2">
          <NumberedSection num="01" title="The Problem" text="Telecom companies lose billions annually to customer churn. Traditional reactive approaches to retention are costly and ineffective, addressing the issue only after customers have already decided to leave." />
          <NumberedSection num="02" title="Our Solution" text="A predictive ML system that identifies at-risk customers weeks before they churn, enabling targeted intervention campaigns that improve retention rates while reducing marketing spend." />
          <NumberedSection num="03" title="Technical Approach" text="Using gradient-boosted decision trees with feature engineering from behavioral, demographic, and usage data. The model was trained on 18 months of historical customer data with rigorous cross-validation." />
        </div>
      </section>

      {/* Dashboard Visuals */}
      <section className="py-12">
        <div className="mx-auto max-w-6xl px-6 space-y-8">
          <ScrollReveal>
            <RiskCards items={[
              { label: "Low Risk", count: "4,231", color: "var(--success)" },
              { label: "Medium Risk", count: "1,847", color: "var(--brand-amber)" },
              { label: "High Risk", count: "922", color: "var(--brand-burnt)" },
            ]} />
          </ScrollReveal>

          {/* Confusion Matrix */}
          <ScrollReveal delay={150}>
            <div className="rounded-xl bg-card p-6 shadow-card border border-border">
              <h4 className="font-heading font-semibold text-foreground mb-4">Confusion Matrix</h4>
              <div className="grid grid-cols-[auto_1fr_1fr] gap-2 max-w-md">
                <div />
                <div className="text-center text-xs text-muted-foreground font-medium py-2">Predicted Positive</div>
                <div className="text-center text-xs text-muted-foreground font-medium py-2">Predicted Negative</div>
                <div className="text-xs text-muted-foreground font-medium flex items-center">Actual Positive</div>
                <div className="rounded-lg p-4 text-center" style={{ backgroundColor: "oklch(0.65 0.18 145 / 0.1)" }}>
                  <div className="font-heading text-xl font-bold text-foreground">847</div>
                  <div className="text-xs text-success mt-0.5">True Positive</div>
                </div>
                <div className="rounded-lg p-4 text-center" style={{ backgroundColor: "oklch(0.577 0.245 27 / 0.08)" }}>
                  <div className="font-heading text-xl font-bold text-foreground">53</div>
                  <div className="text-xs text-destructive mt-0.5">False Negative</div>
                </div>
                <div className="text-xs text-muted-foreground font-medium flex items-center">Actual Negative</div>
                <div className="rounded-lg p-4 text-center" style={{ backgroundColor: "oklch(0.577 0.245 27 / 0.08)" }}>
                  <div className="font-heading text-xl font-bold text-foreground">91</div>
                  <div className="text-xs text-destructive mt-0.5">False Positive</div>
                </div>
                <div className="rounded-lg p-4 text-center" style={{ backgroundColor: "oklch(0.65 0.18 145 / 0.1)" }}>
                  <div className="font-heading text-xl font-bold text-foreground">3,009</div>
                  <div className="text-xs text-success mt-0.5">True Negative</div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Feature Importance */}
          <ScrollReveal delay={200}>
            <div className="rounded-xl bg-card p-6 shadow-card border border-border">
              <h4 className="font-heading font-semibold text-foreground mb-4">Feature Importance</h4>
              <div className="space-y-3 max-w-lg">
                {[
                  { name: "Contract Type", w: 95 },
                  { name: "Monthly Charges", w: 82 },
                  { name: "Tenure", w: 68 },
                  { name: "Tech Support", w: 55 },
                  { name: "Internet Service", w: 42 },
                ].map((f) => (
                  <div key={f.name}>
                    <div className="flex justify-between text-sm text-muted-foreground mb-1">
                      <span>{f.name}</span>
                      <span>{f.w}%</span>
                    </div>
                    <div className="h-3 rounded-full bg-accent">
                      <div className="h-full rounded-full gradient-orange" style={{ width: `${f.w}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Data Flow */}
          <ScrollReveal delay={250}>
            <div className="rounded-xl bg-card p-6 shadow-card border border-border">
              <h4 className="font-heading font-semibold text-foreground mb-6">Data Pipeline</h4>
              <div className="flex flex-wrap items-center justify-center gap-3">
                {[
                  { label: "Data Collection", icon: "📥" },
                  { label: "Feature Engineering", icon: "⚙️" },
                  { label: "Model Training", icon: "🧠" },
                  { label: "Prediction", icon: "📊" },
                  { label: "Business Action", icon: "🎯" },
                ].map((step, i, arr) => (
                  <div key={step.label} className="flex items-center gap-3">
                    <div className="flex flex-col items-center gap-1.5">
                      <span className="text-xl">{step.icon}</span>
                      <span className="rounded-lg border border-border px-4 py-2 text-xs font-medium text-foreground bg-accent/50">
                        {step.label}
                      </span>
                    </div>
                    {i < arr.length - 1 && (
                      <span className="text-muted-foreground text-lg">→</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Impact Callout */}
      <section className="py-12">
        <div className="mx-auto max-w-6xl px-6">
          <ScrollReveal>
            <div className="rounded-2xl bg-brand-orange-light p-8 sm:p-12">
              <h3 className="font-heading text-2xl font-bold text-foreground">Business Impact</h3>
              <p className="mt-3 text-foreground/80 leading-relaxed">
                The churn prediction system achieved a <strong>32% reduction in customer churn</strong> within the first quarter of deployment, translating to an estimated <strong>$2.4M in retained annual revenue</strong>. Targeted retention campaigns became 3x more cost-effective by focusing resources on genuinely at-risk customers.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Fraud Detection Section */}
      <section className="py-20 border-t border-border">
        <div className="mx-auto max-w-6xl px-6">
          <ScrollReveal>
            <span className="text-xs font-semibold uppercase tracking-widest text-brand-orange">Case Study 02</span>
            <h2 className="mt-3 font-heading text-3xl font-bold text-foreground sm:text-4xl">Fraud Detection System</h2>
            <p className="mt-4 max-w-2xl text-muted-foreground leading-relaxed">
              Real-time anomaly detection for financial transaction monitoring, protecting customers and reducing losses.
            </p>
          </ScrollReveal>

          <div className="mt-10 space-y-2">
            <NumberedSection num="01" title="The Problem" text="Financial institutions face mounting losses from increasingly sophisticated fraud schemes. Manual review processes can't scale to handle millions of daily transactions, and traditional rule-based systems generate excessive false positives." />
            <NumberedSection num="02" title="Our Solution" text="An ensemble anomaly detection system combining isolation forests, autoencoders, and gradient-boosted models that processes transactions in real-time, flagging suspicious activity with high precision." />
            <NumberedSection num="03" title="Technical Approach" text="The system uses unsupervised learning for initial anomaly scoring, followed by a supervised classification layer trained on confirmed fraud cases. Feature engineering captures temporal patterns, network relationships, and behavioral deviations." />
          </div>

          <div className="mt-10 space-y-8">
            <ScrollReveal>
              <RiskCards items={[
                { label: "Low Risk", count: "89,421", color: "var(--success)" },
                { label: "Medium Risk", count: "3,847", color: "var(--brand-amber)" },
                { label: "High Risk", count: "731", color: "var(--brand-burnt)" },
              ]} />
            </ScrollReveal>

            {/* Scatter Plot */}
            <ScrollReveal delay={150}>
              <div className="rounded-xl bg-card p-6 shadow-card border border-border">
                <h4 className="font-heading font-semibold text-foreground mb-4">Anomaly Detection</h4>
                <svg viewBox="0 0 400 200" className="w-full max-w-2xl">
                  {/* Grid */}
                  {[0, 50, 100, 150, 200].map((y) => (
                    <line key={y} x1="0" y1={y} x2="400" y2={y} stroke="var(--border)" strokeWidth="0.5" />
                  ))}
                  {/* Normal points */}
                  {[
                    [45,120],[60,130],[75,110],[90,140],[100,125],[120,135],[135,115],[150,128],
                    [165,138],[180,122],[195,132],[210,118],[225,142],[240,126],[255,136],[270,120],
                    [285,130],[300,124],[315,134],[330,128],[80,145],[110,118],[145,140],[175,115],
                    [205,138],[235,122],[265,142],[295,118],[325,135],[350,125],
                  ].map(([cx, cy], i) => (
                    <circle key={`n${i}`} cx={cx} cy={cy} r="3" fill="var(--muted-foreground)" opacity="0.25" />
                  ))}
                  {/* Anomaly points */}
                  {[
                    [50, 30], [180, 25], [320, 40], [370, 55], [250, 20],
                  ].map(([cx, cy], i) => (
                    <circle key={`a${i}`} cx={cx} cy={cy} r="5" fill="var(--brand-orange)" opacity="0.8" />
                  ))}
                  <text x="380" y="20" fontSize="9" fill="var(--brand-orange)" fontWeight="600">Anomalies</text>
                </svg>
              </div>
            </ScrollReveal>

            {/* Distribution */}
            <ScrollReveal delay={200}>
              <div className="rounded-xl bg-card p-6 shadow-card border border-border">
                <h4 className="font-heading font-semibold text-foreground mb-4">Risk Score Distribution</h4>
                <div className="flex items-end gap-1 h-32 max-w-lg">
                  {[8, 20, 45, 75, 95, 85, 60, 35, 18, 10, 6, 4].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-t"
                      style={{
                        height: `${h}%`,
                        backgroundColor: i >= 9 ? "var(--brand-burnt)" : i >= 7 ? "var(--brand-orange)" : "var(--muted-foreground)",
                        opacity: i >= 7 ? 0.8 : 0.2,
                      }}
                    />
                  ))}
                </div>
                <div className="flex justify-between text-xs text-muted-foreground mt-2 max-w-lg">
                  <span>Low Risk</span>
                  <span>High Risk</span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <ScrollReveal>
            <h2 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">
              Ready to discuss ML solutions?
            </h2>
            <p className="mt-4 text-muted-foreground">
              Let's explore how predictive analytics can drive results for your business.
            </p>
            <div className="mt-8">
              <Button variant="brand" size="lg" asChild>
                <Link to="/" hash="contact">Get in Touch</Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}
