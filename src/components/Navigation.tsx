import React from 'react';
import { Menu, X } from 'lucide-react';

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'HOME' },
    { id: 'about', label: 'ABOUT' },
    { id: 'cabinet', label: 'CABINET' },
    { id: 'sponsors', label: 'SPONSORS' },
    { id: 'contact', label: 'CONTACT' },
  ];

  const handleNavigate = (page: string) => {
    onNavigate(page);
    setMobileMenuOpen(false);
  };

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/95 backdrop-blur-sm shadow-lg shadow-[#D4AF37]/10' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div 
            className="flex-shrink-0 cursor-pointer group" 
            onClick={() => handleNavigate('home')}
          >
            <h1 className="text-2xl font-bold text-white tracking-widest group-hover:text-[#D4AF37] transition-colors" style={{ fontFamily: 'Orbitron, sans-serif' }}>
              ATHS <span className="text-[#D4AF37]">ENGINEERING</span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigate(item.id)}
                className={`px-6 py-2 transition-all relative group ${
                  currentPage === item.id
                    ? 'text-[#D4AF37]'
                    : 'text-white hover:text-[#D4AF37]'
                }`}
                style={{ fontFamily: 'Rajdhani, sans-serif', letterSpacing: '0.15em', fontSize: '0.9rem' }}
              >
                {item.label}
                <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#D4AF37] transform origin-left transition-transform ${
                  currentPage === item.id ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`}></span>
              </button>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white hover:text-[#D4AF37] transition-colors"
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4 bg-black/95 backdrop-blur-sm">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigate(item.id)}
                className={`block w-full text-left px-4 py-3 transition-colors border-l-2 ${
                  currentPage === item.id
                    ? 'text-[#D4AF37] border-[#D4AF37] bg-[#D4AF37]/10'
                    : 'text-white border-transparent hover:border-[#D4AF37] hover:text-[#D4AF37] hover:bg-[#D4AF37]/5'
                }`}
                style={{ fontFamily: 'Rajdhani, sans-serif', letterSpacing: '0.15em' }}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}