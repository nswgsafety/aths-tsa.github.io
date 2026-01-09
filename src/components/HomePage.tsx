import React from 'react';
import { ChevronRight, Zap, Code, Cpu, Rocket } from 'lucide-react';
import { Carousel, InfiniteCarousel } from './Carousel';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  // Team data - fully customizable
  const teams = [
    {
      name: 'Drone(UAV)',
      icon: <Rocket className="w-16 h-16" />,
      description: 'Designing drones to pickup and move payloads',
      members: 6,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxNa9b718Ae7QtNWf6GOsPnvCa-Ajca0Daxg&s',
    },
    {
      name: 'Fashion Design',
      icon: <Code className="w-16 h-16" />,
      description: 'Designing, and envishioning new fashion',
      members: 4,
      image: 'https://images.squarespace-cdn.com/content/v1/5fec0c771132b918b81ed739/bf566a13-7bea-4d51-b748-49f0dda24aa7/how+to+become+a+fashion+designer.jpg',
    },
    {
      name: 'Robotics',
      icon: <Cpu className="w-16 h-16" />,
      description: 'Building autonomous systems and competition robots',
      members: 6,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSa6Yw-kyzEQx3YUeYmrrEkxMS5dBFjRDZcA&s',
    },
  ];

  // Sponsor logos - placeholders that can be replaced
  const sponsors = [
    { name: 'Tech Industries', logo: 'TI' },
    { name: 'Innovation Partners', logo: 'IP' },
    { name: 'Engineering Solutions', logo: 'ES' },
    { name: 'Future Tech', logo: 'FT' },
    { name: 'Robotics Systems', logo: 'RS' },
    { name: 'Local Manufacturing', logo: 'LM' },
    { name: 'Community Bank', logo: 'CB' },
    { name: 'Design Workshop', logo: 'DW' },
  ];

  return (
    <div className="bg-black">
      {/* Hero Section - SpaceX inspired */}
      <div className="relative h-screen">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1596496181848-3091d4878b24?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbmdpbmVlcmluZyUyMHN0dWRlbnRzJTIwd29ya3Nob3B8ZW58MXx8fHwxNzY3OTY0MzQ4fDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Engineering"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black"></div>
        </div>
        
        <div className="relative h-full flex items-end pb-32">
          <div className="w-full px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <h1 
                className="text-5xl md:text-7xl lg:text-8xl mb-6 text-white tracking-wider"
                style={{ fontFamily: 'Orbitron, sans-serif' }}
              >
                TSA<br />
                <span className="text-[#D4AF37]">ATHS</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                Engineering Tomorrow's Solutions Today
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => onNavigate('about')}
                  className="px-8 py-4 bg-[#D4AF37] text-black hover:bg-[#FFD700] transition-all transform hover:scale-105"
                >
                  EXPLORE MORE
                </button>
                <button
                  onClick={() => onNavigate('contact')}
                  className="px-8 py-4 border-2 border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black transition-all transform hover:scale-105"
                >
                  CONTACT US
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronRight className="w-8 h-8 text-[#D4AF37] rotate-90" />
        </div>
      </div>

      {/* Quick Links Section */}
      <div className="py-20 bg-gradient-to-b from-black to-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'ABOUT US', desc: 'Our mission and vision', page: 'about' },
              { title: 'CABINET', desc: 'Meet our leaders', page: 'cabinet' },
              { title: 'SPONSORS', desc: 'Our valued partners', page: 'sponsors' },
              { title: 'CONTACT', desc: 'Get in touch', page: 'contact' },
            ].map((link, idx) => (
              <button
                key={idx}
                onClick={() => onNavigate(link.page)}
                className="group relative overflow-hidden bg-[#0a0a0a] border border-[#D4AF37]/30 p-8 hover:border-[#D4AF37] transition-all"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/0 to-[#D4AF37]/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative">
                  <h3 className="text-2xl mb-2 text-white group-hover:text-[#D4AF37] transition-colors" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                    {link.title}
                  </h3>
                  <p className="text-gray-400" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                    {link.desc}
                  </p>
                  <ChevronRight className="absolute top-1/2 right-0 transform -translate-y-1/2 text-[#D4AF37] opacity-0 group-hover:opacity-100 group-hover:right-4 transition-all" />
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Teams Carousel Section */}
      <div className="py-24 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 
              className="text-4xl md:text-5xl mb-4 text-white"
              style={{ fontFamily: 'Orbitron, sans-serif' }}
            >
              OUR <span className="text-[#D4AF37]">TEAMS</span>
            </h2>
            <div className="w-24 h-1 bg-[#D4AF37] mx-auto"></div>
          </div>

          <Carousel autoplay autoplaySpeed={4000} slidesToShow={3} className="team-carousel">
            {teams.map((team, idx) => (
              <div key={idx} className="px-3">
                <div className="group relative overflow-hidden bg-black border border-[#D4AF37]/20 hover:border-[#D4AF37] transition-all">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={team.image}
                      alt={team.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                  </div>
                  <div className="p-6">
                    <div className="text-[#D4AF37] mb-4">{team.icon}</div>
                    <h3 
                      className="text-2xl mb-3 text-white"
                      style={{ fontFamily: 'Orbitron, sans-serif' }}
                    >
                      {team.name}
                    </h3>
                    <p className="text-gray-400 mb-4" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                      {team.description}
                    </p>
                    <div className="flex items-center text-[#D4AF37]">
                      <span style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                        {team.members} Members
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-20 bg-gradient-to-b from-[#0a0a0a] to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '20+', label: 'MEMBERS' },
              { value: '3', label: 'PROJECTS' },
              { value: '3', label: 'AWARDS' },
              { value: '1', label: 'SPONSORS' },
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <div 
                  className="text-5xl md:text-6xl mb-2 text-[#D4AF37]"
                  style={{ fontFamily: 'Orbitron, sans-serif' }}
                >
                  {stat.value}
                </div>
                <div 
                  className="text-gray-400 tracking-widest"
                  style={{ fontFamily: 'Rajdhani, sans-serif' }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* TSA Explanation Section */}
      <div className="py-24 bg-black border-y border-[#D4AF37]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl mb-6 text-white" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                WHAT IS <span className="text-[#D4AF37]">TSA</span>?
              </h2>
              <div className="w-24 h-1 bg-[#D4AF37] mb-8"></div>
              <p className="text-xl text-gray-300 mb-6" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                The Technology Student Association (TSA) is a national organization of students engaged in 
                science, technology, engineering, and mathematics (STEM). With over 250,000 members nationwide, 
                TSA provides competitive events, leadership opportunities, and hands-on experiences.
              </p>
              <p className="text-lg text-gray-400 mb-6" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                As members of TSA, we compete in regional, state, and national competitions across multiple 
                engineering disciplines, showcasing our technical skills, innovation, and teamwork.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-[#0a0a0a] border border-[#D4AF37]/30 px-6 py-3">
                  <span className="text-[#D4AF37]" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                    NATIONAL ORGANIZATION
                  </span>
                </div>
                <div className="bg-[#0a0a0a] border border-[#D4AF37]/30 px-6 py-3">
                  <span className="text-[#D4AF37]" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                    40+ COMPETITIVE EVENTS
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl text-white mb-6" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                OUR <span className="text-[#D4AF37]">COMPETITIONS</span>
              </h3>
              {[
                { event: 'Drone/UAV', level: 'State & National' },
                { event: 'Robotics & Automation', level: 'State & National' },
                { event: 'Engineering Design', level: 'State & National' },
                { event: 'Software Development', level: 'State' },
                { event: 'Structural Engineering', level: 'State & National' },
                { event: 'Manufacturing Prototype', level: 'State' },
                { event: 'Biotechnology Design', level: 'State' },
                { event: 'System Control Technology', level: 'State & National' },
              ].map((comp, idx) => (
                <div 
                  key={idx}
                  className="bg-[#0a0a0a] border-l-4 border-[#D4AF37] p-4 hover:bg-[#D4AF37]/5 transition-all"
                >
                  <div className="flex justify-between items-center">
                    <h4 className="text-lg text-white" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                      {comp.event}
                    </h4>
                    <span className="text-sm text-[#D4AF37]" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                      {comp.level}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Brag Sheet / Accomplishments */}
      <div className="py-24 bg-gradient-to-b from-black to-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl mb-4 text-white" style={{ fontFamily: 'Orbitron, sans-serif' }}>
              AWARDS <span className="text-[#D4AF37]">WON</span>
            </h2>
            <div className="w-24 h-1 bg-[#D4AF37] mx-auto mb-6"></div>
            <p className="text-xl text-gray-400" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
              Our legacy of excellence and innovation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                year: '2025',
                title: '6th Place',
                event: 'NJ TSA State Conference',
                description: 'Drone/UAV competition'
              },
              {
                year: '2025',
                title: 'National Qualifier',
                event: 'NJ TSA State Conference',
                description: 'Drone/UAV competition'
              },
            ].map((achievement, idx) => (
              <div 
                key={idx}
                className="group bg-[#0a0a0a] border border-[#D4AF37]/20 p-6 hover:border-[#D4AF37] hover:bg-gradient-to-br hover:from-[#D4AF37]/10 hover:to-transparent transition-all"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="text-5xl text-[#D4AF37]/30 group-hover:text-[#D4AF37]/50 transition-colors" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                    {achievement.year}
                  </div>
                  <div className="w-2 h-2 bg-[#D4AF37] transform rotate-45"></div>
                </div>
                <h3 className="text-xl mb-2 text-white" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                  {achievement.title}
                </h3>
                <p className="text-[#D4AF37] mb-3" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                  {achievement.event}
                </p>
                <p className="text-gray-400 text-sm" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                  {achievement.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Sponsors Carousel Section */}
      <div className="py-20 bg-black border-t border-[#D4AF37]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <div className="text-center">
            <h2 
              className="text-3xl md:text-4xl mb-4 text-white"
              style={{ fontFamily: 'Orbitron, sans-serif' }}
            >
              SPONSORED BY
            </h2>
            <div className="w-24 h-1 bg-[#D4AF37] mx-auto mb-2"></div>
          </div>
        </div>

        <div className="relative overflow-hidden">
          <InfiniteCarousel speed={30} slidesToShow={6}>
            {sponsors.map((sponsor, idx) => (
              <div key={idx}>
                <div className="flex items-center justify-center h-32 bg-[#0a0a0a] border border-[#D4AF37]/20 hover:border-[#D4AF37] transition-all mx-2">
                  <div 
                    className="text-4xl text-[#D4AF37] opacity-60 hover:opacity-100 transition-opacity"
                    style={{ fontFamily: 'Orbitron, sans-serif' }}
                  >
                    {sponsor.logo}
                  </div>
                </div>
              </div>
            ))}
          </InfiniteCarousel>
        </div>

        <div className="text-center mt-12">
          <button
            onClick={() => onNavigate('sponsors')}
            className="px-8 py-3 border-2 border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black transition-all"
          >
            BECOME A SPONSOR
          </button>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-[#D4AF37]/20 to-black"></div>
        <div className="relative max-w-4xl mx-auto text-center px-4">
          <h2 
            className="text-4xl md:text-6xl mb-6 text-white"
            style={{ fontFamily: 'Orbitron, sans-serif' }}
          >
            READY TO <span className="text-[#D4AF37]">INNOVATE</span>?
          </h2>
          <p className="text-xl text-gray-300 mb-8" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
            Join us in shaping the future of engineering and technology
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="px-12 py-5 bg-[#D4AF37] text-black text-xl hover:bg-[#FFD700] transition-all transform hover:scale-105"
          >
            GET STARTED
          </button>
        </div>
      </div>
    </div>
  );
}