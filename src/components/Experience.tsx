import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';

export function Experience() {
  const { t } = useLanguage();

  const experiences = [
    {
      role: t('Senior Development Analyst', 'Senior Development Analyst'),
      date: t('Jun 2024 - Presente', 'Jun 2024 - Present'),
      company: 'Sigga Technologies · Full-time · Remote',
      desc: t(
        'Atuando em soluções enterprise e integrações complexas, focando em arquitetura de microsserviços e escalabilidade.',
        'Working on enterprise solutions and complex integrations, focusing on microservices architecture and scalability.'
      ),
      tech: ['Java', 'Spring Boot', 'Microservices', 'Cloud Architecture', 'Enterprise Solutions']
    },
    {
      role: t('Senior Development Analyst', 'Senior Development Analyst'),
      date: '2017 - 2024',
      company: 'Imagem Filmes · Florianópolis, SC',
      desc: t(
        'Análise, desenvolvimento e manutenção de módulos para sistemas proprietários de CRM, ERP e e-commerce. Liderança técnica, modernização de sistemas legados e implementação de testes unitários.',
        'Analysis, development, and maintenance of modules for proprietary CRM, ERP, and e-commerce systems. Technical leadership, modernization of legacy systems, and implementation of unit tests.'
      ),
      tech: ['Java', 'SQL', 'JavaScript', 'Python', 'Vaadin', 'Wicket', 'JUnit']
    },
    {
      role: t('Full Stack Developer', 'Full Stack Developer'),
      date: '2016 - 2017',
      company: 'MAGNA SISTEMAS · São Paulo, SP',
      desc: t(
        'Participação na análise e desenvolvimento de sistemas no projeto TCE-SP (Audesp). Definição de requisitos e implementação de lógica de negócios.',
        'Participation in the analysis and development of systems in the TCE-SP (Audesp) project. Definition of requirements and implementation of business logic.'
      ),
      tech: ['Java', 'SQL', 'JSF']
    },
    {
      role: t('Full-stack Developer', 'Full-stack Developer'),
      date: '2015 - 2016',
      company: 'Confitec · São Paulo, SP',
      desc: t(
        'Desenvolvimento de software para clientes do setor de seguros de vida. Modelagem e implementação de funcionalidades essenciais.',
        'Software development for clients in the life insurance sector. Modeling and implementation of essential functionalities.'
      ),
      tech: ['Java', 'JSF', 'Hibernate', 'PL/SQL', 'JUnit']
    },
    {
      role: t('Desenvolvedor Java', 'Java Developer'),
      date: '2013 - 2015',
      company: 'Pandata Informática Ltda · São Paulo, SP',
      desc: t(
        'Desenvolvimento e manutenção de sistemas para o setor financeiro, com foco em soluções de gestão de títulos.',
        'Development and maintenance of systems for the financial sector, focusing on title management solutions.'
      ),
      tech: ['Java', 'Hibernate', 'PrimeFaces', 'SQL', 'iReport']
    },
    {
      role: t('Administrador de Redes', 'Network Administrator'),
      date: '2012 - 2013',
      company: 'ELTMAN Engenharia e Sistemas Ltda. · São Paulo, SP',
      desc: t(
        'Gerenciamento de servidores Windows 2008, Active Directory, DNS, DHCP e GPO. Administração de ativos de rede e suporte à infraestrutura.',
        'Management of Windows 2008 servers, Active Directory, DNS, DHCP, and GPO. Administration of network assets and infrastructure support.'
      ),
      tech: ['Windows Server', 'Active Directory', 'Networking', 'IT Infrastructure']
    },
    {
      role: t('TI Trainee', 'IT Trainee'),
      date: '2011 - 2012',
      company: 'ELTMAN Engenharia e Sistemas Ltda. · São Paulo, SP',
      desc: t(
        'Suporte técnico a usuários, gerenciamento de contas e manutenção de rotinas de backup e infraestrutura de TI.',
        'Technical support to users, account management, and maintenance of backup routines and IT infrastructure.'
      ),
      tech: ['Technical Support', 'Backup Management', 'IT Support']
    }
  ];

  return (
    <section id="experience" className="py-32 px-8 bg-zinc-950">
      <div className="max-w-4xl mx-auto">
        <div className="mb-20">
          <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-[0.3em] mb-4 block">
            {t('02. TRAJETÓRIA', '02. TRAJECTORY')}
          </span>
          <h2 className="text-4xl font-bold tracking-tight">
            {t('Trajetória ', 'Professional ')}
            <span className="text-zinc-600">{t('Profissional', 'Trajectory')}</span>
          </h2>
        </div>

        <div className="space-y-12">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="grid md:grid-cols-[180px_1fr] gap-8 p-8 border-2 border-zinc-900 bg-zinc-950 relative group hover:bg-zinc-900/20 transition-all"
            >
              <div className="absolute top-0 left-0 w-2 h-2 bg-zinc-800" />
              <div className="absolute bottom-0 right-0 w-2 h-2 bg-zinc-800 group-hover:bg-accent-green transition-colors" />
              
              <div className="text-pixel text-[8px] text-zinc-600 uppercase tracking-widest pt-2">
                {exp.date}
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-pixel text-xs text-white mb-2">{exp.role}</h3>
                  <div className="text-[10px] font-mono text-accent-green uppercase tracking-widest">{exp.company}</div>
                </div>
                <p className="text-[11px] text-zinc-500 leading-relaxed font-mono">{exp.desc}</p>
                
                <div className="pt-4 border-t-2 border-zinc-900">
                  <div className="text-pixel text-[7px] text-zinc-600 uppercase tracking-widest mb-4">
                    {t('>> EQUIPAMENTO & SKILLS', '>> EQUIPMENT & SKILLS')}
                  </div>
                  <ul className="grid grid-cols-2 gap-x-6 gap-y-3">
                    {exp.tech.map(t => (
                      <li key={t} className="flex items-center gap-3 text-[10px] text-zinc-400 font-mono">
                        <div className="w-1.5 h-1.5 bg-zinc-800 group-hover:bg-accent-green transition-colors" />
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
