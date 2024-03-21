import React from 'react';
import LazyImage from './lazy-image'; // Assuming you have this component for lazy loading images

interface ProjectPageProps {
  projectId: string;
}

const ProjectPage: React.FC<ProjectPageProps> = ({ projectId }) => {
  // Assuming CONFIG.projects.external.projects is an array with each project having an id
  const project = CONFIG.projects.external.projects.find(proj => proj.id === projectId);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
  <div className="min-h-screen bg-base-200 flex items-center justify-center p-4">
    <div className="card max-w-full md:max-w-2xl lg:max-w-4xl xl:max-w-6xl bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300">
      <figure className="px-10 pt-10 flex justify-center"> {/* Center the image */}
        <div className="w-50 h-50 md:w-60 md:h-60 lg:w-72 lg:h-72"> {/* Adjust size here */}
          <LazyImage src={'../' + project.imageUrl} alt={project.title} className="rounded-xl object-cover h-full w-full" />
        </div>
      </figure>
      <div className="card-body items-center">
        <h2 className="card-title">{project.title}</h2>
        <p>{project.description}</p>
        <p dangerouslySetInnerHTML={{ __html: project.details }} />
      </div>
    </div>
  </div>
  );

};

export default ProjectPage;
