import type { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export const metadata = {
  title: 'About Us - Porter & MacLeod Collection Agency',
};

export default function RootLayout({ children }: Props): ReactNode {
  return children;
}
