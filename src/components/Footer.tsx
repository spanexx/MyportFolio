
import React from 'react';
import { Mail, Phone, Instagram, Globe } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-muted/30 pt-10 pb-6 border-t">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Victor Chidera Ani</h3>
            <p className="text-muted-foreground mb-4">
              A versatile professional with expertise in hospitality management and computer science.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="hover:text-primary transition-colors">Home</a></li>
              <li><a href="/about" className="hover:text-primary transition-colors">About</a></li>
              <li><a href="/education" className="hover:text-primary transition-colors">Education</a></li>
              <li><a href="/experience" className="hover:text-primary transition-colors">Experience</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Mail size={18} className="text-primary" />
                <a href="mailto:victorchideraani@gmail.com" className="hover:text-primary transition-colors">
                  victorchideraani@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={18} className="text-primary" />
                <a href="tel:+48883929543" className="hover:text-primary transition-colors">
                  (+48) 883929543
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Instagram size={18} className="text-primary" />
                <a href="https://instagram.com/span.exx_" className="hover:text-primary transition-colors" target="_blank" rel="noreferrer">
                  @span.exx_
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Globe size={18} className="text-primary" />
                <a href="https://spanexx.com" className="hover:text-primary transition-colors" target="_blank" rel="noreferrer">
                  spanexx.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-border/50 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Victor Chidera Ani. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
