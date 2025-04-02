
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { Code, Coffee, GraduationCap, Users } from 'lucide-react';

interface SkillCardProps {
  title: string;
  skills: string[];
  icon: string;
  className?: string;
}

const SkillCard: React.FC<SkillCardProps> = ({
  title,
  skills,
  icon,
  className,
}) => {
  // Function to render the appropriate icon based on the string identifier
  const renderIcon = () => {
    switch (icon) {
      case 'code':
        return <Code size={24} />;
      case 'coffee':
        return <Coffee size={24} />;
      case 'users':
        return <Users size={24} />;
      case 'graduation-cap':
        return <GraduationCap size={24} />;
      default:
        return null;
    }
  };

  return (
    <Card className={cn("card-hover h-full", className)}>
      <CardContent className="pt-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="text-primary">{renderIcon()}</div>
          <h3 className="text-xl font-semibold">{title}</h3>
        </div>
        
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <span 
              key={index} 
              className="bg-muted px-3 py-1 rounded-full text-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default SkillCard;
