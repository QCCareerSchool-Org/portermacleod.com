import type { FC } from 'react';

import style from './footer.module.css';

export const Footer: FC = () => (
  <footer className={style.footer}>
    © {new Date().getFullYear()} Porter &amp; MacLeod Collection Agency
  </footer>
)