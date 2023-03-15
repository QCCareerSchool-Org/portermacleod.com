'use client';

import type { Dispatch, SetStateAction, } from 'react';
import { useContext } from 'react';

import { NavDispatchContext } from '../providers/nav';
import type { Nav } from '../providers/nav';

export const useNavDispatch = (): Dispatch<SetStateAction<Nav | null>> => {
  const dispatch = useContext(NavDispatchContext);
  if (typeof dispatch === 'undefined') {
    throw Error('useNavState must be used inside NavProvider');
  }
  return dispatch;
}