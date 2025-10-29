import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { OnboardingData } from '@/pages/Onboarding';
import { Zap } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';

interface Step4Props {
  data: OnboardingData;
  updateData: (data: Partial<OnboardingData>) => void;
}

export const Step4Analytics = ({ data, updateData }: Step4Props) => {
  const handleToolChange = (tool: string) => {
    updateData({
      analyticsConnection: {
        ...data.analyticsConnection,
        tool,
      },
    });
  };

  const handleApiKeyChange = (apiKey: string) => {
    updateData({
      analyticsConnection: {
        ...data.analyticsConnection,
        tool: data.analyticsConnection?.tool || '',
        apiKey,
      },
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 rounded-lg bg-primary/10">
          <Zap className="h-6 w-6 text-primary" />
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-foreground">
            Connect Analytics
          </h2>
          <p className="text-muted-foreground">
            Connect your analytics tool to start getting insights
          </p>
        </div>
      </div>

      <Alert>
        <AlertDescription>
          This step is optional. You can skip it and connect your analytics later from the dashboard.
        </AlertDescription>
      </Alert>

      <div className="space-y-2">
        <Label htmlFor="analytics-tool">Analytics Tool</Label>
        <Select
          value={data.analyticsConnection?.tool}
          onValueChange={handleToolChange}
        >
          <SelectTrigger id="analytics-tool">
            <SelectValue placeholder="Select a tool" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="amplitude">Amplitude</SelectItem>
            <SelectItem value="mixpanel">Mixpanel</SelectItem>
            <SelectItem value="google_analytics">Google Analytics</SelectItem>
            <SelectItem value="segment">Segment</SelectItem>
            <SelectItem value="heap">Heap</SelectItem>
            <SelectItem value="posthog">PostHog</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {data.analyticsConnection?.tool && (
        <div className="space-y-2">
          <Label htmlFor="api-key">API Key</Label>
          <Input
            id="api-key"
            type="password"
            value={data.analyticsConnection?.apiKey || ''}
            onChange={(e) => handleApiKeyChange(e.target.value)}
            placeholder="Enter your API key"
          />
          <p className="text-xs text-muted-foreground">
            Your API key will be encrypted and stored securely
          </p>
        </div>
      )}

      <div className="pt-4 border-t">
        <p className="text-sm text-muted-foreground">
          Don't have an API key? You can complete this step later from your dashboard settings.
        </p>
      </div>
    </div>
  );
};