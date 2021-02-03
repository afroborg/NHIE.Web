import { ReactComponent as Logo } from '@/assets/cheers.svg';
import React from 'react';
import styles from './header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Logo />
        <p>Lund</p>
      </div>
    </header>
  );
};

export default Header;
