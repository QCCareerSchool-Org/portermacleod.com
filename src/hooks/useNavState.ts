'use client';

import { useContext } from 'react';

import { NavStateContext } from '../providers/nav';
import type { Nav } from '../providers/nav';

export const useNavState = (): Nav | null => {
  const state = useContext(NavStateContext);
  if (typeof state === 'undefined') {
    throw Error('useNavState must be used inside NavProvider');
  }
  return state;
}