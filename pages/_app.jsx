import { Fragment } from 'react';
import Layout from '../components/Layout';
import '../styles/globals.css';
import Script from 'next/script';

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
    <Script 
      src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
      strategy="afterInteractive"
    />
    <Script
      id="google-analytics-script"
      strategy="afterInteractive"
    >
      {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());


        gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}');
      `}
    </Script>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </Fragment>
    
  );
}

export default MyApp;
