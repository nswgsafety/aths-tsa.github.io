import React from 'react';
import { Target, Trophy, Rocket } from 'lucide-react';

export function AboutPage() {
  return (
    <div className="bg-black min-h-screen pt-20">
      {/* Header */}
      <div className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#D4AF37]/10 to-transparent"></div>
        <div className="relative max-w-4xl mx-auto text-center px-4">
          <h1 className="text-5xl md:text-7xl mb-6 text-white" style={{ fontFamily: 'Orbitron, sans-serif' }}>
            ABOUT THE <span className="text-[#D4AF37]">KNIGHTS</span>
          </h1>
          <div className="w-24 h-1 bg-[#D4AF37] mx-auto mb-6"></div>
          <p className="text-xl text-gray-300" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
            Empowering students through engineering, innovation, and collaboration
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative group">
            <div className="absolute inset-0 bg-[#D4AF37]/20 transform group-hover:scale-105 transition-transform"></div>
            <img
              src="https://images.unsplash.com/photo-1581092334247-44dd684e3c82?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwcm9ib3RpY3MlMjB0ZWFtfGVufDF8fHx8MTc2Nzk2NDM0OXww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Robotics Team"
              className="relative w-full border border-[#D4AF37]/30"
            />
          </div>
          <div>
            <div className="flex items-center mb-6">
              <Target className="w-12 h-12 text-[#D4AF37] mr-4" />
              <h2 className="text-3xl md:text-4xl text-white" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                OUR MISSION
              </h2>
            </div>
            <p className="text-gray-300 text-lg mb-4" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
              The Technology Student Association (TSA) Engineering Team is dedicated to fostering innovation, 
              creativity, and technical excellence among students passionate about engineering and technology.
            </p>
            <p className="text-gray-300 text-lg" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
              We believe in hands-on learning, collaborative problem-solving, and preparing the next generation 
              of engineers to tackle real-world challenges with innovative solutions.
            </p>
          </div>
        </div>

        {/* Vision and Values */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-[#0a0a0a] border border-[#D4AF37]/30 p-8 hover:border-[#D4AF37] transition-all">
            <div className="flex items-center mb-6">
              <Rocket className="w-12 h-12 text-[#D4AF37] mr-4" />
              <h3 className="text-2xl text-white" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                OUR VISION
              </h3>
            </div>
            <p className="text-gray-300" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
              To be a leading student organization that inspires and empowers young engineers to create 
              innovative solutions that make a positive impact on society and shape the future of technology.
            </p>
          </div>
          <div className="bg-[#0a0a0a] border border-[#D4AF37]/30 p-8 hover:border-[#D4AF37] transition-all">
            <div className="flex items-center mb-6">
              <Trophy className="w-12 h-12 text-[#D4AF37] mr-4" />
              <h3 className="text-2xl text-white" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                OUR VALUES
              </h3>
            </div>
            <ul className="text-gray-300 space-y-2" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
              <li className="flex items-center">
                <span className="text-[#D4AF37] mr-2">▸</span> Innovation and Creative Thinking
              </li>
              <li className="flex items-center">
                <span className="text-[#D4AF37] mr-2">▸</span> Teamwork and Collaboration
              </li>
              <li className="flex items-center">
                <span className="text-[#D4AF37] mr-2">▸</span> Excellence in Engineering
              </li>
              <li className="flex items-center">
                <span className="text-[#D4AF37] mr-2">▸</span> Ethical Problem Solving
              </li>
              <li className="flex items-center">
                <span className="text-[#D4AF37] mr-2">▸</span> Continuous Learning
              </li>
            </ul>
          </div>
        </div>

        {/* What We Do */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl text-center mb-12 text-white" style={{ fontFamily: 'Orbitron, sans-serif' }}>
            WHAT WE <span className="text-[#D4AF37]">DO</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border-l-4 border-[#D4AF37] pl-6 bg-[#0a0a0a] p-6">
              <h3 className="text-xl mb-3 text-white" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                COMPETITIONS
              </h3>
              <p className="text-gray-400" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                We participate in regional, state, and national TSA competitions, showcasing our engineering 
                skills across various categories including robotics, design, and technical challenges.
              </p>
            </div>
            <div className="border-l-4 border-[#D4AF37] pl-6 bg-[#0a0a0a] p-6">
              <h3 className="text-xl mb-3 text-white" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                PROJECTS
              </h3>
              <p className="text-gray-400" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                Our team works on diverse engineering projects throughout the year, from designing sustainable 
                solutions to building innovative prototypes that address real-world problems.
              </p>
            </div>
            <div className="border-l-4 border-[#D4AF37] pl-6 bg-[#0a0a0a] p-6">
              <h3 className="text-xl mb-3 text-white" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                COMMUNITY OUTREACH
              </h3>
              <p className="text-gray-400" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                We engage with our local community through STEM workshops, mentoring younger students, and 
                demonstrating how engineering can make a difference in people's lives.
              </p>
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div className="bg-gradient-to-br from-[#D4AF37]/10 to-transparent border border-[#D4AF37]/30 p-12">
          <h2 className="text-3xl md:text-4xl text-center mb-12 text-white" style={{ fontFamily: 'Orbitron, sans-serif' }}>
            TEAM STATISTICS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl md:text-6xl text-[#D4AF37] mb-3" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                1st
              </div>
              <p className="text-gray-300" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                State Robotics Competition
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl text-[#D4AF37] mb-3" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                3rd
              </div>
              <p className="text-gray-300" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                National Engineering Design
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl text-[#D4AF37] mb-3" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                25+
              </div>
              <p className="text-gray-300" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                Projects Completed
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl text-[#D4AF37] mb-3" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                50+
              </div>
              <p className="text-gray-300" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                Active Members
              </p>
            </div>
          </div>
        </div>

        {/* Detailed Accomplishments Brag Sheet */}
        <div className="mt-16">
          <h2 className="text-3xl md:text-4xl text-center mb-12 text-white" style={{ fontFamily: 'Orbitron, sans-serif' }}>
            CHAMPIONSHIP <span className="text-[#D4AF37]">RECORD</span>
          </h2>
          
          <div className="space-y-8">
            {/* 2025 Season */}
            <div className="bg-[#0a0a0a] border border-[#D4AF37]/30 p-8">
              <h3 className="text-2xl mb-6 text-[#D4AF37]" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                2025 SEASON
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border-l-4 border-[#D4AF37] pl-4">
                  <h4 className="text-lg text-white mb-2" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                    1st Place - State Robotics Competition
                  </h4>
                  <p className="text-gray-400" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                    NJ TSA State Conference - Advanced autonomous navigation
                  </p>
                </div>
                <div className="border-l-4 border-[#D4AF37] pl-4">
                  <h4 className="text-lg text-white mb-2" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                    2nd Place - Engineering Design
                  </h4>
                  <p className="text-gray-400" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                    NJ TSA State Conference - Sustainable infrastructure
                  </p>
                </div>
              </div>
            </div>

            {/* 2024 Season */}
            <div className="bg-[#0a0a0a] border border-[#D4AF37]/30 p-8">
              <h3 className="text-2xl mb-6 text-[#D4AF37]" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                2024 SEASON
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="border-l-4 border-[#D4AF37] pl-4">
                  <h4 className="text-lg text-white mb-2" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                    3rd Place - National Robotics
                  </h4>
                  <p className="text-gray-400" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                    TSA National Conference
                  </p>
                </div>
                <div className="border-l-4 border-[#D4AF37] pl-4">
                  <h4 className="text-lg text-white mb-2" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                    1st Place - Software Development
                  </h4>
                  <p className="text-gray-400" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                    NJ TSA State Conference
                  </p>
                </div>
                <div className="border-l-4 border-[#D4AF37] pl-4">
                  <h4 className="text-lg text-white mb-2" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                    Top 10 - National STEM
                  </h4>
                  <p className="text-gray-400" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                    TSA National Conference
                  </p>
                </div>
              </div>
            </div>

            {/* 2023 Season */}
            <div className="bg-[#0a0a0a] border border-[#D4AF37]/30 p-8">
              <h3 className="text-2xl mb-6 text-[#D4AF37]" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                2023 SEASON
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="border-l-4 border-[#D4AF37] pl-4">
                  <h4 className="text-lg text-white mb-2" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                    1st Place - Structural Design
                  </h4>
                  <p className="text-gray-400" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                    NJ TSA State Conference
                  </p>
                </div>
                <div className="border-l-4 border-[#D4AF37] pl-4">
                  <h4 className="text-lg text-white mb-2" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                    2nd Place - Manufacturing
                  </h4>
                  <p className="text-gray-400" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                    Regional Competition
                  </p>
                </div>
                <div className="border-l-4 border-[#D4AF37] pl-4">
                  <h4 className="text-lg text-white mb-2" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                    1st Place - Coding
                  </h4>
                  <p className="text-gray-400" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                    NJ TSA State Conference
                  </p>
                </div>
              </div>
            </div>

            {/* Additional Honors */}
            <div className="bg-gradient-to-br from-[#D4AF37]/20 to-transparent border border-[#D4AF37] p-8">
              <h3 className="text-2xl mb-6 text-white" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                ADDITIONAL <span className="text-[#D4AF37]">HONORS</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start">
                  <span className="text-[#D4AF37] mr-3 text-2xl">▸</span>
                  <p className="text-gray-300" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                    Multiple National Qualifications (5+ events per year)
                  </p>
                </div>
                <div className="flex items-start">
                  <span className="text-[#D4AF37] mr-3 text-2xl">▸</span>
                  <p className="text-gray-300" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                    Chapter Excellence Award Recipient
                  </p>
                </div>
                <div className="flex items-start">
                  <span className="text-[#D4AF37] mr-3 text-2xl">▸</span>
                  <p className="text-gray-300" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                    Outstanding Community Service Recognition
                  </p>
                </div>
                <div className="flex items-start">
                  <span className="text-[#D4AF37] mr-3 text-2xl">▸</span>
                  <p className="text-gray-300" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                    15+ State Championship Medals (2022-2025)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}