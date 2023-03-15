import './globals.css'
import style from './layout.module.css';
import { Providers } from '@/providers';
import { Header } from './header';
import { Footer } from './footer';

type Props = {
  children: React.ReactNode
}

export const metadata = {
  title: 'Porter & MacLeod Collection Agency',
}

export default function RootLayout({ children }: Props) {
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
  )
}
