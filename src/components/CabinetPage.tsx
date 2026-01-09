import React from 'react';
import { Mail, Linkedin } from 'lucide-react';

export function CabinetPage() {
  const cabinetMembers = [
    {
      name: 'Ian Andujar',
      position: 'President',
      description: 'Leading the team with passion for robotics and aerospace engineering. 3 years of TSA experience. Drone Team Lead',
      email: '',
    },
    {
      name: 'Aasritha Guntupalli',
      position: 'Vice President',
      description: 'Specializes in fasion design. Coordinates project timelines and resources.',
      email: '',
    },
    {
      name: 'Sabrina Usman',
      position: 'Secretary',
      description: 'Leading the fashion design team and main presenter at competions.',
      email: '',
    },
    {
      name: 'Loni Higinio',
      position: 'Treasurer',
      description: 'Handles budget and fundraising. Leading fashion designer and material coordinator.',
      email: '',
    },
    {
      name: 'Steve Cohen',
      position: 'Advisor',
      description: 'Advisor vital to all TSA Operations, including the inner workings of the club, and assisting in all projects.',
      email: '',
    },

  ];

  return (
    <div className="bg-black min-h-screen pt-20">
      {/* Header */}
      <div className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#D4AF37]/10 to-transparent"></div>
        <div className="relative max-w-4xl mx-auto text-center px-4">
          <h1 className="text-5xl md:text-7xl mb-6 text-white" style={{ fontFamily: 'Orbitron, sans-serif' }}>
            TEAM <span className="text-[#D4AF37]">CABINET</span>
          </h1>
          <div className="w-24 h-1 bg-[#D4AF37] mx-auto mb-6"></div>
          <p className="text-xl text-gray-300" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
            Meet the leaders driving our team's success and innovation
          </p>
        </div>
      </div>

      {/* Cabinet Members */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {cabinetMembers.map((member, index) => (
            <div
              key={index}
              className="group bg-[#0a0a0a] border border-[#D4AF37]/20 overflow-hidden hover:border-[#D4AF37] transition-all"
            >
              {/* Avatar Placeholder */}
              <div className="h-48 bg-gradient-to-br from-[#D4AF37]/20 to-black flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
                <div className="relative w-32 h-32 bg-black border-2 border-[#D4AF37] flex items-center justify-center">
                  <span className="text-4xl text-[#D4AF37]" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl mb-1 text-white" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                  {member.name}
                </h3>
                <p className="text-[#D4AF37] mb-3 tracking-wider" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                  {member.position}
                </p>
                <p className="text-gray-400 text-sm mb-4" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                  {member.description}
                </p>
                
                <div className="flex gap-3">
                  <a
                    href={`mailto:${member.email}`}
                    className="text-gray-400 hover:text-[#D4AF37] transition-colors"
                    title="Email"
                  >
                    <Mail size={20} />
                  </a>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-[#D4AF37] transition-colors"
                    title="LinkedIn"
                  >
                    <Linkedin size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Join Section */}
        <div className="mt-16 bg-gradient-to-br from-[#D4AF37]/10 to-transparent border border-[#D4AF37]/30 p-12 text-center">
          <h2 className="text-3xl md:text-4xl mb-4 text-white" style={{ fontFamily: 'Orbitron, sans-serif' }}>
            INTERESTED IN JOINING OUR CABINET?
          </h2>
          <p className="text-gray-300 text-lg mb-6 max-w-2xl mx-auto" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
            We're always looking for passionate and dedicated students to join our leadership team. 
            Cabinet positions open at the beginning of each school year.
          </p>
          <p className="text-gray-400" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
            Contact us to learn more about leadership opportunities and how you can make an impact!
          </p>
        </div>
      </div>
    </div>
  );
}