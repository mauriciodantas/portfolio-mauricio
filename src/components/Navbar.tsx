import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { cn } from '../lib/utils';

export function Navbar() {
  const { lang, setLang, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#about', label: t('Sobre', 'About') },
    { href: '#experience', label: t('Trajetória', 'Trajectory') },
    { href: '#education', label: t('Formação', 'Education') },
    { href: '#skills', label: t('Skills', 'Skills') },
    { href: '#projects', label: t('Projetos', 'Projects') },
    { href: '#contact', label: t('Contato', 'Contact') },
  ];

  return (
    <nav className={cn(
      "fixed top-0 w-full z-50 px-8 py-5 flex justify-between items-center transition-all duration-300",
      isScrolled ? "bg-bg-primary border-b-2 border-zinc-800" : "bg-transparent"
    )}>
      <a href="#hero" className="text-pixel text-xs text-white tracking-tighter font-bold">
        &lt;MAURICIO<span className="text-accent-green">DANTAS&gt;</span>
      </a>

      <ul className="hidden md:flex gap-10 items-center list-none">
        {navLinks.map(link => (
          <li key={link.href}>
            <a 
              href={link.href} 
              className="text-text-secondary hover:text-accent-green text-[10px] font-bold tracking-[0.2em] transition-colors uppercase font-mono"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-1 bg-zinc-900 border-2 border-zinc-800 p-1">
        <button 
          onClick={() => setLang('pt')}
          className={cn(
            "px-3 py-1 text-[10px] font-bold transition-all",
            lang === 'pt' ? "bg-accent-green text-bg-primary" : "text-text-muted hover:text-text-secondary"
          )}
        >
          PT
        </button>
        <button 
          onClick={() => setLang('en')}
          className={cn(
            "px-3 py-1 text-[10px] font-bold transition-all",
            lang === 'en' ? "bg-accent-green text-bg-primary" : "text-text-muted hover:text-text-secondary"
          )}
        >
          EN
        </button>
      </div>
    </nav>
  );
}
