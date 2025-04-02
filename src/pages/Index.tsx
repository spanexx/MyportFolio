
import React from 'react';
import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Briefcase, Code, Coffee, GraduationCap, User, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { educationData, experienceData, skillsData } from '@/data/portfolioData';

const Index = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      <Hero />
      
      {/* About Summary */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="section-heading mb-6">About Me</h2>
              <p className="text-lg mb-6 text-muted-foreground leading-relaxed">
                I'm a versatile professional with expertise in both information technology and hospitality management. 
                My unique educational background combines computer science with hospitality management, giving me a 
                diverse perspective on problem-solving and customer service.
              </p>
              <Button onClick={() => navigate('/about')} className="mt-2">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Card className="animate-slide-up shadow-lg card-hover">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="p-2 rounded-full bg-primary/10">
                      <User className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-medium">Experience</h3>
                  </div>
                  <p className="text-muted-foreground">Over 8 years of professional experience across multiple industries</p>
                </CardContent>
              </Card>
              
              <Card className="animate-slide-up shadow-lg card-hover" style={{ animationDelay: '100ms' }}>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="p-2 rounded-full bg-primary/10">
                      <GraduationCap className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-medium">Education</h3>
                  </div>
                  <p className="text-muted-foreground">Dual expertise in Computer Science and Hospitality Management</p>
                </CardContent>
              </Card>
              
              <Card className="animate-slide-up shadow-lg card-hover" style={{ animationDelay: '200ms' }}>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="p-2 rounded-full bg-primary/10">
                      <Code className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-medium">Tech Skills</h3>
                  </div>
                  <p className="text-muted-foreground">Proficient in JavaScript, TypeScript, Angular, Node.js, and React</p>
                </CardContent>
              </Card>
              
              <Card className="animate-slide-up shadow-lg card-hover" style={{ animationDelay: '300ms' }}>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="p-2 rounded-full bg-primary/10">
                      <Briefcase className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-medium">Leadership</h3>
                  </div>
                  <p className="text-muted-foreground">Extensive experience in managing teams and mentoring others</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Education */}
      <section className="py-16">
        <div className="container">
          <h2 className="section-heading mb-8">Education Highlights</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {educationData.slice(0, 2).map((education, index) => (
              <Card key={index} className="card-hover">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-semibold">{education.institution}</h3>
                      <p className="text-muted-foreground text-sm mb-2">{education.location}</p>
                      <p className="font-medium">{education.degree} in {education.field}</p>
                      <p className="text-muted-foreground mt-2">{education.description}</p>
                    </div>
                    <div className="text-sm text-muted-foreground">{education.duration}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-8 text-center">
            <Button variant="outline" onClick={() => navigate('/education')}>
              View All Education <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>
      
      {/* Featured Experience */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <h2 className="section-heading mb-8">Professional Experience</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {experienceData.slice(0, 2).map((experience, index) => (
              <Card key={index} className="card-hover">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-semibold">{experience.position}</h3>
                      <p className="text-muted-foreground text-sm mb-2">{experience.company} • {experience.location}</p>
                      <ul className="list-disc list-inside text-muted-foreground mt-2">
                        {experience.responsibilities.slice(0, 2).map((responsibility, idx) => (
                          <li key={idx}>{responsibility}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="text-sm text-muted-foreground">{experience.duration}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-8 text-center">
            <Button variant="outline" onClick={() => navigate('/experience')}>
              View All Experience <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>
      
      {/* Skills Overview */}
      <section className="py-16">
        <div className="container">
          <h2 className="section-heading mb-8">Skills Overview</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {skillsData.map((skillGroup, index) => (
              <Card key={index} className="card-hover">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-primary">{skillGroup.icon}</div>
                    <h3 className="font-semibold">{skillGroup.category}</h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.slice(0, 4).map((skill, idx) => (
                      <span 
                        key={idx} 
                        className="bg-muted px-2 py-1 rounded-full text-xs"
                      >
                        {skill}
                      </span>
                    ))}
                    {skillGroup.items.length > 4 && (
                      <span className="text-xs text-muted-foreground">+{skillGroup.items.length - 4} more</span>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-8 text-center">
            <Button variant="outline" onClick={() => navigate('/skills')}>
              View All Skills <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Connect?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto text-muted-foreground">
            I'm always open to discussing new projects, opportunities, and collaborations.
            Feel free to reach out if you'd like to connect!
          </p>
          <Button size="lg" onClick={() => navigate('/contact')}>
            Get In Touch
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
