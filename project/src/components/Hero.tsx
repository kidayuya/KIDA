import React, { useEffect, useRef } from 'react';

const Hero = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (titleRef.current && subtitleRef.current) {
        const scrolled = window.scrollY;
        titleRef.current.style.transform = `translateY(${scrolled * 0.5}px)`;
        subtitleRef.current.style.transform = `translateY(${scrolled * 0.3}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="min-h-screen flex items-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[#DEDEBE]" />
      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h1 
            ref={titleRef}
            className="text-7xl font-light mb-12 leading-tight tracking-[0.1em] transition-transform duration-300"
          >
            透過細膩的筆觸，<br />
            描繪生活中的優美詩篇
          </h1>
          <p 
            ref={subtitleRef}
            className="text-xl text-gray-600 mb-16 leading-relaxed tracking-[0.1em] transition-transform duration-300"
          >
            我是一位專注於數位插畫創作的藝術家，致力於捕捉生活中的每個精彩瞬間，<br />
            透過獨特的視角與細膩的表現手法，為每個故事注入深刻的情感。
          </p>
          <a 
            href="#portfolio" 
            className="inline-block border-2 border-gray-800 text-gray-800 px-16 py-5
            hover:bg-gray-800 hover:text-white transition-all duration-500 tracking-[0.2em]
            relative overflow-hidden group"
          >
            <span className="relative z-10">探索作品集</span>
            <div className="absolute inset-0 bg-gray-800 transform translate-y-full 
              transition-transform duration-500 group-hover:translate-y-0" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;