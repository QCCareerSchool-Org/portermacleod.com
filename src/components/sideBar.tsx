import type { FC, PropsWithChildren } from "react";

import style from './sideBar.module.css';

export const SideBar: FC<PropsWithChildren> = ({ children }) => (
  <div className={style.sidebar}>
    <div className={style.padding}>
      {children}
    </div>
  </div>
);