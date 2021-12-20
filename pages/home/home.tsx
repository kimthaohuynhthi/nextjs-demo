import Head from 'next/head'
import React from 'react'
import VMenuBar from '../../component/menubar/menubar'
import styles from './home.module.scss'

export default function VHome() {
  return (
    <div className={styles.homeContainer}>
      <Head>
        <title>Karolina Hudziec</title>
        <meta name="description" content="This is my portfolio page. The purpose of this page is to introduce my person, my coding style, and show off a little bit of my web development skills." />
        <meta name="author" content="Karolina Hudziec"/>
        <meta name="keywords" content="Karolina, Hudziec, Portfolio, Frontend"/>
        <meta property="og:image" content="https://www.khudziec.com/portfolioPage.png" key="ogimage"/>
        {/* <link rel="shortcut icon" href="/favicon.ico?" type="image/x-icon"/> */}
      </Head>
      <VMenuBar activeTab="Home"/>
    </div>
  )
}
