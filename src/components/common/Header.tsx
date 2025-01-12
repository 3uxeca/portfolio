'use client';

import Link from 'next/link';
import styled from '@/components/common/Header.module.scss';
import { useEffect, useState } from 'react';
import useTypeword from '@/hooks/useTypeWord';

export default function Header() {
  const [toggleHeader, setToggleHeader] = useState(false);
  const text = useTypeword("3uxeca.", 60);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3600);
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) {
    return null;
  }

  const handleLinkClick = (route: string) => {
    setToggleHeader(false);
    const section = document.getElementById(route.slice(1));
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };  
  return (
    <header className={styled.header}>
      <Link href="/">
        <div className={styled.title}>3uxeca</div>
      </Link>
      <nav className={styled.nav}>
        {/* <Link href='/about'>About</Link>
        <Link href='/skills'>Skills</Link>
        <Link href='/projects'>Projects</Link>
        <Link href='/contact'>Contact</Link> */}
        <ul
          className={styled.routes}
        >
          {["about", "skills", "projects", "contact"].map((route) => (
            <li key={route}>
              <a href={`#${route}`} onClick={() => handleLinkClick(`#${route}`)}>
                {route.charAt(0).toUpperCase() + route.slice(1)}
              </a>
            </li>
          ))}
        </ul>        
      </nav>
    </header>
  )
}