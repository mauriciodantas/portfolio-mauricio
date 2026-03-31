import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';
import { Coffee, Receipt, Globe, Smartphone, Brain } from 'lucide-react';
import { cn } from '../lib/utils';

export function Skills() {
  const { t } = useLanguage();

  const skillCategories = [
    {
      icon: <Coffee />,
      name: 'Backend Java',
      color: 'green',
      skills: ['Java', 'Spring Boot', 'Maven', 'Gradle', 'JDBC', 'Apache POI', 'JUnit', 'Hibernate'],
      primary: ['Java', 'Spring Boot']
    },
    {
      icon: <Receipt />,
      name: t('Integrações Brasileiras', 'Brazilian Integrations'),
      color: 'blue',
      skills: ['NF-e / NFS-e', 'Banco Central (CNAB)', 'Correios', 'Bradesco Boleto', 'DANFE', 'XML Fiscal'],
      primary: ['NF-e / NFS-e', 'Banco Central (CNAB)']
    },
    {
      icon: <Globe />,
      name: 'Frontend & Web',
      color: 'orange',
      skills: ['JavaScript', 'HTML5', 'CSS3', 'REST APIs', 'Node.js'],
      primary: ['JavaScript']
    },
    {
      icon: <Smartphone />,
      name: t('Mobile & Outros', 'Mobile & Others'),
      color: 'purple',
      skills: ['iOS', 'Android', 'Objective-C', 'Xcode', 'Git', 'GitHub', 'Linux', 'Docker'],
      primary: ['iOS', 'Android']
    },
    {
      icon: <Brain />,
      name: t('IA & Machine Learning', 'AI & Machine Learning'),
      color: 'pink',
      skills: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'Regressão Linear', 'Classificação', 'Clustering (K-Means)', 'Power BI'],
      primary: ['Scikit-learn', 'Python']
    }
  ];

  return (
    <section id="skills" className="py-32 px-8 bg-zinc-950">
      <div className="max-w-6xl mx-auto">
        <div className="mb-20">
          <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-[0.3em] mb-4 block">
            {t('04. SKILLS', '04. SKILLS')}
          </span>
          <h2 className="text-4xl font-bold tracking-tight">
            {t('Stack ', 'Tech ')}
            <span className="text-zinc-600">{t('Tecnológico', 'Stack')}</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="space-y-6 p-8 border-2 border-zinc-900 bg-zinc-950/50 relative group"
            >
              <div className="absolute top-0 right-0 w-3 h-3 bg-accent-green opacity-20 group-hover:opacity-100 transition-opacity" />
              
              <div className="flex items-center gap-4">
                <div className="text-accent-green">{cat.icon}</div>
                <span className="text-pixel text-[10px] uppercase tracking-widest text-white">{cat.name}</span>
              </div>

              <div className="flex flex-wrap gap-3">
                {cat.skills.map(skill => (
                  <span 
                    key={skill} 
                    className={cn(
                      "px-4 py-2 text-[10px] font-mono transition-all border-2",
                      cat.primary.includes(skill) 
                        ? "bg-accent-green text-bg-primary border-accent-green font-bold" 
                        : "bg-transparent border-zinc-800 text-zinc-500 hover:border-white hover:text-white"
                    )}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
