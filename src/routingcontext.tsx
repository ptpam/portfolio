import React, { useContext, useEffect, useState } from 'react';

const RoutingContext = React.createContext({
  route: '',
  setRoute: (route: string) => {},
});

export const useRoute = () => useContext(RoutingContext);

export const RoutingProvider: React.FC = ({ children }) => {
  const [route, setRoute] = useState(window.location.pathname);

  useEffect(() => {
    const handleLocationChange = () => {
      setRoute(window.location.pathname);
    };

    // Listen to 'popstate' event for back/forward navigation
    window.addEventListener('popstate', handleLocationChange);

    // Optional: If you're manually changing the URL (e.g., via pushState),
    // you might also need to listen to some custom event or trigger updates in another way.

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
