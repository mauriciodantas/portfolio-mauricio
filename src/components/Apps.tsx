import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

export function Apps() {
  const { t } = useLanguage();

  const apps = [
    {
      id: 'datapanel',
      icon: '📊',
      name: 'Data Panel',
      packageId: 'net.mdantas.datapanel',
      platform: t('Android', 'Android'),
      desc: t(
        'Aplicativo Android que reúne informações do dispositivo e de serviços conectados em um painel de leitura rápida, publicado na Google Play.',
        'Android app that gathers device and connected-service information into a quick-read panel, published on Google Play.'
      ),
      url: 'https://play.google.com/store/apps/details?id=net.mdantas.datapanel',
    },
    {
      id: 'mdwatchfaces',
      icon: '⌚',
      name: 'MD Watch Faces',
      packageId: 'net.mdantas.mdwatchfaces',
      platform: t('Wear OS', 'Wear OS'),
      desc: t(
        'Coleção de watch faces para Wear OS construídas em Watch Face Format (WFF), com complications configuráveis e temas personalizáveis.',
        'Collection of Wear OS watch faces built with Watch Face Format (WFF), featuring configurable complications and customizable themes.'
      ),
      url: 'https://play.google.com/store/apps/details?id=net.mdantas.mdwatchfaces',
    },
  ];

  return (
    <section id="apps" className="bg-bg-primary py-32 px-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-20">
          <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-[0.3em] mb-4 block">
            {t('06. APPS PUBLICADOS', '06. PUBLISHED APPS')}
          </span>
          <h2 className="text-4xl font-bold tracking-tight">
            {t('Apps na ', 'Apps on ')}
            <span className="text-zinc-600">{t('Google Play', 'Google Play')}</span>
          </h2>
          <p className="mt-6 text-zinc-500 font-mono text-[11px] max-w-2xl leading-relaxed">
            {t(
              'Aplicativos autorais publicados na Google Play Store, do conceito ao lançamento: desenvolvimento, design e manutenção.',
              'Personal apps published on the Google Play Store, from concept to release: development, design and maintenance.'
            )}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {apps.map((app, i) => (
            <motion.a
              key={app.id}
              href={app.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group flex flex-col p-8 bg-zinc-950 border-2 border-zinc-900 hover:border-accent-green transition-all relative overflow-hidden"
            >
              {/* Pixel corner accents */}
              <div className="absolute top-0 left-0 w-1 h-1 bg-zinc-800" />
              <div className="absolute top-0 right-0 w-1 h-1 bg-zinc-800 group-hover:bg-accent-green" />
              <div className="absolute bottom-0 left-0 w-1 h-1 bg-zinc-800" />
              <div className="absolute bottom-0 right-0 w-1 h-1 bg-zinc-800" />

              <div className="relative z-10 flex flex-col h-full">
                <div className="flex justify-between items-start mb-6">
                  <div className="w-10 h-10 bg-zinc-900 border-2 border-zinc-800 flex items-center justify-center text-xl group-hover:border-accent-green transition-colors">
                    {app.icon}
                  </div>
                  <div className="flex items-center gap-1.5 font-mono text-[8px] text-zinc-500 bg-zinc-900 px-2 py-1 border border-zinc-800 uppercase tracking-wider">
                    {app.platform}
                  </div>
                </div>

                <h3 className="text-pixel text-[10px] text-white mb-2 group-hover:text-accent-green transition-colors">
                  {app.name}
                </h3>

                <p className="font-mono text-[9px] text-zinc-600 mb-4 break-all">
                  {app.packageId}
                </p>

                <p className="text-[11px] text-zinc-500 leading-relaxed font-mono mb-8">
                  {app.desc}
                </p>

                <div className="flex items-center justify-between mt-auto pt-6 border-t-2 border-zinc-900">
                  <div className="flex items-center gap-2 font-mono text-[9px] text-zinc-500 uppercase tracking-widest">
                    <div className="w-1.5 h-1.5 bg-accent-green" />
                    {t('VER NA PLAY STORE', 'VIEW ON PLAY STORE')}
                  </div>
                  <div className="text-accent-green opacity-0 group-hover:opacity-100 transition-opacity">
                    <ExternalLink size={12} />
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
