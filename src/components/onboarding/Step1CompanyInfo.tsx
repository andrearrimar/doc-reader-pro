import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { OnboardingData } from '@/pages/Onboarding';
import { Building2 } from 'lucide-react';

interface Step1Props {
  data: OnboardingData;
  updateData: (data: Partial<OnboardingData>) => void;
}

export const Step1CompanyInfo = ({ data, updateData }: Step1Props) => {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 rounded-lg bg-primary/10">
          <Building2 className="h-6 w-6 text-primary" />
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-foreground">Company Information</h2>
          <p className="text-muted-foreground">Tell us about your company</p>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="companyName">Company Name *</Label>
        <Input
          id="companyName"
          value={data.companyName}
          onChange={(e) => updateData({ companyName: e.target.value })}
          placeholder="Acme Inc."
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="companySize">Company Size *</Label>
        <Select
          value={data.companySize}
          onValueChange={(value) => updateData({ companySize: value })}
        >
          <SelectTrigger id="companySize">
            <SelectValue placeholder="Select company size" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="startup">Startup (1-10 employees)</SelectItem>
            <SelectItem value="small">Small (11-50 employees)</SelectItem>
            <SelectItem value="medium">Medium (51-200 employees)</SelectItem>
            <SelectItem value="large">Large (201-1000 employees)</SelectItem>
            <SelectItem value="enterprise">Enterprise (1000+ employees)</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="vertical">Industry *</Label>
        <Select
          value={data.vertical}
          onValueChange={(value) => updateData({ vertical: value })}
        >
          <SelectTrigger id="vertical">
            <SelectValue placeholder="Select industry" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="saas">SaaS</SelectItem>
            <SelectItem value="fintech">Fintech</SelectItem>
            <SelectItem value="ecommerce">E-commerce</SelectItem>
            <SelectItem value="healthtech">Healthtech</SelectItem>
            <SelectItem value="edtech">Edtech</SelectItem>
            <SelectItem value="martech">Martech</SelectItem>
            <SelectItem value="hrtech">HRtech</SelectItem>
            <SelectItem value="proptech">Proptech</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="website">Website</Label>
        <Input
          id="website"
          type="url"
          value={data.website}
          onChange={(e) => updateData({ website: e.target.value })}
          placeholder="https://acme.com"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="jobTitle">Your Job Title</Label>
        <Input
          id="jobTitle"
          value={data.jobTitle}
          onChange={(e) => updateData({ jobTitle: e.target.value })}
          placeholder="Product Manager"
        />
      </div>
    </div>
  );
};