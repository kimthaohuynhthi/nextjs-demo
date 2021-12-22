import Link from 'next/link';
import React from 'react';
// others
import styles from './logo.module.scss';

const Logo = () => (
  <Link href={`/`}>
    <a className={styles.title}>
      <div className={styles.squareInitials}>KT</div>
    </a>
  </Link>
);
export default Logo;
