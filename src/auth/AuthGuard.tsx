// Imports commented out for bypassed authentication
// Uncomment these when re-enabling authentication
/*
import { useState, useEffect } from 'react';
// next
import { useRouter } from 'next/router';
// components
import LoadingScreen from '../components/loading-screen';
//
import Login from '../pages/auth/login';
import { useAuthContext } from './useAuthContext';
*/

// ----------------------------------------------------------------------

type AuthGuardProps = {
  children: React.ReactNode;
};

export default function AuthGuard({ children }: AuthGuardProps) {
  // BYPASS AUTHENTICATION - Development mode
  // Comment out the line below to re-enable authentication
  return <> {children} </>;

  /* Original authentication logic - commented out for development
  const { isAuthenticated, isInitialized } = useAuthContext();

  const { pathname, push } = useRouter();

  const [requestedLocation, setRequestedLocation] = useState<string | null>(null);

  useEffect(() => {
    if (requestedLocation && pathname !== requestedLocation) {
      push(requestedLocation);
    }
    if (isAuthenticated) {
      setRequestedLocation(null);
    }
  }, [isAuthenticated, pathname, push, requestedLocation]);

  if (!isInitialized) {
    return <LoadingScreen />;
  }

  if (!isAuthenticated) {
    if (pathname !== requestedLocation) {
      setRequestedLocation(pathname);
    }
    return <Login />;
  }

  return <> {children} </>;
  */
}
