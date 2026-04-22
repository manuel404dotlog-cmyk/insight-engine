import { ScrollReveal } from "./ScrollReveal";

export function FeaturedProject() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <ScrollReveal>
          <span className="text-xs font-semibold uppercase tracking-widest text-brand-orange">Featured Project</span>
          <h2 className="mt-3 font-heading text-3xl font-bold text-foreground sm:text-4xl">Telecom Churn Prediction</h2>
          <p className="mt-4 max-w-2xl text-muted-foreground leading-relaxed">
            A comprehensive machine learning system designed to predict customer churn in the telecommunications industry, enabling proactive retention strategies.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={150}>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {[
              { label: "Churn Risk Model", value: "94.2%" },
              { label: "Retention Prediction", value: "89.7%" },
              { label: "Confidence Score", value: "0.92" },
            ].map((s) => (
              <div key={s.label} className="rounded-xl bg-card p-5 shadow-card border-t-2 border-brand-orange/40">
                <div className="text-sm text-muted-foreground">{s.label}</div>
                <div className="mt-1 font-heading text-2xl font-bold text-foreground">{s.value}</div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={300}>
          <div className="mt-10 rounded-2xl bg-card shadow-card border border-border overflow-hidden">
            <div className="flex items-center gap-1.5 px-5 py-3 border-b border-border">
              <div className="w-2.5 h-2.5 rounded-full bg-destructive/60" />
              <div className="w-2.5 h-2.5 rounded-full bg-warning/60" />
              <div className="w-2.5 h-2.5 rounded-full bg-success/60" />
              <span className="ml-3 text-xs text-muted-foreground">Prediction Dashboard</span>
            </div>
            <div className="p-6 grid gap-6 md:grid-cols-3">
              {/* Gauge */}
              <div className="flex flex-col items-center">
                <span className="text-xs text-muted-foreground mb-3">Churn Probability</span>
                <svg viewBox="0 0 120 80" className="w-full max-w-[160px]">
                  <path d="M 15 70 A 50 50 0 0 1 105 70" fill="none" stroke="var(--border)" strokeWidth="8" strokeLinecap="round" />
                  <path d="M 15 70 A 50 50 0 0 1 81.5 25" fill="none" stroke="url(#gaugeGrad)" strokeWidth="8" strokeLinecap="round" />
                  <defs>
                    <linearGradient id="gaugeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="var(--brand-amber)" />
                      <stop offset="100%" stopColor="var(--brand-burnt)" />
                    </linearGradient>
                  </defs>
                  <text x="60" y="65" textAnchor="middle" className="font-heading text-2xl font-bold" fill="var(--foreground)" fontSize="22">73%</text>
                </svg>
              </div>

              {/* Feature importance bars */}
              <div>
                <span className="text-xs text-muted-foreground">Feature Importance</span>
                <div className="mt-3 space-y-2.5">
                  {[
                    { name: "Contract Type", w: 92 },
                    { name: "Monthly Charges", w: 78 },
                    { name: "Tenure", w: 65 },
                    { name: "Tech Support", w: 52 },
                    { name: "Internet Service", w: 40 },
                  ].map((f) => (
                    <div key={f.name}>
                      <div className="flex justify-between text-xs text-muted-foreground mb-0.5">
                        <span>{f.name}</span>
                      </div>
                      <div className="h-2 rounded-full bg-accent">
                        <div className="h-full rounded-full gradient-orange" style={{ width: `${f.w}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Line chart */}
              <div>
                <span className="text-xs text-muted-foreground">Customer Activity</span>
                <svg viewBox="0 0 200 100" className="w-full mt-3">
                  <defs>
                    <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="var(--brand-orange)" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="var(--brand-orange)" stopOpacity="0.02" />
                    </linearGradient>
                  </defs>
                  <path d="M 0 80 Q 33 60 66 50 T 133 35 T 200 25 L 200 95 L 0 95 Z" fill="url(#areaGrad)" />
                  <path d="M 0 80 Q 33 60 66 50 T 133 35 T 200 25" fill="none" stroke="var(--brand-orange)" strokeWidth="2" strokeLinecap="round" />
                  {["Jan", "Feb", "Mar", "Apr", "May", "Jun"].map((m, i) => (
                    <text key={m} x={i * 40} y="95" fontSize="7" fill="var(--muted-foreground)" textAnchor="middle">{m}</text>
                  ))}
                </svg>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
