import React from 'react';
import { Button } from "@/components/ui/button";
import { useNavigate } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const Header: React.FC = () => {
  const navigate = useNavigate();
  const isMobile = useIsMobile();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const links = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Education', path: '/education' },
    { name: 'Experience', path: '/experience' },
    { name: 'Skills', path: '/skills' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavigate = (path: string) => {
    navigate(path);
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b">
      <div className="container flex justify-between items-center py-4">
        <img 
          src="/logoPortfolio.png" 
          alt="Victor Ani Logo" 
          onClick={() => navigate('/')} 
          className="h-10 w-10 shrink-0"
        />

        {isMobile ? (
          <>
            <Button variant="ghost" size="icon" onClick={toggleMenu}>
              {isMenuOpen ? <X /> : <Menu />}
            </Button>
            
            {isMenuOpen && (
              <nav className="fixed inset-0 top-16 bg-background animate-fade-in z-50">
                <ul className="flex flex-col gap-4 p-6  bg-gray-800 rounded-lg shadow-lg">
                  {links.map((link) => (
                    <li key={link.path}>
                      <Button 
                        variant="ghost" 
                        className="w-full text-left justify-start text-lg text-white" 
                        onClick={() => handleNavigate(link.path)}
                      >
                        {link.name}
                      </Button>
                    </li>
                  ))}
                </ul>
              </nav>
            )}
          </>
        ) : (
          <nav>
            <ul className="flex space-x-1">
              {links.map((link) => (
                <li key={link.path}>
                  <Button 
                    variant="ghost" 
                    onClick={() => navigate(link.path)}
                    className={cn(
                      "font-medium",
                      window.location.pathname === link.path && "bg-muted text-primary"
                    )}
                  >
                    {link.name}
                  </Button>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
