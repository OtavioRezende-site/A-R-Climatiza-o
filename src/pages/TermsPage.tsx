import { siteConfig } from '../config/siteConfig';
import SEOHead from '../components/SEOHead';
import Breadcrumbs from '../components/Breadcrumbs';

interface TermsPageProps {
  onNavigate: (path: string) => void;
}

export default function TermsPage({ onNavigate }: TermsPageProps) {
  return (
    <>
      <SEOHead
        title="Termos de Uso | A R Climatização"
        description="Termos e condições de uso do website institucional da A R Climatização."
        path="/termos"
      />

      {/* Header gradient */}
      <div className="bg-gradient-to-b from-[#07111B] via-[#0D2233] to-white pt-28 pb-10">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Termos de Uso' }]} onNavigate={onNavigate} />

          <div className="mt-8 space-y-3">
            <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Termos de Uso
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
            <h2 className="text-lg font-bold text-slate-900">1. Aceitação dos Termos</h2>
            <p>
              Ao acessar e utilizar este website, você concorda com as condições descritas nestes Termos de Uso. Caso não concorde, recomendamos não utilizar a plataforma.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900">2. Natureza Informativa</h2>
            <p>
              As informações disponibilizadas neste website têm finalidade exclusivamente informativa sobre a atuação da <strong className="text-slate-900">{siteConfig.name}</strong> na prestação de serviços de climatização e refrigeração. A confirmação de disponibilidade de atendimento e condições deve ser sempre obtida diretamente pelos canais oficiais de contato.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900">3. Propriedade Intelectual</h2>
            <p>
              O design, textos, códigos e elementos visuais deste website pertencem à empresa ou foram licenciados para seu uso, sendo vedada a reprodução total ou parcial sem autorização prévia.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900">4. Links Externos</h2>
            <p>
              O website pode conter links para serviços externos, tais como Google Maps e WhatsApp. Não nos responsabilizamos pelas políticas de privacidade ou práticas de terceiros.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900">5. Legislação Aplicável</h2>
            <p>
              Estes termos são regidos pelas leis da República Federativa do Brasil, fixando-se a comarca do Rio de Janeiro - RJ para dirimir eventuais controvérsias.
            </p>
          </section>
        </div>
      </div>
    </>
  );
}
