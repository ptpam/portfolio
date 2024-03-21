// src/App.tsx
import { RoutingProvider, useRoute } from './routingcontext';
import GitProfile from './components/gitprofile.tsx';
import ProjectPage from './components/project-page.tsx';

const MainContent = () => {
  const { route } = useRoute();
  
  // Determine the content based on the route
  if (route.startsWith('/portfolio/project/')) {
    const projectId = parseInt(route.split('/portfolio/project/')[1], 10);
    return <ProjectPage projectId={projectId} /> 
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
