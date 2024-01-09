'use client';

import React from 'react';
import { createContext, useContext, useState } from 'react';

interface SessionContextProps {
  sessionId: string | null;
  setSessionId: React.Dispatch<React.SetStateAction<string | null>>;
  logout: () => void;
}

const SessionContext = React.createContext<SessionContextProps>({
  sessionId: null,
  setSessionId: () => {},
  logout: () => {},
});

export const SessionProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [sessionId, setSessionId] = useState<string | null>(null);
    const logout = () => {
      // Add any additional logout logic here
      setSessionId(null);
      console.log('Se cerro la sesión')
      window.location.reload();
    };

    return (
      <SessionContext.Provider value={{ sessionId, setSessionId,logout }}>
        {children}
      </SessionContext.Provider>
    );
  };
  
  export const useSession = () => useContext(SessionContext);