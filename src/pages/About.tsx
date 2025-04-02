
import React from 'react';
import Layout from '@/components/Layout';
import { personalInfo } from '@/data/portfolioData';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Calendar, Flag, Users, Languages } from 'lucide-react';

const About = () => {
  return (
    <Layout>
      <div className="container py-12">
        <h1 className="text-4xl font-bold mb-2">About Me</h1>
        <div className="h-1 w-20 bg-primary rounded mb-8"></div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Personal Information */}
          <div className="lg:col-span-1">
            <Card className="mb-6">
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-4">Personal Information</h2>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Calendar className="text-primary h-5 w-5" />
                    <div>
                      <p className="text-sm text-muted-foreground">Date of Birth</p>
                      <p>{personalInfo.dateOfBirth}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Flag className="text-primary h-5 w-5" />
                    <div>
                      <p className="text-sm text-muted-foreground">Nationality</p>
                      <p>{personalInfo.nationality}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Users className="text-primary h-5 w-5" />
                    <div>
                      <p className="text-sm text-muted-foreground">Gender</p>
                      <p>{personalInfo.gender}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Languages className="text-primary h-5 w-5" />
                    <div>
                      <p className="text-sm text-muted-foreground">Languages</p>
                      <div>
                        {personalInfo.languages.map((lang, index) => (
                          <p key={index}>{lang.language} ({lang.level})</p>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-4">Interests & Hobbies</h2>
                
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span>Emerging Technologies (AI and Data Science)</span>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span>Finance</span>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span>Hospitality Industry</span>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span>Mentoring Others</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Biography */}
          <div className="lg:col-span-2">
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold mb-6">Biography</h2>
                
                <div className="space-y-4 text-lg leading-relaxed">
                  <p>
                    I am a versatile professional with a unique blend of expertise in Computer Science 
                    and Hospitality Management. My academic journey began with a Diploma in Computer 
                    Science from the Institute of Management and Technology in Nigeria, followed by a 
                    Bachelor's degree in Hospitality Management from Internapa College in Cyprus, where 
                    I had the opportunity to participate in the ERASMUS+ Program at Varna University of 
                    Management in Bulgaria.
                  </p>
                  
                  <p>
                    My professional experience spans various roles, from IT Management and Customer Service 
                    to Bartending and Creative Direction. I have a strong technical skill set, including 
                    proficiency in JavaScript, TypeScript, Angular, Node.js, and React, along with advanced 
                    competencies in MS Office and digital data handling.
                  </p>
                  
                  <p>
                    I am adaptable to both old and new technologies, and my soft skills include leadership, 
                    organizational abilities, communication, teamwork, problem-solving, and stress management. 
                    I have extensive experience managing and mentoring others, including raising five younger 
                    siblings, which has honed my leadership skills.
                  </p>
                  
                  <p>
                    My unique combination of technical knowledge and hospitality expertise allows me to bring 
                    a distinctive perspective to problem-solving, customer service, and project management. 
                    I am passionate about leveraging emerging technologies to enhance experiences in the 
                    hospitality industry, and I am constantly seeking opportunities to expand my knowledge 
                    and skills.
                  </p>
                  
                  <p>
                    Currently, I am pursuing an MBA in Cyprus, which will further enhance my business acumen 
                    and leadership capabilities. I am passionate about emerging technologies, finance, and the 
                    hospitality industry, and I am always eager to connect with like-minded professionals.
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <Card className="card-hover">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Professional Journey</h3>
                  <p className="text-muted-foreground">
                    My career path has combined roles in technology, hospitality, and creative direction,
                    giving me a unique perspective and diverse skill set that allows me to approach
                    problems from multiple angles.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="card-hover">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Personal Growth</h3>
                  <p className="text-muted-foreground">
                    Raising five younger siblings has taught me invaluable lessons in responsibility,
                    patience, leadership, and mentorship – skills that I've carried into my professional life
                    and continue to develop through ongoing education and personal development.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
