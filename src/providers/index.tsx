'use client';

import type { FC, PropsWithChildren } from 'react';
import { NavProvider } from './nav';

export const Providers: FC<PropsWithChildren> = ({ children }) => (
  <>
    <NavProvider>
      {children}
    </NavProvider>
  </>
)