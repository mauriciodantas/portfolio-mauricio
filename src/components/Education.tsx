import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

export function Education() {
  const { t } = useLanguage();

  const education = [
    {
      institution: 'PUC Minas',
      degree: t('Postgraduate Degree, Inteligência artificial e aprendizado de máquina', 'Postgraduate Degree, Artificial Intelligence and Machine Learning'),
      date: t('Mar 2025 – Presente', 'Mar 2025 – Present'),
      color: 'bg-blue-900/20'
    },
    {
      institution: 'FIAP',
      degree: t('Executive MBA, Desenvolvimento de Aplicações e Games para Dispositivos Móveis – Internet das Coisas', 'Executive MBA, Mobile Applications and Games Development – Internet of Things'),
      date: '2015 – 2016',
      color: 'bg-red-900/20'
    },
    {
      institution: 'Centro Universitário Senac',
      degree: t('Graduação tecnológica, Análise e Desenvolvimento de Sistemas', "Associate's degree, Systems Analysis and Development"),
      date: '2011 – 2013',
      color: 'bg-orange-900/20'
    }
  ];

  return (
    <section id="education" className="py-32 px-8 bg-bg-primary">
      <div className="max-w-4xl mx-auto">
        <div className="mb-20">
          <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-[0.3em] mb-4 block">
            {t('03. FORMAÇÃO', '03. EDUCATION')}
          </span>
          <h2 className="text-4xl font-bold tracking-tight">
            {t('Formação ', 'Academic ')}
            <span className="text-zinc-600">{t('Acadêmica', 'Education')}</span>
          </h2>
        </div>

        <div className="space-y-8">
          {education.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="flex gap-6 p-6 border-2 border-zinc-900 bg-zinc-950 relative group hover:bg-zinc-900/20 transition-all"
            >
              <div className="absolute top-0 left-0 w-2 h-2 bg-zinc-800" />
              <div className="absolute bottom-0 right-0 w-2 h-2 bg-zinc-800 group-hover:bg-accent-green transition-colors" />
              
              {/* Logo Placeholder */}
              <div className={`shrink-0 w-12 h-12 border-2 border-zinc-800 flex items-center justify-center ${edu.color}`}>
                <GraduationCap size={20} className="text-zinc-500" />
              </div>
              
              <div className="flex-1 space-y-2">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-pixel text-[10px] text-white uppercase tracking-wider mb-1">
                      {edu.institution}
                    </h3>
                    <p className="text-[11px] text-zinc-400 font-mono leading-relaxed">
                      {edu.degree}
                    </p>
                    <p className="text-[9px] text-zinc-600 font-mono mt-1">
                      {edu.date}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
