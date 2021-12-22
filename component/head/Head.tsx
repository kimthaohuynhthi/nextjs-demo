import React from 'react';
import Head from 'next/head';

const HeadBrowser = () => (
  <Head>
    <title>Thy Thy</title>
    <meta
      name="description"
      content="This is my portfolio page. The purpose of this page is to introduce my person, my coding style, and show off a little bit of my web development skills."
    />
    <meta name="author" content="Karolina Hudziec" />
    <meta name="keywords" content="Karolina, Hudziec, Portfolio, Frontend" />
    <meta
      property="og:image"
      content="https://www.khudziec.com/portfolioPage.png"
      key="ogimage"
    />
  </Head>
);
export default HeadBrowser;
