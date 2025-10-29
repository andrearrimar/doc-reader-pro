import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { ArrowDown, ArrowUp, AlertCircle, TrendingUp, Sparkles } from "lucide-react";

const metrics = [
  {
    name: "Signup Conversion",
    value: "15%",
    percentile: 24,
    trend: -2,
    industryMedian: "22%",
    impact: "high",
  },
  {
    name: "Activation Rate",
    value: "62%",
    percentile: 68,
    trend: 5,
    industryMedian: "58%",
    impact: "low",
  },
  {
    name: "Feature Adoption",
    value: "34%",
    percentile: 42,
    trend: -1,
    industryMedian: "41%",
    impact: "medium",
  },
];

const opportunities = [
  {
    title: "Onboarding completion rate 18% below median",
    impact: "€180K ARR potential",
    priority: "high",
    confidence: 87,
  },
  {
    title: "Payment flow abandonment at 42%",
    impact: "€95K ARR potential",
    priority: "high",
    confidence: 79,
  },
  {
    title: "Feature discovery rate below benchmark",
    impact: "€52K ARR potential",
    priority: "medium",
    confidence: 71,
  },
];

export const Dashboard = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground">
            See What Great Product Managers See
          </h2>
          <p className="text-xl text-muted-foreground">
            Real-time benchmarking and AI-powered insights that transform how you prioritize
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-6">
          {/* Metrics Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {metrics.map((metric, index) => (
              <Card key={index} className="p-6 border-border bg-card">
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">{metric.name}</p>
                      <p className="text-3xl font-bold text-foreground mt-1">{metric.value}</p>
                    </div>
                    {metric.trend > 0 ? (
                      <Badge variant="outline" className="gap-1 bg-accent/10 text-accent border-accent/20">
                        <ArrowUp className="h-3 w-3" />
                        {metric.trend}%
                      </Badge>
                    ) : (
                      <Badge variant="outline" className="gap-1 bg-destructive/10 text-destructive border-destructive/20">
                        <ArrowDown className="h-3 w-3" />
                        {Math.abs(metric.trend)}%
                      </Badge>
                    )}
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Industry Position</span>
                      <span className="font-medium text-foreground">{metric.percentile}th percentile</span>
                    </div>
                    <Progress value={metric.percentile} className="h-2" />
                    <p className="text-xs text-muted-foreground">
                      Industry median: {metric.industryMedian}
                    </p>
                  </div>

                  {metric.impact === "high" && (
                    <div className="flex items-center gap-2 text-xs text-warning pt-2 border-t border-border">
                      <AlertCircle className="h-4 w-4" />
                      <span>High-impact opportunity</span>
                    </div>
                  )}
                </div>
              </Card>
            ))}
          </div>

          {/* Priority Opportunities */}
          <Card className="p-6 border-border bg-card">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-primary" />
                <h3 className="text-xl font-semibold text-foreground">Priority Opportunities</h3>
              </div>
              <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                AI-Identified
              </Badge>
            </div>

            <div className="space-y-4">
              {opportunities.map((opp, index) => (
                <div
                  key={index}
                  className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-lg border border-border bg-muted/30 hover:bg-muted/50 transition-colors"
                >
                  <div className="flex-1 space-y-2">
                    <div className="flex items-start gap-2">
                      {opp.priority === "high" ? (
                        <div className="w-2 h-2 rounded-full bg-destructive mt-1.5" />
                      ) : (
                        <div className="w-2 h-2 rounded-full bg-warning mt-1.5" />
                      )}
                      <div>
                        <p className="font-medium text-foreground">{opp.title}</p>
                        <div className="flex items-center gap-4 mt-1 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <TrendingUp className="h-3 w-3" />
                            {opp.impact}
                          </span>
                          <span>{opp.confidence}% confidence</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="whitespace-nowrap">
                    Analyze Impact
                  </Button>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
