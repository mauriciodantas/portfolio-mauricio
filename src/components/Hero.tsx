import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { TypingEffect } from './TypingEffect';
import { motion } from 'framer-motion';

export function Hero() {
  const { t } = useLanguage();

  const stats = [
    { value: '13+', label: t('Anos de Experiência', 'Years of Experience') },
    { value: 'JAVA', label: t('Especialista Backend', 'Backend Specialist') },
    { value: 'MICRO', label: t('Microsserviços', 'Microservices') },
    { value: 'AI/ML', label: t('Pós-Graduação', 'Postgraduate') },
  ];

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-24 px-8 pb-16">
      <div className="hero-grid absolute inset-0 opacity-50" />
      <div className="hero-glow absolute w-[800px] h-[800px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      
      <div className="relative z-10 text-center max-w-4xl">
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 bg-zinc-900 border-2 border-zinc-800 px-4 py-2 text-[10px] text-zinc-400 font-mono tracking-[0.2em] mb-8 uppercase"
        >
          {t('🇧🇷 BRASIL', '🇧🇷 BRAZIL')}
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-5xl md:text-8xl font-bold leading-[0.9] tracking-tighter mb-12 text-pixel"
        >
          MAURICIO<br />
          <span className="text-accent-green drop-shadow-[4px_4px_0px_rgba(0,0,0,1)]">DANTAS</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <TypingEffect />
        </motion.div>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-lg text-zinc-400 max-w-xl mx-auto mb-12 leading-relaxed font-light"
        >
          {t(
            'Especialista em Java com mais de 13 anos de experiência em sistemas críticos e integrações complexas. Em constante evolução.',
            'Java Specialist with over 13 years of experience in critical systems and complex integrations. Continuously evolving.'
          )}
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-wrap justify-center gap-6 mb-20"
        >
          <a href="#experience" className="pixel-btn text-xs animate-pulse">
            {t('VER TRAJETÓRIA', 'VIEW TRAJECTORY')}
          </a>
          <a href="#education" className="pixel-btn-outline text-xs">
            {t('FORMAÇÃO', 'EDUCATION')}
          </a>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto"
        >
          {stats.map((stat, i) => (
            <div key={i} className="text-center p-4 border-2 border-zinc-900 bg-zinc-950/50">
              <div className="text-2xl font-bold text-white leading-none mb-2 font-mono">{stat.value}</div>
              <div className="text-[9px] text-zinc-500 uppercase tracking-[0.2em]">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
