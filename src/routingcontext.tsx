import React, { useContext, useEffect, useState } from 'react';

const RoutingContext = React.createContext({
  route: '',
  setRoute: (route: string) => {},
});

export const useRoute = () => useContext(RoutingContext);

interface RoutingProviderProps {
  children: React.ReactNode;
}

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

  return (
    <RoutingContext.Provider value={{ route, setRoute }}>
      {children}
    </RoutingContext.Provider>
  );
};