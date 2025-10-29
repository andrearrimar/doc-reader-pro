import { Card } from "@/components/ui/card";
import { BarChart3, TestTube, FileText, Database, Target, Sparkles } from "lucide-react";

const features = [
  {
    icon: BarChart3,
    title: "European Benchmarking",
    description: "Compare your metrics against 2,400+ European B2B SaaS companies. Know if your 15% conversion rate is competitive or concerning.",
  },
  {
    icon: TestTube,
    title: "Journey Testing",
    description: "Test prototypes before development. AI agents simulate user sessions to identify friction points and estimate improvement potential.",
  },
  {
    icon: Target,
    title: "Impact Estimation",
    description: "Get conservative, expected, and optimistic ROI projections for every feature. Make data-backed prioritization decisions with confidence.",
  },
  {
    icon: FileText,
    title: "Stakeholder Briefs",
    description: "Generate presentation-ready decision documents in minutes. Include competitive context, ROI estimates, and clear rationale.",
  },
  {
    icon: Database,
    title: "Analytics Integration",
    description: "One-click OAuth with Amplitude, Mixpanel, Google Analytics, and more. 90 days of historical data synced automatically.",
  },
  {
    icon: Sparkles,
    title: "AI-Powered Insights",
    description: "Automatically identifies your biggest performance gaps and highest-impact opportunities. Focus on what matters most.",
  },
];

export const Features = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground">
            Everything Product Managers Need
          </h2>
          <p className="text-xl text-muted-foreground">
            Stop spending 10 hours on presentations. Start making defensible decisions in minutes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border bg-card"
              >
                <div className="flex flex-col gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
