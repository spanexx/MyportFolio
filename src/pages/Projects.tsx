
import React from 'react';
import Layout from '@/components/Layout';
import { projectsData } from '@/data/portfolioData';
import ProjectCard from '@/components/ProjectCard';
import { Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Projects: React.FC = () => {
  return (
    <Layout>
      <section className="py-20">
        <div className="container">
          <h1 className="text-4xl font-bold mb-4">My Projects</h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl">
            A collection of projects that showcase my skills and experience in web development,
            hospitality management systems, and other technical domains.
          </p>
          
          <div className="flex items-center gap-4 mb-12 bg-muted/40 p-6 rounded-lg max-w-3xl">
            <Github size={32} className="text-primary" />
            <div>
              <h2 className="text-xl font-semibold">Find me on GitHub</h2>
              <p className="text-muted-foreground mb-2">
                Check out my repositories and contributions on GitHub
              </p>
              <Button asChild>
                <a href="https://github.com/spanexx" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  github.com/spanexx
                </a>
              </Button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectsData.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
