export function HeroDashboard() {
  return (
    <div className="relative">
      {/* Orange glow */}
      <div className="absolute inset-0 rounded-3xl bg-brand-orange/20 blur-3xl scale-90" />
      
      <div className="relative rounded-2xl bg-card shadow-card border border-border overflow-hidden" style={{ transform: "perspective(1000px) rotateY(-3deg) rotateX(2deg)" }}>
        {/* Window chrome */}
        <div className="flex items-center gap-1.5 px-4 py-3 border-b border-border">
          <div className="w-2.5 h-2.5 rounded-full bg-destructive/60" />
          <div className="w-2.5 h-2.5 rounded-full bg-warning/60" />
          <div className="w-2.5 h-2.5 rounded-full bg-success/60" />
          <span className="ml-3 text-xs text-muted-foreground">Analytics Dashboard</span>
        </div>
        
        <div className="p-5 space-y-4">
          {/* Status badges */}
          <div className="flex gap-2">
            <span className="inline-flex items-center gap-1 rounded-full bg-success/10 px-2.5 py-0.5 text-xs font-medium" style={{ color: "var(--success)" }}>
              <span className="w-1.5 h-1.5 rounded-full bg-success" /> Active
            </span>
            <span className="inline-flex items-center gap-1 rounded-full bg-brand-orange/10 px-2.5 py-0.5 text-xs font-medium text-brand-orange">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-orange" /> Processing
            </span>
            <span className="inline-flex items-center gap-1 rounded-full bg-accent px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
              Predicted
            </span>
          </div>

          {/* Mini bar chart */}
          <div className="flex items-end gap-1.5 h-20">
            {[40, 65, 50, 80, 60, 90, 75, 55, 85, 70].map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-t gradient-orange"
                style={{ height: `${h}%`, opacity: 0.7 + (h / 300) }}
              />
            ))}
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-3 gap-3">
            <div className="rounded-lg bg-accent/50 p-2.5">
              <div className="text-xs text-muted-foreground">Accuracy</div>
              <div className="font-heading text-lg font-bold text-foreground">94.2%</div>
            </div>
            <div className="rounded-lg bg-accent/50 p-2.5">
              <div className="text-xs text-muted-foreground">Precision</div>
              <div className="font-heading text-lg font-bold text-foreground">89.7%</div>
            </div>
            <div className="rounded-lg bg-accent/50 p-2.5">
              <div className="text-xs text-muted-foreground">F1 Score</div>
              <div className="font-heading text-lg font-bold text-foreground">0.92</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
