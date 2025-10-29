import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const CTA = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-primary/10 via-background to-accent/10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground">
            Stop Guessing. Start Leading.
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join Product Managers across Europe who've transformed their decision-making
            with AI-powered prioritization and European market intelligence.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button size="lg" className="gap-2 text-lg px-8 py-6">
              Start Your Free Trial
              <ArrowRight className="h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="gap-2 text-lg px-8 py-6">
              Schedule Demo
            </Button>
          </div>

          <p className="text-sm text-muted-foreground pt-4">
            No credit card required • GDPR compliant • EU data hosting
          </p>
        </div>
      </div>
    </section>
  );
};
