import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';
import { MapPin, Building2, Briefcase, Github, Mail } from 'lucide-react';

export function About() {
  const { t } = useLanguage();

  const infoItems = [
    { icon: <MapPin size={18} />, label: t('Localização', 'Location'), value: 'São José, SC, Brasil' },
    { icon: <Building2 size={18} />, label: t('Empresa', 'Company'), value: 'Sigga Technologies' },
    { icon: <Briefcase size={18} />, label: t('Cargo', 'Role'), value: t('Engenheiro de software', 'Software engineer') },
    { icon: <Github size={18} />, label: 'GitHub', value: <a href="https://github.com/mauriciodantas" target="_blank" className="text-accent-blue hover:underline">@mauriciodantas</a> },
    { icon: <Mail size={18} />, label: 'Email', value: <a href="mailto:mauricio@mdantas.net" className="text-accent-blue hover:underline">mauricio@mdantas.net</a> },
  ];

  const badges = ['☕ Java', '🧾 NF-e', '🏦 APIs Bancárias', '📱 Mobile', '🤖 Machine Learning'];

  return (
    <section id="about" className="bg-bg-primary py-32 px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row gap-16 items-start">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:w-1/2 space-y-8"
          >
            <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-[0.3em] block">
              {t('01. SOBRE', '01. ABOUT')}
            </span>
            <h2 className="text-pixel text-xl text-white mb-8">
              {t('PERFIL PROFISSIONAL', 'PROFESSIONAL PROFILE')}
            </h2>
            <div className="space-y-6 text-zinc-400 leading-relaxed font-mono text-[11px]">
              <p>
                {t(
                  'Olá! Sou Mauricio Dantas, especialista em Java com mais de 13 anos de experiência no mercado brasileiro. Minha trajetória é marcada pela construção de sistemas críticos para os setores financeiro, logístico e fiscal.',
                  "Hi! I'm Mauricio Dantas, a Java specialist with over 13 years of experience in the Brazilian market. My trajectory is marked by building critical systems for the financial, logistics, and fiscal sectors."
                )}
              </p>
              <p>
                {t(
                  'Contribuí em projetos open-source relevantes, como a biblioteca nfe para Nota Fiscal Eletrônica no Brasil e o poi-fluent, uma API fluente para manipulação de documentos Office. Meu foco é em arquiteturas robustas, integrações complexas e soluções que geram valor real para o negócio.',
                  "I have contributed to relevant open-source projects, such as the nfe library for Brazil's electronic invoice system and poi-fluent, a fluent API for Office document manipulation. My focus is on robust architectures, complex integrations, and solutions that generate real business value."
                )}
              </p>
              <p>
                {t(
                  'Atualmente, expando meu repertório com estudos em Inteligência Artificial e Machine Learning, explorando como essas tecnologias podem complementar soluções backend e criar produtos mais inteligentes.',
                  'I am currently expanding my skill set with studies in Artificial Intelligence and Machine Learning, exploring how these technologies can complement backend solutions and enable smarter products.'
                )}
              </p>
            </div>

            <div className="flex flex-wrap gap-3 pt-4">
              {badges.map(badge => (
                <span key={badge} className="bg-zinc-900 border-2 border-zinc-800 px-4 py-2 text-[10px] text-zinc-400 font-mono uppercase tracking-wider">
                  {badge}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:w-1/2 w-full grid grid-cols-1 gap-4"
          >
            {infoItems.map((item, i) => (
              <div key={i} className="flex items-center justify-between p-6 bg-zinc-900/30 border-2 border-zinc-800">
                <div className="flex items-center gap-4">
                  <div className="text-zinc-500">{item.icon}</div>
                  <div className="text-[10px] text-zinc-500 uppercase tracking-widest">{item.label}</div>
                </div>
                <div className="text-sm font-medium text-white">{item.value}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
