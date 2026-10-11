export interface StoredInquiry {
  id: string;
  timestamp: string;
  formattedDate: string;
  senderName: string;
  senderEmail: string;
  subject: string;
  message: string;
  status: 'queued_for_email_dispatch' | 'dispatched';
}

export const contactInfo = {
  name: 'Abhimanyu Kanase',
  title: 'Data & AI Engineer',
  location: 'Frankfurt am Main, Germany',
  timezone: 'CET / CEST (UTC+1 / UTC+2)',
  email: 'kanaseabhimanyu@gmail.com',
  phone: '+49 155 10835844',
  phoneDisplay: '+49 155 10835844',
  linkedin: 'https://linkedin.com/in/abhimanyukanase',
  linkedinDisplay: 'linkedin.com/in/abhimanyukanase',
  github: 'https://github.com/abhimanyu-kanase',
  availability: 'Open for Working Student & Full-Time AI/Data Engineering Roles in Germany',
  responseCommitment: 'Typically responsive within 12–24 business hours',
};

export const inquiryTopics = [
  'Working Student / Internship Opportunity',
  'Full-Time AI / Data Engineering Role',
  'Multi-Agent LLM / LangGraph Architecture',
  'Cloud Data Pipeline Consulting',
  'Academic / Research Collaboration',
  'General Inquiry / Introduction',
];
