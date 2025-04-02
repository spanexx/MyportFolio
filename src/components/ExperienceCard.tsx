
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

interface ExperienceCardProps {
  position: string;
  company: string;
  duration: string;
  location: string;
  responsibilities: string[];
  className?: string;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  position,
  company,
  duration,
  location,
  responsibilities,
  className,
}) => {
  return (
    <Card className={cn("card-hover", className)}>
      <CardHeader>
        <div className="flex items-start justify-between">
          <div>
            <CardTitle className="text-xl">{position}</CardTitle>
            <CardDescription className="mt-1">{company} • {location}</CardDescription>
          </div>
          <Badge variant="outline" className="bg-muted/50">{duration}</Badge>
        </div>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2 list-disc list-inside text-muted-foreground">
          {responsibilities.map((responsibility, index) => (
            <li key={index}>{responsibility}</li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default ExperienceCard;
