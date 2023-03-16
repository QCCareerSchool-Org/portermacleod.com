import type { ReactNode } from 'react';

import './globals.css';
import { Footer } from './footer';
import { Header } from './header';
import style from './layout.module.css';
import { Providers } from '@/providers';

type Props = {
  children: ReactNode;
};

export const metadata = {
  title: 'Porter & MacLeod Collection Agency',
};

export default function RootLayout({ children }: Props): ReactNode {
  return (
    <Providers>
      <html lang="en">
        <body>
          <div className={style.wrapper}>
            <Header />
            {children}
            <Footer />
          </div>
        </body>
      </html>
    </Providers>
  );
}
