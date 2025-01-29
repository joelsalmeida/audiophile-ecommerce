'use client';
import { useClickOutside } from '@/custom-hooks';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useMemo, useRef, useState } from 'react';
import { LINKS_DATA } from './helpers/links-data';
import styles from './index.module.scss';
import { renderLinksProp } from './index.types';
import { MiniCart } from '../mini-cart';
import { useQuery } from '@apollo/client';
import { GET_CART_QUERY } from '@/lib/apollo-client/queries';
import { useMiniCartContext } from '@/contexts/mini-cart-context';
import { getFirstWord } from '@/utils';

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);
  const toggleMobileMenu = () => setIsMobileMenuOpen((prevState) => !prevState);

  const { isMiniCartOpen, openMiniCart, closeMiniCart } = useMiniCartContext();
  const { data } = useQuery(GET_CART_QUERY);

  const NAV_REF = useRef(null);
  const HAMBURGER_REF = useRef(null);

  useClickOutside(NAV_REF, () => setIsMobileMenuOpen(false), [HAMBURGER_REF]);

  const CURRENT_PATH = usePathname();

  function renderLinks(links: renderLinksProp) {
    return links.map(({ href, label }) => (
      <Link
        className={styles.header__nav__link}
        href={href}
        key={href}
        data-active={CURRENT_PATH === href}
        onClick={() => setIsMobileMenuOpen(false)}
      >
        {label}
      </Link>
    ));
  }

  const CART_ITEMS = useMemo(() => {
    const cartItems = data?.getCart?.cartItems ?? [];

    return cartItems.map((item) => ({
      ...item,
      name: getFirstWord(item.name),
    }));
  }, [data?.getCart?.cartItems]);

  return (
    <header className={styles.header__container}>
      <div className={styles.header}>
        <div
          ref={HAMBURGER_REF}
          className={styles.header__hamburger}
          data-mobile-menu-open={isMobileMenuOpen}
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
            onClick={closeMobileMenu}
          />
        </Link>

        <nav
          ref={NAV_REF}
          className={styles.header__nav}
          data-mobile-menu-open={isMobileMenuOpen}
        >
          {renderLinks(LINKS_DATA)}
        </nav>

        <button
          id="mini-cart-switcher-button"
          className={styles.header__cartButton}
          type="button"
          onMouseDown={openMiniCart}
        >
          <Image src="/cart-icon.svg" alt="Open cart" width={23} height={20} />
        </button>

        <MiniCart
          cartItems={CART_ITEMS}
          open={isMiniCartOpen}
          onClose={closeMiniCart}
        />
      </div>
    </header>
  );
}
