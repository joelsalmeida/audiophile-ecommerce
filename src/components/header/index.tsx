'use client';
import { useClickOutside } from '@/custom-hooks';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useRef, useState } from 'react';
import { LINKS_DATA } from './helpers/links-data';
import styles from './index.module.scss';
import { renderLinksProp } from './index.types';

export function Header() {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  const NAV_REF = useRef(null);
  const HAMBURGER_REF = useRef(null);

  function toggleMobileMenu() {
    setOpenMobileMenu((prevState) => !prevState);
  }

  useClickOutside(NAV_REF, () => setOpenMobileMenu(false), [HAMBURGER_REF]);

  const CURRENT_PATCH = usePathname();

  function renderLinks(links: renderLinksProp) {
    return links.map(({ href, label }) => (
      <Link
        className={styles.header__nav__link}
        href={href}
        key={href}
        data-active={CURRENT_PATCH === href}
        onClick={() => setOpenMobileMenu(false)}
      >
        {label}
      </Link>
    ));
  }

  return (
    <header className={styles.header__container}>
      <div className={styles.header}>
        <div
          ref={HAMBURGER_REF}
          className={styles.header__hamburger}
          data-mobile-menu-open={openMobileMenu}
          onClick={toggleMobileMenu}
        >
          <span />
          <span />
          <span />
        </div>

        <Link href="/">
          <Image
            src="/audiophile-logo.svg"
            alt="Audiophile logo"
            width={143}
            height={25}
            onClick={() => setOpenMobileMenu(false)}
          />
        </Link>

        <nav
          ref={NAV_REF}
          className={styles.header__nav}
          data-mobile-menu-open={openMobileMenu}
        >
          {renderLinks(LINKS_DATA)}
        </nav>

        <button
          className={styles.header__cartButton}
          type="button"
          onClick={() => console.log('Open cart')}
        >
          <Image src="/cart-icon.svg" alt="Open cart" width={23} height={20} />
        </button>
      </div>
    </header>
  );
}
