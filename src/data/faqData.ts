import { FAQItem } from '../types';
import { siteConfig } from '../config/siteConfig';

export const faqItems: FAQItem[] = [
  {
    id: 'contato',
    question: 'Como entrar em contato com a A R Climatização?',
    answer: `Você pode entrar em contato preenchendo o formulário de atendimento no site ou clicando no botão para fazer uma ligação telefônica direta. Você também pode utilizar o chat online no canto da tela para falar com a equipe.`,
  },
  {
    id: 'localizacao',
    question: 'Onde a A R Climatização está localizada?',
    answer: `A empresa está localizada na ${siteConfig.address}, no bairro de Cascadura, na cidade do Rio de Janeiro - RJ (CEP: ${siteConfig.postalCode}).`,
  },
  {
    id: 'horarios',
    question: 'Qual é o horário de atendimento?',
    answer: `Nosso horário confirmado de atendimento é de Segunda a Sexta-feira das 08:00 às 18:00, e aos Sábados das 08:00 às 13:00. Aos Domingos estamos fechados.`,
  },
  {
    id: 'tipos-aparelho',
    question: 'A empresa trabalha com diferentes tipos de ar-condicionado?',
    answer: `Sim. A A R Climatização atua com diferentes modelos e tipos de ar-condicionado na área de climatização e refrigeração.`,
  },
  {
    id: 'confirmar-atendimento',
    question: 'Como confirmar se a A R Climatização atende o meu tipo de necessidade ou equipamento?',
    answer: `Recomendamos preencher o formulário de atendimento do site informando o modelo do seu aparelho e sua necessidade, ou clicar no botão de ligação para falar com nossa equipe comercial.`,
  },
];
