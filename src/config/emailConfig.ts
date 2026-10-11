export type EmailProvider = 'web3forms' | 'formspree' | 'emailjs' | 'mock';

export interface EmailServiceConfig {
  provider: EmailProvider;
  recipientEmail: string;
  web3formsAccessKey?: string;
  formspreeEndpoint?: string;
  emailjs?: {
    serviceId: string;
    templateId: string;
    publicKey: string;
  };
}

export const emailConfig: EmailServiceConfig = {
  // Can be configured via environment variables or hardcoded below
  provider:
    (import.meta.env.VITE_EMAIL_PROVIDER as EmailProvider) ||
    (import.meta.env.VITE_WEB3FORMS_ACCESS_KEY
      ? 'web3forms'
      : import.meta.env.VITE_FORMSPREE_ENDPOINT
      ? 'formspree'
      : 'web3forms'),

  recipientEmail: 'kanaseabhimanyu@gmail.com',

  // Web3Forms Access Key
  web3formsAccessKey:
    import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || '860e253a-715a-4fc4-ae36-c6a63ad5a006',

  // Formspree Form ID/Endpoint (e.g. 'https://formspree.io/f/xyzyqwea')
  formspreeEndpoint: import.meta.env.VITE_FORMSPREE_ENDPOINT || '',

  // EmailJS credentials (if using EmailJS)
  emailjs: {
    serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || '',
    templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '',
    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '',
  },
};
