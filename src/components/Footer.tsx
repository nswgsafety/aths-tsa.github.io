import React from 'react';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-black border-t border-[#D4AF37]/30 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-2xl mb-4 text-[#D4AF37]" style={{ fontFamily: 'Orbitron, sans-serif' }}>
              ATHS ENGINEERING
            </h3>
            <p className="text-gray-400" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
              Applied Technology High School - Empowering students through engineering, innovation, and collaboration.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg mb-4 text-white" style={{ fontFamily: 'Orbitron, sans-serif' }}>
              QUICK LINKS
            </h4>
            <ul className="space-y-2 text-gray-400" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
              <li><a href="#" className="hover:text-[#D4AF37] transition-colors">HOME</a></li>
              <li><a href="#" className="hover:text-[#D4AF37] transition-colors">ABOUT</a></li>
              <li><a href="#" className="hover:text-[#D4AF37] transition-colors">CABINET</a></li>
              <li><a href="#" className="hover:text-[#D4AF37] transition-colors">SPONSORS</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg mb-4 text-white" style={{ fontFamily: 'Orbitron, sans-serif' }}>
              CONTACT
            </h4>
            <ul className="space-y-2 text-gray-400" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
              <li>team@athsengineering.org</li>
              <li>(555) 123-4567</li>
              <li>Applied Technology High School</li>
              <li>Hackensack, NJ 07601</li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-lg mb-4 text-white" style={{ fontFamily: 'Orbitron, sans-serif' }}>
              FOLLOW US
            </h4>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-[#0a0a0a] border border-[#D4AF37]/30 flex items-center justify-center hover:border-[#D4AF37] hover:bg-[#D4AF37]/10 transition-all">
                <Facebook size={20} className="text-[#D4AF37]" />
              </a>
              <a href="#" className="w-10 h-10 bg-[#0a0a0a] border border-[#D4AF37]/30 flex items-center justify-center hover:border-[#D4AF37] hover:bg-[#D4AF37]/10 transition-all">
                <Twitter size={20} className="text-[#D4AF37]" />
              </a>
              <a href="#" className="w-10 h-10 bg-[#0a0a0a] border border-[#D4AF37]/30 flex items-center justify-center hover:border-[#D4AF37] hover:bg-[#D4AF37]/10 transition-all">
                <Instagram size={20} className="text-[#D4AF37]" />
              </a>
              <a href="#" className="w-10 h-10 bg-[#0a0a0a] border border-[#D4AF37]/30 flex items-center justify-center hover:border-[#D4AF37] hover:bg-[#D4AF37]/10 transition-all">
                <Youtube size={20} className="text-[#D4AF37]" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-[#D4AF37]/20 pt-8 text-center">
          <p className="text-gray-400" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
            &copy; {new Date().getFullYear()} ATHS BERGEN TECH KNIGHTS. ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </footer>
  );
}