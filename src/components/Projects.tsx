import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ExternalLink, X } from 'lucide-react';
import { cn } from '../lib/utils';

export function Projects() {
  const { t } = useLanguage();
  const [activeGame, setActiveGame] = useState<string | null>(null);

  const projects = [
    {
      id: 'drones',
      icon: '🎮',
      name: 'AttackOfTheDrones',
      role: t('Game Design & Dev', 'Game Design & Dev'),
      desc: t(
        'Jogo desenvolvido para iOS em Objective-C. Demonstra versatilidade com desenvolvimento mobile além do stack Java, incluindo uma versão web em JavaScript.',
        'Game developed for iOS in Objective-C. Demonstrates versatility in mobile development beyond the Java stack, including a web version in JavaScript.'
      ),
      lang: 'Objective-C',
      url: 'https://github.com/mauriciodantas/AttackOfTheDrones',
      playUrl: 'https://mauriciodantas.github.io/AttackOfTheDrones-web/'
    },
    {
      id: 'nfe',
      icon: '🧾',
      name: 'wmixvideo/nfe',
      role: t('Colaborador', 'Contributor'),
      desc: t(
        'Biblioteca Java para emissão de Nota Fiscal Eletrônica (NF-e) no Brasil. A mais popular do GitHub. Suporta todos os modelos de NFe, NFCe, NFSe e MDF-e.',
        'Java library for issuing Electronic Invoices (NF-e) in Brazil. The most popular on GitHub. Supports all NF-e, NFC-e, NFS-e and MDF-e models.'
      ),
      lang: 'Java',
      license: 'Apache-2.0',
      url: 'https://github.com/wmixvideo/nfe',
      featured: true
    },
     {
      id: 'poi-fluent',
      icon: '📄',
      name: 'wmixlabs/poi-fluent',
      role: t('Colaborador Principal', 'Lead Contributor'),
      desc: t(
        'Extensão fluente para o Apache POI que simplifica a manipulação de documentos Microsoft Office em Java através de uma API encadeável e expressiva.',
        'Fluent extension for Apache POI that simplifies Microsoft Office document manipulation in Java through a chainable and expressive API.'
      ),
      lang: 'Java',
      url: 'https://github.com/wmixlabs/poi-fluent'
    },
    {
      id: 'cotacao',
      icon: '💱',
      name: 'wmixvideo/cotacao',
      role: t('Colaborador', 'Contributor'),
      desc: t(
        'Biblioteca Java para consulta de cotações de moedas e índices financeiros (SELIC, IGPM, Dólar, Euro) diretamente do Banco Central do Brasil.',
        'Java library for querying currency exchange rates and financial indices (SELIC, IGPM, Dollar, Euro) directly from Brazil\'s Central Bank.'
      ),
      lang: 'Java',
      url: 'https://github.com/wmixvideo/cotacao'
    }
  ];

  return (
    <section id="projects" className="bg-bg-primary py-32 px-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-20">
          <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-[0.3em] mb-4 block">
            {t('05. CONTRIBUIÇÕES', '05. CONTRIBUTIONS')}
          </span>
          <h2 className="text-4xl font-bold tracking-tight">
            {t('Contribuições em ', 'Project ')}
            <span className="text-zinc-600">{t('Projetos', 'Contributions')}</span>
          </h2>
          <p className="mt-6 text-zinc-500 font-mono text-[11px] max-w-2xl leading-relaxed">
            {t(
              'Seleção de projetos open-source e bibliotecas onde atuei como colaborador técnico, ajudando a construir ferramentas usadas por centenas de empresas no Brasil.',
              'A selection of open-source projects and libraries where I acted as a technical collaborator, helping build tools used by hundreds of companies in Brazil.'
            )}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group flex flex-col p-8 bg-zinc-950 border-2 border-zinc-900 hover:border-accent-green transition-all relative overflow-hidden"
            >
              <a 
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 z-0"
              />
              
              {/* Pixel corner accents */}
              <div className="absolute top-0 left-0 w-1 h-1 bg-zinc-800" />
              <div className="absolute top-0 right-0 w-1 h-1 bg-zinc-800 group-hover:bg-accent-green" />
              <div className="absolute bottom-0 left-0 w-1 h-1 bg-zinc-800" />
              <div className="absolute bottom-0 right-0 w-1 h-1 bg-zinc-800" />
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex justify-between items-start mb-6">
                  <div className="w-10 h-10 bg-zinc-900 border-2 border-zinc-800 flex items-center justify-center text-xl group-hover:border-accent-green transition-colors">
                    {project.icon}
                  </div>
                  {project.role && (
                    <div className="flex items-center gap-1.5 font-mono text-[8px] text-zinc-500 bg-zinc-900 px-2 py-1 border border-zinc-800 uppercase tracking-wider">
                      {project.role}
                    </div>
                  )}
                </div>

                <h3 className="text-pixel text-[10px] text-white mb-4 group-hover:text-accent-green transition-colors">
                  {project.name}
                </h3>

                <p className="text-[11px] text-zinc-500 leading-relaxed font-mono mb-8">
                  {project.desc}
                </p>

                {project.playUrl && (
                  <div className="mb-8">
                    <button 
                      onClick={(e) => {
                        e.preventDefault();
                        setActiveGame(project.playUrl || null);
                      }}
                      className="relative z-20 inline-flex items-center gap-2 px-4 py-2 bg-accent-green text-bg-primary text-[9px] font-bold uppercase tracking-widest hover:bg-white transition-colors"
                    >
                      🎮 {t('JOGAR AGORA', 'PLAY NOW')}
                    </button>
                  </div>
                )}

                <div className="flex items-center justify-between mt-auto pt-6 border-t-2 border-zinc-900">
                  <div className="flex items-center gap-2 font-mono text-[9px] text-zinc-500 uppercase tracking-widest">
                    <div className="w-1.5 h-1.5 bg-accent-green" />
                    {project.lang}
                  </div>
                  <div className="text-accent-green opacity-0 group-hover:opacity-100 transition-opacity">
                    <ExternalLink size={12} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Game Modal */}
      <AnimatePresence>
        {activeGame && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveGame(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12 bg-black/90 backdrop-blur-sm cursor-pointer"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl aspect-video bg-zinc-950 border-4 border-zinc-800 shadow-[0_0_50px_rgba(0,0,0,0.5)] cursor-default"
            >
              <button
                onClick={() => setActiveGame(null)}
                className="absolute -top-12 right-0 md:-right-12 text-white hover:text-accent-green transition-colors p-2"
              >
                <X size={32} />
              </button>

              <div className="absolute top-0 left-0 w-4 h-4 bg-zinc-800" />
              <div className="absolute top-0 right-0 w-4 h-4 bg-zinc-800" />
              <div className="absolute bottom-0 left-0 w-4 h-4 bg-zinc-800" />
              <div className="absolute bottom-0 right-0 w-4 h-4 bg-zinc-800" />

              <iframe
                src={activeGame}
                className="w-full h-full border-none"
                title="Game Preview"
                allow="autoplay; fullscreen"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
