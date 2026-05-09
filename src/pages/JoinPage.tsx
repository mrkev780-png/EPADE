import React from 'react';
import { Button, Input, TextArea, Accordion, Alert } from '@components';
import { useForm } from '@hooks';
import { isValidEmail } from '@utils';
import { ContactFormData } from '@types';

/**
 * Page Nous Rejoindre (Contact & Join)
 */
export const JoinPage: React.FC = () => {
  const [submitStatus, setSubmitStatus] = React.useState<'idle' | 'success' | 'error'>('idle');
  
  const { values, errors, handleChange, handleBlur, resetForm } = useForm<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const faqItems = [
    {
      id: 'faq-1',
      title: 'Comment puis-je devenir membre ?',
      content: 'Vous pouvez remplir le formulaire de candidature ci-dessous ou nous contacter directement à membership@ompdd.org pour discuter de votre profil.',
    },
    {
      id: 'faq-2',
      title: 'Quels sont les avantages du partenariat ?',
      content: 'Les partenaires bénéficient d\'une visibilité accrue, d\'accès à nos réseaux globaux, et d\'opportunités de collaboration sur des projets d\'impact.',
    },
    {
      id: 'faq-3',
      title: 'Comment puis-je faire un don ?',
      content: 'Nous acceptons les dons par virement bancaire, carte de crédit, ou transfert mobile. Consultez notre page Donations pour plus de détails.',
    },
    {
      id: 'faq-4',
      title: 'Quelles sont les opportunités de bénévolat ?',
      content: 'Nous proposons diverses opportunités de bénévolat, du télétravail à la participation in situ. Contactez-nous pour explorer les options disponibles.',
    },
  ];

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!values.name.trim()) newErrors.name = 'Le nom est requis';
    if (!isValidEmail(values.email)) newErrors.email = 'Veuillez entrer un email valide';
    if (!values.subject.trim()) newErrors.subject = 'Le sujet est requis';
    if (!values.message.trim()) newErrors.message = 'Le message est requis';
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setSubmitStatus('error');
      return;
    }
    // Simulate submission
    setSubmitStatus('success');
    resetForm();
    setTimeout(() => setSubmitStatus('idle'), 5000);
  };

  return (
    <main>
      {/* Hero */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Nous Rejoindre
          </h1>
          <p className="text-xl text-primary-100">
            Ensemble, nous pouvons créer un impact positif sur le monde.
          </p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 md:py-24 bg-neutral-50">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="text-3xl font-bold text-neutral-900 mb-8">
            Formulaire de Contact
          </h2>

          {submitStatus === 'success' && (
            <Alert
              type="success"
              title="Message envoyé avec succès"
              message="Nous vous remercions de votre intérêt. Notre équipe vous contactera dans les 48 heures."
              onClose={() => setSubmitStatus('idle')}
              className="mb-6"
            />
          )}

          {submitStatus === 'error' && (
            <Alert
              type="error"
              title="Erreur de validation"
              message="Veuillez vérifier tous les champs et réessayer."
              onClose={() => setSubmitStatus('idle')}
              className="mb-6"
            />
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <Input
              id="name"
              label="Nom complet"
              name="name"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.name}
              required
            />

            <Input
              id="email"
              label="Adresse email"
              name="email"
              type="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.email}
              required
            />

            <Input
              id="subject"
              label="Sujet"
              name="subject"
              value={values.subject}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.subject}
              required
            />

            <TextArea
              id="message"
              label="Message"
              name="message"
              value={values.message}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.message}
              required
            />

            <div className="flex gap-4 pt-6">
              <Button type="submit" size="lg" variant="primary" fullWidth>
                Envoyer le message
              </Button>
              <Button
                type="button"
                size="lg"
                variant="secondary"
                fullWidth
                onClick={resetForm}
              >
                Réinitialiser
              </Button>
            </div>
          </form>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-neutral-900 mb-12 text-center">
            Nos Coordonnées
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">📧</div>
              <h3 className="font-bold text-neutral-900 mb-2">Email</h3>
              <a
                href="mailto:contact@ompdd.org"
                className="text-primary-600 hover:text-primary-700"
              >
                contact@ompdd.org
              </a>
              <br />
              <a
                href="mailto:membership@ompdd.org"
                className="text-primary-600 hover:text-primary-700 text-sm"
              >
                membership@ompdd.org
              </a>
            </div>

            <div className="text-center">
              <div className="text-5xl mb-4">📞</div>
              <h3 className="font-bold text-neutral-900 mb-2">Téléphone</h3>
              <a href="tel:+41225000000" className="text-primary-600 hover:text-primary-700">
                +41 (22) 500-0000
              </a>
              <p className="text-sm text-neutral-600 mt-2">
                Lundi-Vendredi: 9h-17h CET
              </p>
            </div>

            <div className="text-center">
              <div className="text-5xl mb-4">📍</div>
              <h3 className="font-bold text-neutral-900 mb-2">Siège Social</h3>
              <p className="text-neutral-600">
                123 Rue de la Paix<br />
                1200 Geneva<br />
                Suisse
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-neutral-50">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="text-3xl font-bold text-neutral-900 mb-8 text-center">
            Questions Fréquemment Posées
          </h2>
          <Accordion items={faqItems} />
        </div>
      </section>

      {/* Opportunities */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-neutral-900 mb-12 text-center">
            Opportunités de Participation
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '🤝', title: 'Partenariat', desc: 'Collaborer avec nos programmes' },
              { icon: '💰', title: 'Donation', desc: 'Soutenir nos initiatives' },
              { icon: '👥', title: 'Bénévolat', desc: 'Contribuer de votre temps' },
              { icon: '🎓', title: 'Stage', desc: 'Rejoindre notre équipe' },
            ].map((opp, i) => (
              <div key={i} className="text-center p-6 border border-neutral-200 rounded">
                <div className="text-5xl mb-4">{opp.icon}</div>
                <h3 className="font-bold text-neutral-900 mb-2">{opp.title}</h3>
                <p className="text-sm text-neutral-600">{opp.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};
