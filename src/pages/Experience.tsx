
import React from 'react';
import Layout from '@/components/Layout';
import { experienceData } from '@/data/portfolioData';
import ExperienceCard from '@/components/ExperienceCard';
import TimelineItem from '@/components/TimelineItem';
import { Card, CardContent } from '@/components/ui/card';
import { Briefcase, Star } from 'lucide-react';

const Experience = () => {
  return (
    <Layout>
      <div className="container py-12">
        <h1 className="text-4xl font-bold mb-2">Professional Experience</h1>
        <div className="h-1 w-20 bg-primary rounded mb-8"></div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Experience Cards */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 gap-6">
              {experienceData.map((experience, index) => (
                <ExperienceCard 
                  key={index}
                  position={experience.position}
                  company={experience.company}
                  duration={experience.duration}
                  location={experience.location}
                  responsibilities={experience.responsibilities}
                />
              ))}
            </div>
          </div>
          
          {/* Experience Timeline & Highlights */}
          <div className="lg:col-span-1">
            <Card className="mb-6">
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-4">Career Timeline</h2>
                
                <div className="relative">
                  {experienceData.map((experience, index) => (
                    <TimelineItem
                      key={index}
                      date={experience.duration}
                      title={experience.position}
                      subtitle={experience.company}
                      isLast={index === experienceData.length - 1}
                      delay={index * 100}
                    />
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-4">Career Highlights</h2>
                
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-full bg-primary/10">
                    <Star className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-semibold">Key Achievements</h3>
                </div>
                
                <div className="space-y-3 text-muted-foreground">
                  <p className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary"></span>
                    Managed IT systems for engineering firm
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary"></span>
                    Developed successful marketing strategies for microfinance
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary"></span>
                    Provided artistic direction for event photography
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary"></span>
                    Trained waitstaff in hospitality protocols
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary"></span>
                    Implemented customer retention strategies
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        
        {/* Additional Experience Info */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-6">Professional Insight</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-full bg-primary/10">
                    <Briefcase className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Industry Perspective</h3>
                </div>
                
                <p className="text-muted-foreground mb-4">
                  My diverse work experience across technology, finance, creative, and hospitality sectors has given 
                  me a unique perspective on business operations and customer service across different industries.
                </p>
                
                <p className="text-muted-foreground">
                  Working in such varied roles has enhanced my adaptability and ability to bring cross-disciplinary 
                  thinking to solve complex problems, making me an asset in dynamic work environments.
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-full bg-primary/10">
                    <Star className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Professional Growth</h3>
                </div>
                
                <p className="text-muted-foreground mb-4">
                  Throughout my career, I've consistently sought opportunities to expand my skill set and knowledge base,
                  from self-teaching advanced Excel techniques to pursuing certifications in Angular development.
                </p>
                
                <p className="text-muted-foreground">
                  My current pursuit of an MBA reflects my commitment to continuous professional development and my goal 
                  to combine my technical and hospitality expertise with strong business and management capabilities.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Experience;
