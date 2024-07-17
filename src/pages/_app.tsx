// src/pages/_app.tsx

import { SessionProvider } from 'next-auth/react';
import Navbar from '@/components/Navbar'; // Adjust the import path as necessary
import '../app/globals.css'; // Import your global styles

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <Navbar />
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default MyApp;
