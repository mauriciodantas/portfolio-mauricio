import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

export function Contact() {
  const { t } = useLanguage();

  const socialLinks = [
    { 
      icon: <Github size={20} />, 
      label: 'GitHub', 
      value: '@mauriciodantas', 
      href: 'https://github.com/mauriciodantas' 
    },
    { 
      icon: <Linkedin size={20} />, 
      label: 'LinkedIn', 
      value: '/in/mauriciodantas', 
      href: 'https://linkedin.com/in/mauriciodantas' 
    },
    { 
      icon: <Mail size={20} />, 
      label: 'Email', 
      value: 'mauricio@mdantas.net', 
      href: 'mailto:mauricio@mdantas.net' 
    },
  ];

  return (
    <section id="contact" className="bg-bg-primary py-32 px-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-20">
          <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-[0.3em] mb-4 block">
            {t('07. CONTATO', '07. CONTACT')}
          </span>
          <h2 className="text-4xl font-bold tracking-tight">
            {t('Entre em ', 'Get in ')}
            <span className="text-zinc-600">{t('Contato', 'Touch')}</span>
          </h2>
        </div>

        <div className="max-w-2xl">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div className="p-6 border-2 border-zinc-800 bg-zinc-950 relative">
              <div className="absolute -top-3 left-6 bg-bg-primary px-2 text-pixel text-[7px] text-accent-green">
                {t('MENSAGEM DO SISTEMA', 'SYSTEM MESSAGE')}
              </div>
              <p className="text-zinc-400 text-[11px] leading-relaxed font-mono">
                {t(
                  'Sinta-se à vontade para entrar em contato através de qualquer um dos canais abaixo.',
                  "Feel free to reach out through any of the channels below."
                )}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {socialLinks.map((link, i) => (
                <a 
                  key={i}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col gap-4 p-6 bg-zinc-900/30 border-2 border-zinc-900 hover:border-accent-green transition-all group relative"
                >
                  <div className="absolute top-0 right-0 w-1 h-1 bg-zinc-800 group-hover:bg-accent-green" />
                  <div className="text-zinc-500 group-hover:text-accent-green transition-colors">
                    {link.icon}
                  </div>
                  <div>
                    <div className="text-pixel text-[6px] text-zinc-600 uppercase tracking-[0.2em] mb-2">{link.label}</div>
                    <div className="text-[10px] text-zinc-400 group-hover:text-white transition-colors truncate font-mono">{link.value}</div>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
