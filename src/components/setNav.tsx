'use client';

import type { FC } from 'react';
import { useEffect } from 'react';

import { useNavDispatch } from '@/hooks/useNavDispatch';
import type { Nav } from '@/providers/nav';

type Props = {
  nav: Nav;
}

export const SetNav: FC<Props> = ({ nav }) => {
  const setNav = useNavDispatch();
  useEffect(() => {
    setNav(nav);
  }, [ setNav, nav ]);
  return null;
}