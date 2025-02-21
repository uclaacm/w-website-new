import Head from 'next/head';
import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';

interface LayoutProps {
  children: JSX.Element;
}
export default function MainLayout(props: LayoutProps) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="title" content="ACM W" />
        <meta name="description" content="Official website of ACM W" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, minimum-scale=1"
        />
        <title>ACM W</title>
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <Navbar />
      <main>{props.children}</main>
    </>
  );
}
