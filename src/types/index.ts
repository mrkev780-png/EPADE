/* === MISSION DATA TYPES === */
export interface Mission {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
}

/* === NEWS DATA TYPES === */
export interface NewsArticle {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: 'Presse' | 'Rapports' | 'Événements';
  imageUrl: string;
  date: string;
  author: string;
}

/* === TEAM MEMBER TYPES === */
export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
}

/* === PARTNER TYPES === */
export interface Partner {
  id: string;
  name: string;
  logo: string;
  url: string;
}

/* === CONTACT FORM TYPES === */
export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

/* === PAGINATION TYPES === */
export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}
