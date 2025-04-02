import React, { useEffect, useState } from 'react';

interface Project {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  fork: boolean; // Added the 'fork' property
}

const ProjectsSection = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('https://api.github.com/users/spanexx/repos');
        const data: Project[] = await response.json();
        const filteredProjects = data.filter((repo) => !repo.fork); // Exclude forked repos
        setProjects(filteredProjects);
      } catch (error) {
        console.error('Error fetching GitHub repositories:', error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <section className="projects-section py-8">
      <h2 className="text-2xl font-bold text-center mb-6">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div key={project.id} className="project-card p-4 border rounded-lg shadow-md">
            <h3 className="text-lg font-semibold">{project.name}</h3>
            <p className="text-sm text-gray-600">{project.description || 'No description available'}</p>
            <a
              href={project.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline mt-2 block"
            >
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
