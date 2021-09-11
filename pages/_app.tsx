import '../styles/globals.css';
import type { AppProps } from 'next/app';
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="bg-gray-100 ">
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}
export default MyApp;
