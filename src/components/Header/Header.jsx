"use client"

import { usePathname } from "next/navigation";
import HeaderLink from "../HeaderLink/HeaderLink";
import './styles.scss';

export const Header = () => {
  const pathname = usePathname();

  return (
    <nav>
      <ul>
        <HeaderLink href='/' className={pathname === '/' && 'active'}>
          Anastasi Tattoo
        </HeaderLink>
        <HeaderLink href='/card' className={pathname === '/card' && 'active'}>
          Card
        </HeaderLink>
        <HeaderLink href='/admin' className={pathname === '/admin' && 'active'}>
          Admin
        </HeaderLink>
      </ul>
    </nav>
  );
}

export default Header;
