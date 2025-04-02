
import React from 'react';
import { cn } from '@/lib/utils';

interface TimelineItemProps {
  date: string;
  title: string;
  subtitle?: string;
  description?: string;
  className?: string;
  isLast?: boolean;
  delay?: number;
}

const TimelineItem: React.FC<TimelineItemProps> = ({
  date,
  title,
  subtitle,
  description,
  className,
  isLast = false,
  delay = 0,
}) => {
  return (
    <div 
      className={cn("timeline-item", className)}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="mb-1 font-medium text-primary">{date}</div>
      <h3 className="text-xl font-semibold">{title}</h3>
      {subtitle && <p className="text-muted-foreground mb-2">{subtitle}</p>}
      {description && <p className="mt-2 text-muted-foreground">{description}</p>}
    </div>
  );
};

export default TimelineItem;
