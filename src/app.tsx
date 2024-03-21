// src/App.tsx
import { RoutingProvider, useRoute } from './routingcontext';
import GitProfile from './components/gitprofile.tsx';
import ProjectPage from './components/project-page.tsx';

const MainContent = () => {
  const { route } = useRoute();
  console.log(route)
  // Extract the project ID from the route
  const projectIdMatch = route.match(/\/project\/(\d+)/);
  const projectId = projectIdMatch ? parseInt(projectIdMatch[1], 10) : null;

  // Determine the content based on the presence of project ID
  if (projectId !== null) {
    return <ProjectPage projectId={projectId} /> ;
  }


  // Default to showing the GitProfile
  return <GitProfile config={CONFIG} />;
};

const App = () => {
  return (
    <RoutingProvider>
      <MainContent />
    </RoutingProvider>
  );
};

export default App;
