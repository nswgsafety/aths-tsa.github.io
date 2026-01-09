import React from 'react';
import { Heart, Star, Award, Sparkles } from 'lucide-react';

interface SponsorsPageProps {
  onNavigate: (page: string) => void;
}

export function SponsorsPage({ onNavigate }: SponsorsPageProps) {
  const platinumSponsors = [
  ];

  const goldSponsors = [
  ];

  const silverSponsors = [

  ];

  const bronzeSponsors = [


  ];
  /*{ name: 'Lorena Andujar Studio' }, 2500 
  
    { name: 'Precision Tools Ltd', contribution: '$2,500+' },
  */

  return (
    <div className="bg-black min-h-screen pt-20">
      {/* Header */}
      <div className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#D4AF37]/10 to-transparent"></div>
        <div className="relative max-w-4xl mx-auto text-center px-4">
          <h1 className="text-5xl md:text-7xl mb-6 text-white" style={{ fontFamily: 'Orbitron, sans-serif' }}>
            OUR <span className="text-[#D4AF37]">SPONSORS</span>
          </h1>
          <div className="w-24 h-1 bg-[#D4AF37] mx-auto mb-6"></div>
          <p className="text-xl text-gray-300" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
            Thank you to our generous sponsors who make our engineering dreams possible
          </p>
        </div>
      </div>

      {/* Why Sponsor Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl mb-6 text-white" style={{ fontFamily: 'Orbitron, sans-serif' }}>
            WHY <span className="text-[#D4AF37]">SPONSOR</span>?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
            Your sponsorship directly impacts students' lives by providing resources for competitions, 
            equipment, and hands-on learning experiences in engineering and technology.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="p-8 bg-[#0a0a0a] border border-[#D4AF37]/20 hover:border-[#D4AF37] transition-all">
              <div className="w-20 h-20 bg-gradient-to-br from-[#D4AF37]/20 to-transparent border border-[#D4AF37] flex items-center justify-center mx-auto mb-4">
                <Heart className="w-10 h-10 text-[#D4AF37]" />
              </div>
              <h3 className="text-xl mb-3 text-white" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                SUPPORT EDUCATION
              </h3>
              <p className="text-gray-400" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                Help develop the next generation of engineers and innovators
              </p>
            </div>
            <div className="p-8 bg-[#0a0a0a] border border-[#D4AF37]/20 hover:border-[#D4AF37] transition-all">
              <div className="w-20 h-20 bg-gradient-to-br from-[#D4AF37]/20 to-transparent border border-[#D4AF37] flex items-center justify-center mx-auto mb-4">
                <Star className="w-10 h-10 text-[#D4AF37]" />
              </div>
              <h3 className="text-xl mb-3 text-white" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                BRAND VISIBILITY
              </h3>
              <p className="text-gray-400" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                Showcase your commitment to STEM education in the community
              </p>
            </div>
            <div className="p-8 bg-[#0a0a0a] border border-[#D4AF37]/20 hover:border-[#D4AF37] transition-all">
              <div className="w-20 h-20 bg-gradient-to-br from-[#D4AF37]/20 to-transparent border border-[#D4AF37] flex items-center justify-center mx-auto mb-4">
                <Award className="w-10 h-10 text-[#D4AF37]" />
              </div>
              <h3 className="text-xl mb-3 text-white" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                TAX BENEFITS
              </h3>
              <p className="text-gray-400" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                Sponsorships are tax-deductible as charitable contributions
              </p>
            </div>
          </div>
        </div>

        {/* Platinum Sponsors */}
        <div className="mb-16">
          <div className="flex items-center justify-center mb-8">
            <div className="flex-grow h-px bg-[#D4AF37]/30"></div>
            <div className="flex items-center px-6">
              <Sparkles className="w-8 h-8 text-[#D4AF37] mr-2" />
              <h2 className="text-3xl text-white" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                PLATINUM
              </h2>
              <Sparkles className="w-8 h-8 text-[#D4AF37] ml-2" />
            </div>
            <div className="flex-grow h-px bg-[#D4AF37]/30"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {platinumSponsors.map((sponsor, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-[#D4AF37]/20 via-[#0a0a0a] to-[#0a0a0a] p-10 border-2 border-[#D4AF37] text-center hover:from-[#D4AF37]/30 transition-all"
              >
                <h3 className="text-2xl mb-3 text-white" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                  {sponsor.name}
                </h3>
                <p className="text-[#D4AF37] tracking-wider" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                  {sponsor.contribution}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Gold Sponsors */}
        <div className="mb-16">
          <div className="flex items-center justify-center mb-8">
            <div className="flex-grow h-px bg-[#D4AF37]/30"></div>
            <div className="flex items-center px-6">
              <Award className="w-8 h-8 text-[#D4AF37] mr-2" />
              <h2 className="text-3xl text-white" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                GOLD
              </h2>
              <Award className="w-8 h-8 text-[#D4AF37] ml-2" />
            </div>
            <div className="flex-grow h-px bg-[#D4AF37]/30"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {goldSponsors.map((sponsor, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-[#D4AF37]/10 to-[#0a0a0a] p-8 border border-[#D4AF37]/50 text-center hover:border-[#D4AF37] transition-all"
              >
                <h3 className="text-xl mb-2 text-white" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                  {sponsor.name}
                </h3>
                <p className="text-[#D4AF37]" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                  {sponsor.contribution}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Silver Sponsors */}
        <div className="mb-16">
          <div className="flex items-center justify-center mb-8">
            <div className="flex-grow h-px bg-[#D4AF37]/30"></div>
            <div className="flex items-center px-6">
              <Star className="w-8 h-8 text-gray-400 mr-2" />
              <h2 className="text-3xl text-white" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                SILVER
              </h2>
              <Star className="w-8 h-8 text-gray-400 ml-2" />
            </div>
            <div className="flex-grow h-px bg-[#D4AF37]/30"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {silverSponsors.map((sponsor, index) => (
              <div
                key={index}
                className="bg-[#0a0a0a] p-6 border border-[#D4AF37]/30 text-center hover:border-[#D4AF37] transition-all"
              >
                <h3 className="text-lg mb-2 text-white" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                  {sponsor.name}
                </h3>
                <p className="text-gray-400 text-sm" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                  {sponsor.contribution}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bronze Sponsors */}
        <div className="mb-16">
          <div className="flex items-center justify-center mb-8">
            <div className="flex-grow h-px bg-[#D4AF37]/30"></div>
            <div className="flex items-center px-6">
              <Heart className="w-8 h-8 text-orange-400 mr-2" />
              <h2 className="text-3xl text-white" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                BRONZE
              </h2>
              <Heart className="w-8 h-8 text-orange-400 ml-2" />
            </div>
            <div className="flex-grow h-px bg-[#D4AF37]/30"></div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {bronzeSponsors.map((sponsor, index) => (
              <div
                key={index}
                className="bg-[#0a0a0a] p-4 border border-[#D4AF37]/20 text-center hover:border-[#D4AF37] transition-all"
              >
                <p className="text-sm text-gray-300" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                  {sponsor.name}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Become a Sponsor CTA */}
        <div className="relative bg-gradient-to-br from-[#D4AF37]/20 to-black border border-[#D4AF37] p-16 text-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
          <div className="relative">
            <h2 className="text-4xl md:text-5xl mb-6 text-white" style={{ fontFamily: 'Orbitron, sans-serif' }}>
              BECOME A <span className="text-[#D4AF37]">SPONSOR</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
              Join our community of supporters and help inspire the next generation of engineers. 
              Your contribution makes a real difference.
            </p>
            <button
              onClick={() => onNavigate('contact')}
              className="px-10 py-4 bg-[#D4AF37] text-black hover:bg-[#FFD700] transition-all transform hover:scale-105 mb-12"
            >
              CONTACT US TO SPONSOR
            </button>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-left max-w-4xl mx-auto">
              <div className="bg-black/50 border border-[#D4AF37]/30 p-6">
                <h4 className="text-xl mb-2 text-[#D4AF37]" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                  PLATINUM
                </h4>
                <p className="text-gray-400" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                  $10,000+
                </p>
              </div>
              <div className="bg-black/50 border border-[#D4AF37]/30 p-6">
                <h4 className="text-xl mb-2 text-[#D4AF37]" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                  GOLD
                </h4>
                <p className="text-gray-400" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                  $5,000+
                </p>
              </div>
              <div className="bg-black/50 border border-[#D4AF37]/30 p-6">
                <h4 className="text-xl mb-2 text-[#D4AF37]" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                  SILVER
                </h4>
                <p className="text-gray-400" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                  $2,500+
                </p>
              </div>
              <div className="bg-black/50 border border-[#D4AF37]/30 p-6">
                <h4 className="text-xl mb-2 text-[#D4AF37]" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                  BRONZE
                </h4>
                <p className="text-gray-400" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                  $1,000+
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
