import React, { useState } from 'react';
import { BookOpen, PenTool, School, GraduationCap, Instagram, Menu, X } from 'lucide-react';
import { schoolResults, collegeResults } from './data';
import { ResultCard } from './components/ResultCard';

export default function App() {
  const [activeTab, setActiveTab] = useState<'schools' | 'colleges'>('schools');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const NavLinks = () => (
    <>
      <button
        onClick={() => { setActiveTab('schools'); setIsMobileMenuOpen(false); }}
        className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-bold text-sm md:text-base transition-all duration-200 ${
          activeTab === 'schools'
            ? 'bg-red-50 text-red-700 shadow-sm border border-red-100'
            : 'text-slate-600 hover:bg-slate-100'
        }`}
      >
        <School size={20} />
        பள்ளி மாணவர்கள்
      </button>
      <button
        onClick={() => { setActiveTab('colleges'); setIsMobileMenuOpen(false); }}
        className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-bold text-sm md:text-base transition-all duration-200 ${
          activeTab === 'colleges'
            ? 'bg-blue-50 text-blue-700 shadow-sm border border-blue-100'
            : 'text-slate-600 hover:bg-slate-100'
        }`}
      >
        <GraduationCap size={20} />
        கல்லூரி மாணவர்கள்
      </button>
    </>
  );

  return (
    <div className="flex h-screen bg-[#fdfbf7] text-slate-800 font-sans selection:bg-amber-200 selection:text-amber-900 overflow-hidden">
      
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex w-72 bg-white border-r border-amber-200/50 flex-col shadow-sm z-20 shrink-0">
        <div className="p-6 border-b border-amber-100 flex flex-col items-center gap-4">
          {/* Logo Image */}
          <img 
            src="/logo.png" 
            alt="தமிழரண் மாணவர்கள்" 
            className="w-32 h-32 object-contain drop-shadow-md rounded-full" 
            onError={(e) => {
              e.currentTarget.style.display = 'none';
              e.currentTarget.nextElementSibling?.classList.remove('hidden');
            }} 
          />
          {/* Fallback if logo is missing */}
          <div className="hidden w-32 h-32 rounded-full bg-amber-100 border-2 border-dashed border-amber-300 flex items-center justify-center text-amber-500 text-xs text-center p-2">
            Add logo.png to public folder
          </div>
          
          <div className="text-center">
            <h2 className="font-serif font-bold text-xl text-red-800">தமிழரண் மாணவர்கள்</h2>
            <p className="text-xs text-amber-700 mt-1 font-medium">தஞ்சை மாவட்டம்</p>
          </div>
        </div>
        
        <nav className="flex-1 p-4 space-y-3 overflow-y-auto">
          <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 px-2">முடிவுகள் (Results)</div>
          <NavLinks />
        </nav>

        <div className="p-6 border-t border-amber-100 bg-amber-50/50">
          <div className="flex justify-center items-center gap-6 mb-4">
            <a 
              href="https://www.instagram.com/thanjai_tamilaran_manavargal?igsh=OXR1NGR0ZXZvMW5p" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-amber-700 hover:text-red-600 hover:scale-110 transition-all duration-200"
              title="Follow us on Instagram"
            >
              <Instagram size={24} />
            </a>
            <div className="w-px h-6 bg-amber-300"></div>
            <div className="flex gap-4 text-amber-700/50">
              <BookOpen size={20} />
              <PenTool size={20} />
            </div>
          </div>
          <p className="text-center text-xs text-amber-800/70 font-medium leading-relaxed">
            தொடர்புக்கு:<br/>89395 76257, 85250 92729<br/>70948 48653
          </p>
        </div>
      </aside>

      {/* Mobile Header & Menu */}
      <div className="md:hidden fixed top-0 left-0 right-0 h-16 bg-white border-b border-amber-200/50 z-30 flex items-center justify-between px-4 shadow-sm">
        <div className="flex items-center gap-3">
          <img 
            src="/logo.png" 
            alt="Logo" 
            className="w-10 h-10 object-contain rounded-full" 
            onError={(e) => e.currentTarget.style.display = 'none'} 
          />
          <h2 className="font-serif font-bold text-red-800">தமிழரண்</h2>
        </div>
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2 text-amber-800">
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Sidebar Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-black/20 z-20 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)}>
          <div className="absolute top-16 left-0 right-0 bg-white border-b border-amber-200/50 p-4 shadow-lg flex flex-col gap-2" onClick={e => e.stopPropagation()}>
            <NavLinks />
          </div>
        </div>
      )}

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col h-full overflow-y-auto pt-16 md:pt-0 relative bg-slate-50/50">
        
        {/* Banner Section */}
        <div className="w-full h-32 md:h-48 lg:h-64 bg-amber-100 relative shrink-0 border-b border-amber-200/50 overflow-hidden">
          <img 
            src="/banner.png" 
            alt="Banner" 
            className="w-full h-full object-cover object-center" 
            onError={(e) => {
              e.currentTarget.style.display = 'none';
              e.currentTarget.parentElement!.classList.add('bg-gradient-to-r', 'from-amber-100', 'to-orange-100');
              e.currentTarget.nextElementSibling?.classList.remove('hidden');
            }} 
          />
          {/* Fallback if banner is missing */}
          <div className="hidden absolute inset-0 flex items-center justify-center text-amber-600/50 font-medium border-4 border-dashed border-amber-200/50 m-4 rounded-xl">
            Add banner.png to public folder
          </div>
        </div>

        <div className="p-4 md:p-8 lg:p-10 max-w-6xl mx-auto w-full">
          {/* Header Text */}
          <header className="text-center space-y-6 mb-12">
            <div className="inline-flex items-center justify-center gap-3 px-5 py-2 bg-white text-red-800 rounded-full border border-amber-200 shadow-sm mb-2">
              <span className="font-serif font-bold">த.பெ.செ</span>
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
              <span className="font-serif font-bold">த.மா</span>
              <span className="text-sm ml-2 font-medium text-amber-800">முன்னெடுக்கும்</span>
            </div>
            
            <h1 className="text-2xl md:text-5xl lg:text-6xl font-serif text-red-700 drop-shadow-sm leading-[1.4] md:leading-tight flex flex-col items-center gap-4 px-2">
              <span className="text-center">உலகத் தாய்மொழி நாள்</span>
              <span className="text-lg md:text-2xl lg:text-3xl text-red-600/90 font-sans font-medium bg-red-50 px-5 py-1 rounded-full border border-red-100 shadow-sm">பிப்ரவரி 21</span>
            </h1>
            
            <h2 className="text-base md:text-xl lg:text-2xl font-bold text-blue-900 mt-6 leading-[1.6] max-w-2xl mx-auto px-4">
              பள்ளிக் கல்லூரி மாணவர்களுக்கான
              <br className="hidden md:block" />
              <span className="inline-block mt-2">கவிதைப் போட்டி, கட்டுரைப் போட்டி முடிவுகள்</span>
            </h2>
          </header>

          {/* Results Grid */}
          <div className="space-y-6">
            <div className="flex items-center justify-between mb-8 border-b border-amber-200/50 pb-4">
              <h3 className="text-2xl font-serif font-bold text-amber-900 flex items-center gap-3">
                {activeTab === 'schools' ? <School className="text-red-600" size={28} /> : <GraduationCap className="text-blue-600" size={28} />}
                {activeTab === 'schools' ? 'பள்ளி மாணவர் முடிவுகள்' : 'கல்லூரி மாணவர் முடிவுகள்'}
              </h3>
            </div>

            {activeTab === 'schools' ? (
              schoolResults.length > 0 ? (
                <div className="grid xl:grid-cols-2 gap-6">
                  {schoolResults.map((institution) => (
                    <ResultCard key={institution.id} institution={institution} />
                  ))}
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center py-20 px-4 text-center bg-white rounded-2xl border border-dashed border-amber-300 shadow-sm">
                  <div className="w-20 h-20 bg-amber-50 text-amber-500 rounded-full flex items-center justify-center mb-6 shadow-inner">
                    <School size={40} />
                  </div>
                  <h4 className="text-xl font-bold text-amber-900 mb-3">முடிவுகள் தயாராகின்றன</h4>
                  <p className="text-amber-700/80 max-w-md leading-relaxed">பள்ளி மாணவர்களுக்கான முடிவுகள் விரைவில் அதிகாரப்பூர்வமாக வெளியிடப்படும்.</p>
                </div>
              )
            ) : (
              collegeResults.length > 0 ? (
                <div className="grid xl:grid-cols-2 gap-6">
                  {collegeResults.map((institution) => (
                    <ResultCard key={institution.id} institution={institution} />
                  ))}
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center py-20 px-4 text-center bg-white rounded-2xl border border-dashed border-blue-300 shadow-sm">
                  <div className="w-20 h-20 bg-blue-50 text-blue-500 rounded-full flex items-center justify-center mb-6 shadow-inner">
                    <GraduationCap size={40} />
                  </div>
                  <h4 className="text-xl font-bold text-blue-900 mb-3">முடிவுகள் தயாராகின்றன</h4>
                  <p className="text-blue-800/80 max-w-md leading-relaxed">கல்லூரி மாணவர்களுக்கான முடிவுகள் விரைவில் அதிகாரப்பூர்வமாக வெளியிடப்படும்.</p>
                </div>
              )
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
