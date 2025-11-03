import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Step1CompanyInfo } from '@/components/onboarding/Step1CompanyInfo';
import { Step2CurrentTools } from '@/components/onboarding/Step2CurrentTools';
import { Step3KeyMetrics } from '@/components/onboarding/Step3KeyMetrics';
import { Step4Analytics } from '@/components/onboarding/Step4Analytics';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';
import { ChevronLeft, ChevronRight, Check } from 'lucide-react';

export interface OnboardingData {
  companyName: string;
  companySize: string;
  vertical: string;
  website: string;
  jobTitle: string;
  currentTools: string[];
  keyMetrics: string[];
  analyticsConnection?: {
    tool: string;
    apiKey?: string;
  };
}

export default function Onboarding() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [data, setData] = useState<OnboardingData>({
    companyName: '',
    companySize: '',
    vertical: '',
    website: '',
    jobTitle: '',
    currentTools: [],
    keyMetrics: [],
  });
  const [isLoading, setIsLoading] = useState(false);

  const totalSteps = 4;
  const progress = (currentStep / totalSteps) * 100;

  useEffect(() => {
    if (!user) {
      navigate('/auth');
      return;
    }

    // Load existing onboarding data if any
    supabase
      .from('profiles')
      .select('onboarding_step, onboarding_completed')
      .eq('id', user.id)
      .single()
      .then(({ data: profile }) => {
        if (profile?.onboarding_completed) {
          // Don't auto-redirect, let user navigate freely
        } else if (profile?.onboarding_step) {
          setCurrentStep(profile.onboarding_step);
        }
      });
  }, [user, navigate]);

  const updateOnboardingStep = async (step: number) => {
    if (!user) return;
    
    await supabase
      .from('profiles')
      .update({ onboarding_step: step })
      .eq('id', user.id);
  };

  const handleNext = async () => {
    if (currentStep < totalSteps) {
      const nextStep = currentStep + 1;
      setCurrentStep(nextStep);
      await updateOnboardingStep(nextStep);
    } else {
      await handleComplete();
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      const prevStep = currentStep - 1;
      setCurrentStep(prevStep);
      updateOnboardingStep(prevStep);
    }
  };

  const handleComplete = async () => {
    if (!user) return;
    
    setIsLoading(true);
    try {
      // Create company
      const { data: company, error: companyError } = await supabase
        .from('companies')
        .insert([{
          name: data.companyName,
          size: data.companySize as 'startup' | 'small' | 'medium' | 'large' | 'enterprise',
          vertical: data.vertical as 'saas' | 'fintech' | 'ecommerce' | 'healthtech' | 'edtech' | 'martech' | 'hrtech' | 'proptech' | 'other',
          website: data.website,
        }])
        .select()
        .single();

      if (companyError) throw companyError;

      // Update profile
      const { error: profileError } = await supabase
        .from('profiles')
        .update({
          company_id: company.id,
          job_title: data.jobTitle,
          onboarding_completed: true,
          onboarding_step: 4,
        })
        .eq('id', user.id);

      if (profileError) throw profileError;

      // Create analytics connection if provided
      if (data.analyticsConnection && data.analyticsConnection.tool) {
        await supabase
          .from('analytics_connections')
          .insert([{
            company_id: company.id,
            tool: data.analyticsConnection.tool as 'amplitude' | 'mixpanel' | 'google_analytics' | 'segment' | 'heap' | 'posthog',
            api_key: data.analyticsConnection.apiKey,
            status: 'pending' as const,
          }]);
      }

      // Assign default user role
      await supabase
        .from('user_roles')
        .insert([{
          user_id: user.id,
          role: 'user' as const,
        }]);

      toast.success('Welcome to Prioris! 🎉');
      navigate('/dashboard');
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : 'Failed to complete onboarding';
      toast.error(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  const updateData = (newData: Partial<OnboardingData>) => {
    setData({ ...data, ...newData });
  };

  const isStepValid = () => {
    switch (currentStep) {
      case 1:
        return data.companyName && data.companySize && data.vertical;
      case 2:
        return data.currentTools.length > 0;
      case 3:
        return data.keyMetrics.length > 0;
      case 4:
        return true; // Step 4 is optional
      default:
        return false;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-accent/5 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Welcome to Prioris
          </h1>
          <p className="text-muted-foreground">
            Let's set up your account - it takes less than 2 minutes
          </p>
          <div className="mt-4">
            <Progress value={progress} className="h-2" />
            <div className="flex justify-between mt-2 text-sm text-muted-foreground">
              <span>Step {currentStep} of {totalSteps}</span>
              <span>{Math.round(progress)}% complete</span>
            </div>
          </div>
        </div>

        <Card>
          <CardContent className="pt-6">
            <div className="flex justify-end mb-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => navigate('/')}
                className="text-muted-foreground"
              >
                Skip for now
              </Button>
            </div>
            {currentStep === 1 && (
              <Step1CompanyInfo data={data} updateData={updateData} />
            )}
            {currentStep === 2 && (
              <Step2CurrentTools data={data} updateData={updateData} />
            )}
            {currentStep === 3 && (
              <Step3KeyMetrics data={data} updateData={updateData} />
            )}
            {currentStep === 4 && (
              <Step4Analytics data={data} updateData={updateData} />
            )}

            <div className="flex justify-between mt-8 pt-6 border-t">
              <Button
                variant="outline"
                onClick={handleBack}
                disabled={currentStep === 1 || isLoading}
              >
                <ChevronLeft className="h-4 w-4 mr-2" />
                Back
              </Button>
              <Button
                onClick={handleNext}
                disabled={!isStepValid() || isLoading}
              >
                {isLoading ? (
                  'Completing...'
                ) : currentStep === totalSteps ? (
                  <>
                    Complete
                    <Check className="h-4 w-4 ml-2" />
                  </>
                ) : (
                  <>
                    Next
                    <ChevronRight className="h-4 w-4 ml-2" />
                  </>
                )}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}