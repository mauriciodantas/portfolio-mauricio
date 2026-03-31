import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

const phrases_pt = [
  'Engenheiro de Software',
  'Especialista em Java',
  'Integrador de Sistemas Brasileiros',
  '🖖 Apaixonado por código',
  '🤖 Entusiasta de Machine Learning',
];

const phrases_en = [
  'Software Engineer',
  'Java Specialist',
  'Brazilian Systems Integrator',
  '🖖 Passionate about code',
  '🤖 Machine Learning Enthusiast',
];

export function TypingEffect() {
  const { lang } = useLanguage();
  const phrases = lang === 'pt' ? phrases_pt : phrases_en;
  
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex % phrases.length];
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setText(currentPhrase.substring(0, charIndex + 1));
        setCharIndex(prev => prev + 1);
        
        if (charIndex === currentPhrase.length) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setText(currentPhrase.substring(0, charIndex - 1));
        setCharIndex(prev => prev - 1);
        
        if (charIndex === 0) {
          setIsDeleting(false);
          setPhraseIndex(prev => prev + 1);
        }
      }
    }, isDeleting ? 60 : 100);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, phraseIndex, phrases]);

  return (
    <span className="text-pixel text-sm md:text-lg text-text-secondary min-h-[2rem] inline-block">
      {text}
      <span className="inline-block w-[4px] h-[1em] bg-accent-green ml-1 align-middle cursor-blink" />
    </span>
  );
}
