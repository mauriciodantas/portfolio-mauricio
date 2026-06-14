import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';

export function PrivacyPolicy() {
  const { t } = useLanguage();

  return (
    <section className="min-h-screen bg-bg-primary py-16 md:py-32 px-4 md:px-8 flex items-center justify-center">
      <div className="max-w-4xl w-full mx-auto bg-zinc-900/40 border-2 border-zinc-800 p-6 md:p-16 backdrop-blur-sm relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-8"
        >
          <div className="flex justify-between items-center border-b-2 border-zinc-800 pb-8 mb-8">
            <div>
              <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-[0.3em] block mb-4">
                {t('LEGAL', 'LEGAL')}
              </span>
              <h1 className="text-pixel text-xl md:text-2xl text-white">
                {t('POLÍTICA DE PRIVACIDADE', 'PRIVACY POLICY')}
              </h1>
            </div>
            <a 
              href="/"
              className="text-[10px] font-mono text-zinc-400 hover:text-white border-2 border-zinc-800 hover:bg-zinc-800 px-4 py-2 transition-colors uppercase tracking-wider"
            >
              {t('VOLTAR', 'GO BACK')}
            </a>
          </div>

          <div className="space-y-8 text-zinc-400 leading-relaxed font-mono text-[11px] md:text-sm">
            
            <section className="space-y-4">
              <h2 className="text-white text-lg border-l-2 border-accent-blue pl-4">
                1. {t('Coleta de Dados', 'Data Collection')}
              </h2>
              <p>
                {t(
                  'Esta política de privacidade aplica-se exclusivamente aos aplicativos e projetos que disponibilizam um link direto para esta página em suas respectivas lojas de aplicativos.',
                  'This privacy policy applies exclusively to applications and projects that provide a direct link to this page in their respective app stores.'
                )}
              </p>
              <p>
                {t(
                  'Os aplicativos sob o escopo desta política não coletam, armazenam, transmitem nem compartilham nenhum dado pessoal do usuário.',
                  'The applications under the scope of this policy do not collect, store, transmit or share any personal user data.'
                )}
              </p>
              <p>
                {t(
                  'As aplicações não possuem rastreamento, análise de comportamento, telemetria ou qualquer outro mecanismo de monitoramento.',
                  'The applications do not have tracking, behavior analysis, telemetry or any other monitoring mechanism.'
                )}
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-white text-lg border-l-2 border-accent-blue pl-4">
                2. {t('Permissões', 'Permissions')}
              </h2>
              <p>
                {t(
                  'Qualquer permissão solicitada pelos aplicativos (como acesso à internet, sensores ou armazenamento local) é estritamente necessária para o funcionamento local e não é utilizada para coleta de dados externos.',
                  'Any permission requested by the applications (such as internet access, sensors or local storage) is strictly necessary for local functionality and is not used for external data collection.'
                )}
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-white text-lg border-l-2 border-accent-blue pl-4">
                3. {t('Contato', 'Contact')}
              </h2>
              <p>
                {t(
                  'Caso tenha qualquer dúvida sobre esta política de privacidade, entre em contato através do email: ',
                  'If you have any questions about this privacy policy, please contact via email: '
                )}
                <a href="mailto:mauricio@mdantas.net" className="text-accent-blue hover:underline">
                  mauricio@mdantas.net
                </a>
              </p>
            </section>

          </div>
          
          <div className="pt-12 mt-12 border-t-2 border-zinc-800 text-[10px] text-zinc-600 font-mono text-center">
            {t('Última atualização: Junho de 2026', 'Last updated: June 2026')}
          </div>

        </motion.div>
      </div>
    </section>
  );
}
