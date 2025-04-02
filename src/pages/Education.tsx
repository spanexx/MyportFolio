
import React from 'react';
import Layout from '@/components/Layout';
import { educationData } from '@/data/portfolioData';
import EducationCard from '@/components/EducationCard';
import { Card, CardContent } from '@/components/ui/card';
import TimelineItem from '@/components/TimelineItem';
import { GraduationCap } from 'lucide-react';

const Education = () => {
  return (
    <Layout>
      <div className="container py-12">
        <h1 className="text-4xl font-bold mb-2">Education</h1>
        <div className="h-1 w-20 bg-primary rounded mb-8"></div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Primary Education Information */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 gap-6">
              {educationData.map((education, index) => (
                <EducationCard 
                  key={index}
                  institution={education.institution}
                  degree={education.degree}
                  field={education.field}
                  duration={education.duration}
                  location={education.location}
                  description={education.description}
                />
              ))}
            </div>
          </div>
          
          {/* Education Timeline & Stats */}
          <div className="lg:col-span-1">
            <Card className="mb-6">
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-4">Education Timeline</h2>
                
                <div className="relative">
                  {educationData.map((education, index) => (
                    <TimelineItem
                      key={index}
                      date={education.duration}
                      title={education.degree}
                      subtitle={education.institution}
                      isLast={index === educationData.length - 1}
                      delay={index * 100}
                    />
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-4">Academic Highlights</h2>
                
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-full bg-primary/10">
                    <GraduationCap className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-semibold">Notable Achievements</h3>
                </div>
                
                <div className="space-y-3 text-muted-foreground">
                  <p className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary"></span>
                    ERASMUS+ Program Participant
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary"></span>
                    Angular Framework Certification
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary"></span>
                    Advanced Excel Training (Self-taught)
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary"></span>
                    Graduated with Upper Credit from IMT
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary"></span>
                    Currently pursuing MBA
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        
        {/* Additional Academic Info */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-6">Academic Records</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Computer Science Diploma Highlights</h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium">Technical Courses</h4>
                    <p className="text-muted-foreground">
                      Completed courses in Programming Languages (BASIC, FORTRAN), Web Technology, 
                      Computer Systems, Digital Electronics, and more.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium">Project Work</h4>
                    <p className="text-muted-foreground">
                      Final project earned a "Distinction" grade, demonstrating excellence in applying 
                      theoretical knowledge to practical solutions.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium">Academic Performance</h4>
                    <p className="text-muted-foreground">
                      Consistently achieved strong grades across technical subjects, with a GPA ranging 
                      from 2.73 to 3.1 across semesters.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Hospitality Management Degree Highlights</h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium">Core Hospitality Courses</h4>
                    <p className="text-muted-foreground">
                      Studied Food & Beverage Management, Rooms Division Management, Hospitality Revenue 
                      & Cost Management, and Tourism Destination Management.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium">Practical Experience</h4>
                    <p className="text-muted-foreground">
                      Completed three internships as part of the curriculum, gaining hands-on experience 
                      in real hospitality environments.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium">International Perspective</h4>
                    <p className="text-muted-foreground">
                      ERASMUS+ program at Varna University of Management provided exposure to international 
                      hospitality practices and cross-cultural understanding.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Education;
