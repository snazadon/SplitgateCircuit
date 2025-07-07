import '../styles/globals.css';
import Navbar from '../components/Navbar';
import React from 'react';
import Head from 'next/head'; // ✅ Import Head

function MyApp({ Component, pageProps }) {
  return (
    <React.Fragment>
      <Head>
        <title>Splitgate2 Tournaments</title> {/* ✅ Website title */}
        <meta name="description" content="Compete in Splitgate tournaments and win prizes." />
        <meta property="og:title" content="Splitgate2 Tournaments" />
        <meta property="og:description" content="Join competitive Splitgate tournaments and climb the leaderboard!" />
        <meta property="og:image" content="/banner.png" /> {/* Optional preview image */}
        <meta property="og:url" content="https://SplitgateCircuit.com" /> {/* Update this */}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className="p-4">
        <Component {...pageProps} />
      </main>
    </React.Fragment>
  );
}

export default MyApp;
