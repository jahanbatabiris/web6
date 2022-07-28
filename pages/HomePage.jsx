import React from 'react';
import Header from '../component/element/Header';
import Head from "next/head";

function HomePage() {
  return (
    <div>
               <Head>
                <link rel="icon" type="/img/total/logot.ico" sizes="32x32" href="/img/total/logot.ico" />
                <link rel="icon" type="/img/total/logot.ico" sizes="16x16" href="/img/total/logot.ico" />
                <link rel="apple-touch-icon" sizes="180x180" href="/img/total/logot.ico" />
                <link rel="manifest" href="/site.webmanifest" />
                <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
                <meta name="theme-color" content="#ffffff" />
                <meta name="title" content="Lucretius" />
                <meta name="description" content="Lucretius" />
                <meta name="robots" content="index, follow" />
                <title>Home Page</title>
              </Head>
      <Header/>
    </div>
  );
}

export default HomePage;
