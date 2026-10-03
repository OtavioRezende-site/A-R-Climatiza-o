/**
 * Configuração centralizada da A R Climatização.
 * Todos os dados confirmados do negócio centralizados em um único ponto.
 * Campos não confirmados permanecem estritamente nulos, conforme diretrizes.
 */

export interface SiteConfig {
  name: string;
  shortName: string;
  category: string;
  secondaryCategory: string;
  phoneDisplay: string;
  phoneE164: string;
  whatsapp: string;
  whatsappUrl: string;
  whatsappDefaultMessage: string;
  address: string;
  street: string;
  number: string;
  neighborhood: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  googleMapsUrl: string;
  googleRating: number;
  googleReviewCount: number;
  hours: {
    monday: string;
    tuesday: string;
    wednesday: string;
    thursday: string;
    friday: string;
    saturday: string;
    sunday: string;
  };
  primaryCTA: string;
  secondaryCTA: string;
  email: string | null;
  instagram: string | null;
  facebook: string | null;
  ghlLocationId: string | null;
  ghlFormId: string | null;
  ghlChatScript: string | null;
}

export const siteConfig: SiteConfig = {
  name: 'A R Climatização',
  shortName: 'A R Climatização',
  category: 'Prestador de serviços de climatização',
  secondaryCategory: 'Serviço de refrigeração',
  phoneDisplay: '+55 21 96406-4318',
  phoneE164: '+5521964064318',
  whatsapp: '5521964064318',
  whatsappUrl: 'https://wa.me/5521964064318',
  whatsappDefaultMessage: 'Olá, encontrei a A R Climatização pelo site e gostaria de informações sobre atendimento de climatização.',
  address: 'R. Jauaperi, 106 - Cascadura, Rio de Janeiro - RJ, 21311-260, Brasil',
  street: 'R. Jauaperi',
  number: '106',
  neighborhood: 'Cascadura',
  city: 'Rio de Janeiro',
  state: 'RJ',
  postalCode: '21311-260',
  country: 'Brasil',
  googleMapsUrl: 'https://maps.app.goo.gl/UvegouLJ1SoM4i2A9?g_st=ac',
  googleRating: 5.0,
  googleReviewCount: 89,
  hours: {
    monday: '08:00–18:00',
    tuesday: '08:00–18:00',
    wednesday: '08:00–18:00',
    thursday: '08:00–18:00',
    friday: '08:00–18:00',
    saturday: '08:00–13:00',
    sunday: 'Fechado'
  },
  primaryCTA: 'Solicitar Atendimento',
  secondaryCTA: 'Ligar agora',
  // Campos não confirmados — mantidos como null sem inventar dados
  email: null,
  instagram: null,
  facebook: null,
  ghlLocationId: null,
  ghlFormId: 'V2getowmokHr4p59Ke9V',
  ghlChatScript: '6abe750893bdc8881e8ca6ba'
};

export const GHL_FORM_URL = 'https://api.leadconnectorhq.com/widget/form/V2getowmokHr4p59Ke9V';
export const GHL_WIDGET_ID = '6abe750893bdc8881e8ca6ba';

export const getPhoneLink = () => {
  return `tel:${siteConfig.phoneE164}`;
};
