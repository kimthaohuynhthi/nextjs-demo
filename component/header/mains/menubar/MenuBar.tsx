import Link from 'next/link';
import React from 'react';

// dataSources
import { menuHeader, menuHeaderItem } from '../../../../dataSources/Header';
// others
import styles from './menubar.module.scss';

const MenuBar = () => (
  <div className={styles.wrapper}>
    {menuHeader.map((item: menuHeaderItem) => (
      <Link href={item.path} passHref key={item.label}>
        <a className={styles.tab}>
          <h3 style={{ color: '#E76161' }}>{item.label}</h3>
        </a>
      </Link>
    ))}
  </div>
);

export default MenuBar;
