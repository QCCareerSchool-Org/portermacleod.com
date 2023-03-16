import type { FC, PropsWithChildren, ReactNode } from 'react';
import { SideBar } from './sideBar';

import style from './split.module.css';

type Props = {
  sidebarContent?: ReactNode;
};

export const Split: FC<PropsWithChildren<Props>> = ({ sidebarContent, children }) => (
  <div className={style.wrapper}>
    <aside className={style.aside}>
      <SideBar>{sidebarContent}</SideBar>
    </aside>
    <main className={style.main}>
      <div className={style.padding}>
        {children}
      </div>
    </main>
  </div>
);
