
import React from 'react';

interface SlideProps {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
  pageNumber: number;
}

const Slide: React.FC<SlideProps> = ({ children, title, subtitle, pageNumber }) => {
  return (
    <div className="w-full h-full flex flex-col bg-transparent overflow-hidden relative slide-content-animate px-8 py-8 md:px-20 md:py-12">
      {/* Background Orbs */}
      <div className="absolute top-[-10%] left-[-5%] w-[40%] h-[40%] bg-blue-600/[0.02] rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[40%] bg-purple-600/[0.02] rounded-full blur-[120px] pointer-events-none"></div>

      <header className="z-10 mb-6 md:mb-8 border-none shrink-0">
        <div className="flex items-center space-x-4 mb-3 opacity-70 group">
           <div className="h-1 w-10 bg-blue-600 rounded-full group-hover:w-14 transition-all duration-500"></div>
           <span className="text-blue-400 font-black tracking-[0.4em] text-[10px] md:text-[11px] uppercase">Strategic Operational Roadmap 2026</span>
        </div>
        {title && <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-[-0.04em] leading-tight mb-2 text-shadow-strong">{title}</h1>}
        {subtitle && <p className="text-lg md:text-xl text-slate-400 font-medium max-w-5xl leading-relaxed border-l-4 border-white/5 pl-4">{subtitle}</p>}
      </header>
      
      <main className="flex-1 z-10 relative flex flex-col min-h-0 overflow-hidden">
        {children}
      </main>

      <footer className="z-10 mt-6 flex justify-end items-center opacity-40 shrink-0">
        <div className="text-white font-black text-2xl tracking-tighter tabular-nums flex items-center">
          <span className="text-blue-500">{pageNumber.toString().padStart(2, '0')}</span>
          <span className="text-slate-800 mx-2 text-lg">/</span>
          <span className="text-slate-700 text-xl">25</span>
        </div>
      </footer>
    </div>
  );
};

export default Slide;