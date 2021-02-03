import React from 'react';
import styles from './footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.list}>
        <ul>
          <li className={styles.header}>Frågor</li>
          <li>Alexandra Wallin</li>
          <li>Elin Lundqvist</li>
        </ul>
      </div>
      <div className={styles.list}>
        <ul>
          <li className={styles.header}>Utveckling</li>
          <li>Axel Froborg</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
