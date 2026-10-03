import { siteConfig } from '../config/siteConfig';
import SEOHead from '../components/SEOHead';
import Breadcrumbs from '../components/Breadcrumbs';

interface PrivacyPolicyPageProps {
  onNavigate: (path: string) => void;
}

export default function PrivacyPolicyPage({ onNavigate }: PrivacyPolicyPageProps) {
  return (
    <>
      <SEOHead
        title="Política de Privacidade | A R Climatização"
        description="Política de Privacidade institucional da A R Climatização, negócio local situado no Rio de Janeiro."
        path="/politica-de-privacidade"
      />

      {/* Header gradient */}
      <div className="bg-gradient-to-b from-[#07111B] via-[#0D2233] to-white pt-28 pb-10">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Política de Privacidade' }]} onNavigate={onNavigate} />

          <div className="mt-8 space-y-3">
            <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Política de Privacidade
            </h1>
            <p className="text-xs text-slate-300">
              Última atualização: {new Date().toLocaleDateString('pt-BR')}
            </p>
          </div>
        </div>
      </div>

      {/* Main Content Area on Pure White Background */}
      <div className="bg-white py-16 text-slate-900">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-8 text-sm leading-relaxed text-slate-700">
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900">1. Informações Gerais</h2>
            <p>
              A <strong className="text-slate-900">{siteConfig.name}</strong>, localizada na {siteConfig.address}, tem o compromisso de respeitar a sua privacidade e zelar pela proteção de quaisquer informações compartilhadas em nossos canais de comunicação.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900">2. Dados Pessoais Coletados</h2>
            <p>
              Este website possui caráter primordialmente informativo. Não coletamos dados sensíveis nem realizamos cadastro obrigatório no site. Ao entrar em contato conosco pelo WhatsApp ou por telefone, as informações enviadas voluntariamente (como nome, telefone ou descrição do equipamento) são utilizadas exclusivamente para viabilizar o atendimento solicitado.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900">3. Finalidade e Compartilhamento</h2>
            <p>
              Os dados fornecidos no contato não são comercializados ou cedidos a terceiros. Eles são empregados unicamente para responder a consultas de serviços na área de climatização e refrigeração.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900">4. Cookies e Tecnologias de Navegação</h2>
            <p>
              O site utiliza apenas recursos estritamente técnicos e de preferência de navegação necessários ao funcionamento da aplicação em navegadores modernos.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900">5. Contato sobre Privacidade</h2>
            <p>
              Para dúvidas relacionadas à privacidade ou tratamento de informações, entre em contato através dos canais de atendimento disponíveis no site.
            </p>
          </section>
        </div>
      </div>
    </>
  );
}
