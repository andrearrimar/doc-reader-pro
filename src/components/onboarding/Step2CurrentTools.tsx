import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { OnboardingData } from '@/pages/Onboarding';
import { BarChart3 } from 'lucide-react';

interface Step2Props {
  data: OnboardingData;
  updateData: (data: Partial<OnboardingData>) => void;
}

const tools = [
  { id: 'amplitude', name: 'Amplitude', description: 'Product analytics platform' },
  { id: 'mixpanel', name: 'Mixpanel', description: 'User analytics and engagement' },
  { id: 'google_analytics', name: 'Google Analytics', description: 'Web analytics service' },
  { id: 'segment', name: 'Segment', description: 'Customer data platform' },
  { id: 'heap', name: 'Heap', description: 'Digital insights platform' },
  { id: 'posthog', name: 'PostHog', description: 'Open-source product analytics' },
];

export const Step2CurrentTools = ({ data, updateData }: Step2Props) => {
  const toggleTool = (toolId: string) => {
    const currentTools = data.currentTools || [];
    const newTools = currentTools.includes(toolId)
      ? currentTools.filter((t) => t !== toolId)
      : [...currentTools, toolId];
    updateData({ currentTools: newTools });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 rounded-lg bg-primary/10">
          <BarChart3 className="h-6 w-6 text-primary" />
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-foreground">Current Tools</h2>
          <p className="text-muted-foreground">
            Which analytics tools do you currently use?
          </p>
        </div>
      </div>

      <div className="space-y-4">
        {tools.map((tool) => (
          <div
            key={tool.id}
            className="flex items-start space-x-3 p-4 rounded-lg border border-border hover:bg-accent/5 transition-colors cursor-pointer"
            onClick={() => toggleTool(tool.id)}
          >
            <Checkbox
              id={tool.id}
              checked={data.currentTools?.includes(tool.id)}
              onCheckedChange={() => toggleTool(tool.id)}
              className="mt-1"
            />
            <div className="flex-1">
              <Label
                htmlFor={tool.id}
                className="text-base font-medium cursor-pointer"
              >
                {tool.name}
              </Label>
              <p className="text-sm text-muted-foreground">{tool.description}</p>
            </div>
          </div>
        ))}
      </div>

      <p className="text-sm text-muted-foreground">
        * Select at least one tool to continue
      </p>
    </div>
  );
};