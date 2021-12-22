import React from 'react';
import styles from './home.module.scss';
import HeadBrowser from '../../component/head/Head';
import Header from '../../component/header/Header';

export default function Home() {
  return (
    <div className={styles.homeContainer}>
      <HeadBrowser />
      <Header />
    </div>
  );
}
