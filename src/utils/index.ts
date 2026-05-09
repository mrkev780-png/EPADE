/**
 * Combiner classNames
 */
export const cn = (...classes: (string | undefined | null | false)[]) => {
  return classes.filter(Boolean).join(' ');
};

/**
 * Formater une date
 */
export const formatDate = (date: string | Date, locale = 'fr-FR'): string => {
  const d = new Date(date);
  return d.toLocaleDateString(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

/**
 * Truncate text
 */
export const truncateText = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + '...';
};

/**
 * Scroll to element
 */
export const scrollToElement = (elementId: string) => {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

/**
 * Valider email
 */
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Animer des compteurs
 */
export const animateCounter = (
  target: number,
  duration: number = 2000
): Promise<void> => {
  return new Promise((resolve) => {
    const startTime = Date.now();

    const update = () => {
      const now = Date.now();
      const progress = Math.min((now - startTime) / duration, 1);
      
      // Mettre à jour le DOM ici si nécessaire
      
      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        resolve();
      }
    };

    update();
  });
};
