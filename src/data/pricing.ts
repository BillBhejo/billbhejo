export interface PricingTier {
  name: string;
  price: string;
  description: string;
  features: string[];
  highlighted?: boolean;
}

export const pricingTiers: PricingTier[] = [
  {
    name: "Starter",
    price: "₹499",
    description: "Perfect for small businesses just getting started",
    features: [
      "Up to 10 invoices per month",
      "Basic invoice template",
      "WhatsApp Pay integration",
      "Email support",
    ],
  },
  {
    name: "Professional",
    price: "₹999",
    description: "For growing businesses with more needs",
    features: [
      "Up to 50 invoices per month",
      "Custom invoice templates",
      "Priority WhatsApp support",
      "Business analytics",
      "Multiple business profiles",
    ],
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large businesses with custom requirements",
    features: [
      "Unlimited invoices",
      "Custom integration support",
      "Dedicated account manager",
      "API access",
      "Advanced analytics",
      "Custom features on request",
    ],
  },
];
