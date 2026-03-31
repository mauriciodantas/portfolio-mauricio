import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export function Footer() {
  const { t } = useLanguage();
  
  return (
    <footer className="border-t-2 border-zinc-900 py-12 px-8 text-center relative z-10 bg-bg-primary">
      <p className="text-pixel text-[8px] text-zinc-500 uppercase tracking-[0.2em]">
        {t('Feito por ', 'Built by ')}
        <a href="#hero" className="text-white hover:text-accent-green transition-colors">Mauricio Dantas</a>
        <span className="mx-4 opacity-20">|</span>
        <a href="https://github.com/mauriciodantas" target="_blank" className="hover:text-white transition-colors">GitHub</a>
      </p>
    </footer>
  );
}
