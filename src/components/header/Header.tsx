'use client'
import TopHeader from './TopHeader';
import DesktopHeader from './DesktopHeader';
import HeaderBottom from './HeaderBottom';
import MobileHeader from './MobileHeader';



export function Header() {
  return (
    <header className="header-container flex-col">
      <TopHeader />
      <DesktopHeader />
      <MobileHeader />
      <HeaderBottom />
    </header>
  );
}