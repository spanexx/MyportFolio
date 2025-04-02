
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import ProfileImagesCarousel from './ProfileImagesCarousel';

const Hero: React.FC = () => {
  const navigate = useNavigate();
  
  return (
    <section className="py-20 md:py-32 flex flex-col items-center justify-center text-center relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.15),transparent_70%)]"></div>
      
      <div className="container max-w-4xl animate-fade-in">
        <ProfileImagesCarousel />
        
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Hello, I'm <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Victor Chidera Ani</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          A versatile professional with expertise in IT and hospitality management, 
          passionate about creating innovative solutions.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" onClick={() => navigate('/about')}>
            Learn More About Me <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          
          <Button size="lg" variant="outline" onClick={() => navigate('/contact')}>
            Get In Touch
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
