'use client';

import type { Dispatch, FC, PropsWithChildren, SetStateAction } from 'react';
import { createContext, useState } from 'react';

export type Nav = 'home' | 'about' | 'contact';

export const NavStateContext = createContext<Nav | null | undefined>(undefined);
export const NavDispatchContext = createContext<Dispatch<SetStateAction<Nav | null>> | undefined>(undefined);

export const NavProvider: FC<PropsWithChildren> = ({ children }) => {
  const [Nav, setNav] = useState<Nav | null>(null);

  return (
    <NavStateContext.Provider value={Nav}>
      <NavDispatchContext.Provider value={setNav}>
        {children}
      </NavDispatchContext.Provider>
    </NavStateContext.Provider>
  );
}