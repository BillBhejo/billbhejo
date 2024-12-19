import { Feature } from '../types';
import { FileText, Zap, CreditCard, CheckCircle } from 'lucide-react';

export const features: Feature[] = [
  {
    name: 'Instant Invoice Generation',
    description: 'Send product details via WhatsApp and get professional PDF invoices instantly.',
    icon: FileText,
  },
  {
    name: 'WhatsApp Pay Integration',
    description: 'Seamless payment collection with pre-filled payment links via WhatsApp Pay.',
    icon: CreditCard,
  },
  {
    name: 'Lightning Fast',
    description: 'Get your invoices within seconds, no delays or complicated processes.',
    icon: Zap,
  },
  {
    name: 'Business Ready',
    description: 'GST-compliant invoices with your business details and branding.',
    icon: CheckCircle,
  },
];