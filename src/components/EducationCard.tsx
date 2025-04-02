
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

interface EducationCardProps {
  institution: string;
  degree: string;
  field: string;
  duration: string;
  location: string;
  description?: string;
  className?: string;
}

const EducationCard: React.FC<EducationCardProps> = ({
  institution,
  degree,
  field,
  duration,
  location,
  description,
  className,
}) => {
  return (
    <Card className={cn("card-hover", className)}>
      <CardHeader>
        <div className="flex items-start justify-between">
          <div>
            <CardTitle className="text-xl">{institution}</CardTitle>
            <CardDescription className="mt-1">{location}</CardDescription>
          </div>
          <Badge variant="outline" className="bg-muted/50">{duration}</Badge>
        </div>
      </CardHeader>
      <CardContent>
        <h4 className="text-lg font-medium mb-2">{degree} in {field}</h4>
        {description && <p className="text-muted-foreground">{description}</p>}
      </CardContent>
    </Card>
  );
};

export default EducationCard;
