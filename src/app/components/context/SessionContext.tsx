'use client';

import React from 'react';
import { createContext, useContext, useState } from 'react';

interface SessionContextProps {
  sessionId: string | null;
  setSessionId: React.Dispatch<React.SetStateAction<string | null>>;
}

const SessionContext = React.createContext<SessionContextProps>({
  sessionId: null,
  setSessionId: () => {},
});

export const SessionProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [sessionId, setSessionId] = useState<string | null>(null);
  
    return (
      <SessionContext.Provider value={{ sessionId, setSessionId }}>
        {children}
      </SessionContext.Provider>
    );
  };
  
  export const useSession = () => useContext(SessionContext);