import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Zap, Shield } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
      
      <div className="relative container mx-auto px-4 py-24 sm:py-32">
        <div className="mx-auto max-w-4xl text-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium text-primary animate-fade-in">
            <Zap className="h-4 w-4" />
            European Product Intelligence Platform
          </div>

          {/* Headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-foreground animate-fade-in">
            From 10 Hours to{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              1 Hour
            </span>
            {" "}Weekly
          </h1>

          {/* Subheadline */}
          <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto animate-fade-in">
            AI-powered product prioritization that combines your analytics with{" "}
            <strong className="text-foreground">2,400+ European company benchmarks</strong>.
            Make defensible decisions backed by real market data.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
            <Button size="lg" className="gap-2 text-lg px-8 py-6" onClick={() => window.location.href = '/auth'}>
              Start Free Trial
              <ArrowRight className="h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="gap-2 text-lg px-8 py-6" onClick={() => window.location.href = '/demo'}>
              View Demo
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-6 sm:gap-12 pt-8 text-sm text-muted-foreground animate-fade-in">
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-accent" />
              <span>GDPR Compliant</span>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-accent" />
              <span>2,400+ Companies</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="h-5 w-5 text-accent" />
              <span>50% Time Saved</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
