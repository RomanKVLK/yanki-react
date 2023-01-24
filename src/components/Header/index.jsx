import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';
import { useLocation } from 'react-router-dom';
import './Header.module.scss';

const Header = () => {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <nav className={styles.nav}>
          <div className={styles.wrapper}>
            <button
              className={location.pathname === '/' ? styles.button_white : styles.button}></button>
            <ul className={styles.nav__list}>
              <li>New</li>
              <li>
                <Link to="catalog">Каталог</Link>
              </li>
              <li>
                <Link to="about-us">О нас</Link>
              </li>
            </ul>
          </div>

          <Link to="/">
            <img
              className={styles.logo}
              src="/img/YANKI-logo.png"
              alt="Logo"
              width={160}
              height={40}
            />
          </Link>
          <ul className={styles.nav__list}>
            <li>
              <img src="/img/search.svg" alt="Search" />
            </li>
            <li>
              <img src="/img/user.svg" alt="User" />
            </li>
            <li>
              <Link to="favorites">
                <img src="/img/favorites.svg" alt="Favorites" />
              </Link>
            </li>
            <li>
              <Link to="/cart">
                <img src="/img/cart.svg" alt="Cart" />
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
