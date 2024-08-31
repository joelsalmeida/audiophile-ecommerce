'use client';
import { LINKS_DATA } from '@/components/header/helpers/links-data';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { renderLinksProp } from '../header/index.types';
import styles from './index.module.scss';

export function Footer() {
  const CURRENT_PATCH = usePathname();

  function renderLinks(links: renderLinksProp) {
    return links.map(({ href, label }) => (
      <Link
        className={styles.footer__nav__link}
        href={href}
        key={href}
        data-active={CURRENT_PATCH === href}
      >
        {label}
      </Link>
    ));
  }

  return (
    <footer className={styles.footer__container}>
      <div className={styles.footer}>
        <div className={styles.footer__top}>
          <Link href="/">
            <Image
              src="/audiophile-logo.svg"
              alt="Audiophile logo"
              width={143}
              height={25}
            />
          </Link>

          <nav className={styles.footer__nav}>{renderLinks(LINKS_DATA)}</nav>
        </div>

        <div className={styles.footer__content}>
          <p>
            {`Audiophile is an all in one stop to fulfill your audio needs. We're a
        small team of music lovers and sound specialists who are devoted to
        helping you get the most out of personal audio. Come and visit our demo
        facility - we’re open 7 days a week.`}
          </p>

          <div className={styles.footer__content__bottom}>
            <span>Copyright 2021. All Rights Reserved</span>

            <div className={styles.footer__social}>
              <Link href="#">
                <Image
                  src="/facebook-icon.svg"
                  alt="Audiophile logo"
                  width={24}
                  height={24}
                />
              </Link>

              <Link href="#">
                <Image
                  src="/twitter-icon.svg"
                  alt="Audiophile logo"
                  width={24}
                  height={24}
                />
              </Link>

              <Link href="#">
                <Image
                  src="/instagram-icon.svg"
                  alt="Audiophile logo"
                  width={24}
                  height={24}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
