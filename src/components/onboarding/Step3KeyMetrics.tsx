import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { OnboardingData } from '@/pages/Onboarding';
import { Target } from 'lucide-react';

interface Step3Props {
  data: OnboardingData;
  updateData: (data: Partial<OnboardingData>) => void;
}

const metrics = [
  { id: 'conversion', name: 'Conversion Rate', description: 'Signup to activation conversion' },
  { id: 'activation', name: 'Activation Rate', description: 'Users completing key actions' },
  { id: 'retention', name: 'Retention Rate', description: 'Users returning over time' },
  { id: 'feature_adoption', name: 'Feature Adoption', description: 'Usage of specific features' },
  { id: 'engagement', name: 'User Engagement', description: 'Active users and session metrics' },
  { id: 'revenue', name: 'Revenue Metrics', description: 'MRR, ARR, and expansion' },
  { id: 'churn', name: 'Churn Rate', description: 'User and revenue churn' },
  { id: 'time_to_value', name: 'Time to Value', description: 'Speed to first value delivery' },
];

export const Step3KeyMetrics = ({ data, updateData }: Step3Props) => {
  const toggleMetric = (metricId: string) => {
    const currentMetrics = data.keyMetrics || [];
    const newMetrics = currentMetrics.includes(metricId)
      ? currentMetrics.filter((m) => m !== metricId)
      : [...currentMetrics, metricId];
    updateData({ keyMetrics: newMetrics });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 rounded-lg bg-primary/10">
          <Target className="h-6 w-6 text-primary" />
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-foreground">Key Metrics</h2>
          <p className="text-muted-foreground">
            Which metrics are most important to your team?
          </p>
        </div>
      </div>

      <div className="space-y-4">
        {metrics.map((metric) => (
          <div
            key={metric.id}
            className="flex items-start space-x-3 p-4 rounded-lg border border-border hover:bg-accent/5 transition-colors cursor-pointer"
            onClick={() => toggleMetric(metric.id)}
          >
            <Checkbox
              id={metric.id}
              checked={data.keyMetrics?.includes(metric.id)}
              onCheckedChange={() => toggleMetric(metric.id)}
              className="mt-1"
            />
            <div className="flex-1">
              <Label
                htmlFor={metric.id}
                className="text-base font-medium cursor-pointer"
              >
                {metric.name}
              </Label>
              <p className="text-sm text-muted-foreground">{metric.description}</p>
            </div>
          </div>
        ))}
      </div>

      <p className="text-sm text-muted-foreground">
        * Select at least one metric to continue
      </p>
    </div>
  );
};