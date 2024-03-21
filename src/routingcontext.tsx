import React, { useContext, useEffect, useState } from 'react';

// Define the context value type
interface RoutingContextType {
  route: string;
  setRoute: (route: string) => void;
  navigateTo: (path: string) => void; // Add navigateTo function
}

// Create the context
const RoutingContext = React.createContext<RoutingContextType>({
  route: '',
  setRoute: (_route: string) => {},
  navigateTo: (_path: string) => {}, // Initialize navigateTo function
});

// Export hook to use context
export const useRoute = () => useContext(RoutingContext);

// Define props interface for RoutingProvider
interface RoutingProviderProps {
  children: React.ReactNode;
}

// RoutingProvider component
export const RoutingProvider: React.FC<RoutingProviderProps> = ({ children }) => {
  const [route, setRoute] = useState(window.location.pathname);

  useEffect(() => {
    const handleLocationChange = () => {
      setRoute(window.location.pathname);
    };

    // Listen to 'popstate' event for back/forward navigation
    window.addEventListener('popstate', handleLocationChange);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener('popstate', handleLocationChange);
    };
  }, []);

  // Function to handle navigation
  const navigateTo = (path: string) => {
    window.history.pushState({}, '', path);
    setRoute(path);
  };

  // Provide context value
  const contextValue: RoutingContextType = {
    route,
    setRoute,
    navigateTo, // Include navigateTo function
  };

  return (
    <RoutingContext.Provider value={contextValue}>
      {children}
    </RoutingContext.Provider>
  );
};
