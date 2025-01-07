import Link from 'next/link';
import styled from '@/components/common/Header.module.scss';

export default function Header() {
  return (
    <header className={styled.header}>
      <Link href="/">
        <div className={styled.title}>3uxeca</div>
      </Link>
      <nav className={styled.nav}>
        <Link href='/about'>About</Link>
        <Link href='/skills'>Skills</Link>
        <Link href='/projects'>Projects</Link>
        <Link href='/contact'>Contact</Link>
      </nav>
    </header>
  )
}