
import React from 'react';
import Layout from '@/components/Layout';
import { skillsData, certificatesData } from '@/data/portfolioData';
import SkillCard from '@/components/SkillCard';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Award } from 'lucide-react';

const Skills = () => {
  return (
    <Layout>
      <div className="container py-12">
        <h1 className="text-4xl font-bold mb-2">Skills & Expertise</h1>
        <div className="h-1 w-20 bg-primary rounded mb-8"></div>
        
        {/* Skills Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {skillsData.map((skillGroup, index) => (
            <SkillCard 
              key={index}
              title={skillGroup.category}
              skills={skillGroup.items}
              icon={skillGroup.icon}
            />
          ))}
        </div>
        
        {/* Certifications Section */}
        <h2 className="text-2xl font-semibold mb-6">Certifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {certificatesData.map((certificate, index) => (
            <Card key={index} className="card-hover">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-full bg-primary/10">
                    <Award className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{certificate.name}</h3>
                    <p className="text-sm text-muted-foreground">{certificate.issuer} • {certificate.date}</p>
                  </div>
                </div>
                
                {certificate.description && (
                  <p className="text-muted-foreground">{certificate.description}</p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Skill Breakdown */}
        <h2 className="text-2xl font-semibold mb-6">Skill Breakdown</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Technical Proficiency</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">JavaScript & TypeScript</span>
                    <span>Advanced</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: '90%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">Angular & React</span>
                    <span>Advanced</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">Node.js</span>
                    <span>Intermediate</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: '75%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">MS Office Suite</span>
                    <span>Advanced</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: '90%' }}></div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Hospitality & Professional Skills</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">Cocktail Making</span>
                    <span>Expert</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: '95%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">Customer Service</span>
                    <span>Expert</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: '90%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">Leadership</span>
                    <span>Advanced</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">Problem Solving</span>
                    <span>Advanced</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Skills;
