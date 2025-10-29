import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, TrendingDown, ArrowRight, Target, Zap, Users, DollarSign } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Demo() {
  const navigate = useNavigate();

  const metrics = [
    {
      name: 'Activation Rate',
      value: '34%',
      percentile: 42,
      trend: '+2.3%',
      industryMedian: '41%',
      impact: 'high',
      icon: Users,
    },
    {
      name: 'Feature Adoption',
      value: '58%',
      percentile: 68,
      trend: '+5.1%',
      industryMedian: '52%',
      impact: 'medium',
      icon: Target,
    },
    {
      name: 'Conversion Rate',
      value: '2.8%',
      percentile: 35,
      trend: '-0.4%',
      industryMedian: '3.7%',
      impact: 'critical',
      icon: TrendingDown,
    },
    {
      name: 'Revenue per User',
      value: '€127',
      percentile: 71,
      trend: '+8.2%',
      industryMedian: '€98',
      impact: 'low',
      icon: DollarSign,
    },
  ];

  const opportunities = [
    {
      title: 'Optimize Signup Flow',
      potentialARR: '€84,000',
      priority: 'Critical',
      confidence: '87%',
      description: 'Your signup conversion is 28% below median. Simplifying the flow could recover significant revenue.',
    },
    {
      title: 'Improve Onboarding Activation',
      potentialARR: '€52,000',
      priority: 'High',
      confidence: '79%',
      description: 'Users taking 3+ days to activate. European SaaS benchmarks suggest Day 1 activation drives 2.3x retention.',
    },
    {
      title: 'Feature Discovery Enhancement',
      potentialARR: '€31,000',
      priority: 'Medium',
      confidence: '71%',
      description: 'Power users engage 4.2x more features. Your median user only discovers 2 features in first week.',
    },
  ];

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case 'critical':
        return 'destructive';
      case 'high':
        return 'destructive';
      case 'medium':
        return 'default';
      default:
        return 'secondary';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'Critical':
        return 'destructive';
      case 'High':
        return 'destructive';
      default:
        return 'default';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <TrendingUp className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold text-foreground">Prioris</span>
            <Badge variant="secondary" className="ml-2">Demo</Badge>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline" onClick={() => navigate('/')}>
              Exit Demo
            </Button>
            <Button onClick={() => navigate('/auth')}>
              Start Free Trial
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <section className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-sm font-medium text-accent mb-4">
            <Zap className="h-4 w-4" />
            Live Demo - Acme SaaS Company
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-2">
            Product Intelligence Dashboard
          </h1>
          <p className="text-xl text-muted-foreground">
            Your metrics vs. 2,400+ European B2B SaaS companies
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {metrics.map((metric) => {
            const Icon = metric.icon;
            return (
              <Card key={metric.name} className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div>
                      <CardDescription className="text-xs uppercase tracking-wide">
                        {metric.name}
                      </CardDescription>
                      <CardTitle className="text-3xl font-bold mt-2">
                        {metric.value}
                      </CardTitle>
                    </div>
                    <Icon className="h-8 w-8 text-muted-foreground opacity-50" />
                  </div>
                  <div className="flex items-center gap-2 mt-2">
                    {metric.trend.startsWith('+') ? (
                      <TrendingUp className="h-4 w-4 text-success" />
                    ) : (
                      <TrendingDown className="h-4 w-4 text-destructive" />
                    )}
                    <span className={metric.trend.startsWith('+') ? 'text-success' : 'text-destructive'}>
                      {metric.trend}
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-muted-foreground">vs Industry</span>
                        <span className="font-medium">{metric.percentile}th percentile</span>
                      </div>
                      <Progress value={metric.percentile} className="h-2" />
                    </div>
                    <div className="pt-2 border-t">
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-muted-foreground">Industry Median</span>
                        <span className="font-medium">{metric.industryMedian}</span>
                      </div>
                      <Badge variant={getImpactColor(metric.impact)} className="mt-2 text-xs">
                        {metric.impact.toUpperCase()} IMPACT
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Opportunities */}
        <Card className="mb-12">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-2xl">Priority Opportunities</CardTitle>
                <CardDescription className="text-base mt-1">
                  AI-identified improvements ranked by revenue impact
                </CardDescription>
              </div>
              <Badge variant="secondary" className="text-sm px-3 py-1">
                3 Opportunities
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {opportunities.map((opportunity, index) => (
                <Card key={index} className="border-l-4 border-l-primary">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <CardTitle className="text-lg">{opportunity.title}</CardTitle>
                          <Badge variant={getPriorityColor(opportunity.priority)}>
                            {opportunity.priority}
                          </Badge>
                        </div>
                        <CardDescription className="text-base">
                          {opportunity.description}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div className="flex gap-6">
                        <div>
                          <p className="text-sm text-muted-foreground">Potential ARR Impact</p>
                          <p className="text-2xl font-bold text-accent">{opportunity.potentialARR}</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">AI Confidence</p>
                          <p className="text-xl font-semibold">{opportunity.confidence}</p>
                        </div>
                      </div>
                      <Button variant="outline" className="gap-2">
                        Analyze Impact
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* CTA Section */}
        <Card className="bg-gradient-to-br from-primary/10 via-background to-accent/10 border-2 border-primary/20">
          <CardContent className="py-12 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Ready to prioritize with confidence?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Get your own AI-powered dashboard with live benchmarks from 2,400+ European B2B SaaS companies
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" onClick={() => navigate('/auth')} className="gap-2">
                Start Free Trial
                <ArrowRight className="h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" onClick={() => navigate('/')}>
                Learn More
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}