import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <nav className={styles.nav}>
          <button>
            <img src="/img/burger-icon.svg" alt="Burger" />
          </button>
          <ul className={styles.nav__list}>
            <li>New</li>
            <li>
              <Link to="catalog">Каталог</Link>
            </li>
            <li>
              <Link to="aboutus">О нас</Link>
            </li>
          </ul>
          <img src="/img/YANKI-logo.png" alt="Logo" width={160} height={40} />
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
