export type DeploymentCategory = "Landing Pages" | "Google Ads" | "Meta" | "CRM" | "Tracking" | "CRO" | "SEO";

export interface Deployment {
  id: string;
  slug: string;
  title: string;
  category: DeploymentCategory;
  businessType: string;
  route: string;
  primaryLeak: string;
  deploymentType: string;
  kpiPrimary: {
    label: string;
    value: string;
    direction: "up" | "down";
  };
  kpiSecondary: {
    label: string;
    value: string;
    direction: "up" | "down";
  };
  timeline: string;
  painPoints: string[];
  systemBuilt: string[];
  operatorInsight: string;
  featured: boolean;
}
