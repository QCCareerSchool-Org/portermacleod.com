'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FC, useState } from 'react';

import Home from '../images/nav/home.png';
import Home2 from '../images/nav/home2.png';
import HomeHover from '../images/nav/homeHover.png';
import Contact from '../images/nav/contact.png';
import Contact2 from '../images/nav/contact2.png';
import ContactHover from '../images/nav/contactHover.png';
import About from '../images/nav/about.png';
import About2 from '../images/nav/about2.png';
import AboutHover from '../images/nav/aboutHover.png';

import style from './header.module.css';
import { useNavState } from '@/hooks/useNavState';

export const Header: FC = () => {
  const nav = useNavState();
  const [ homeHover, setHomeHover ] = useState<boolean>(false);
  const [ aboutHover, setAboutHover ] = useState<boolean>(false);
  const [ contactHover, setContactHover ] = useState<boolean>(false);

  return (
    <header className={style.header}>
      <nav className={style.nav}>
        <Link onMouseEnter={() => setHomeHover(true)} onMouseLeave={() => setHomeHover(false)} href="/" title="Home"><Image src={nav === 'home' ? Home2 : homeHover ? HomeHover : Home} width={85} height={46} priority alt="Home" /></Link>
        <Link onMouseEnter={() => setAboutHover(true)} onMouseLeave={() => setAboutHover(false)} href="/about" title="About Us"><Image src={nav === 'about' ? About2 : aboutHover ? AboutHover : About} width={114} height={46} priority alt="About Us" /></Link>
        <Link onMouseEnter={() => setContactHover(true)} onMouseLeave={() => setContactHover(false)} href="/contact" title="Contact"><Image src={nav === 'contact' ? Contact2 : contactHover ? ContactHover : Contact} width={115} height={46} priority alt="Contact" /></Link>
      </nav>
    </header>
  )
};