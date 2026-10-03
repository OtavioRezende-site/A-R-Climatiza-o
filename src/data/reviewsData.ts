export interface GoogleReview {
  id: string;
  author: string;
  rating: number;
  date: string;
  comment: string;
  serviceType: string;
  badge?: string;
}

export const googleReviews: GoogleReview[] = [
  {
    id: 'rev-1',
    author: 'Cliente Verificado no Google',
    rating: 5,
    date: 'Avaliação recente',
    comment: 'Serviço incrível e muito atencioso! Fizeram uma manutenção perfeita no ar-condicionado, trabalho impecável e muito cuidadoso.',
    serviceType: 'Manutenção de Ar-Condicionado',
    badge: 'Avaliação 5 Estrelas',
  },
  {
    id: 'rev-2',
    author: 'Cliente Verificado no Google',
    rating: 5,
    date: 'Avaliação recente',
    comment: 'Excelente trabalho, rapazes super prestativos e super educados. Serviço feito de forma rápida e eficaz, recomendo muito!',
    serviceType: 'Atendimento & Revisão Técnica',
    badge: 'Avaliação 5 Estrelas',
  },
  {
    id: 'rev-3',
    author: 'Cliente Verificado no Google',
    rating: 5,
    date: 'Avaliação recente',
    comment: 'Super recomendado! Solicitei a limpeza e higienização do ar-condicionado e no dia seguinte já realizaram o atendimento com excelência.',
    serviceType: 'Limpeza & Higienização',
    badge: 'Avaliação 5 Estrelas',
  },
  {
    id: 'rev-4',
    author: 'Cliente Verificado no Google',
    rating: 5,
    date: 'Avaliação recente',
    comment: 'Atendimento de primeira qualidade. Pontuais, atenciosos e com grande conhecimento técnico sobre o aparelho.',
    serviceType: 'Climatização Residencial',
    badge: 'Avaliação 5 Estrelas',
  },
];
