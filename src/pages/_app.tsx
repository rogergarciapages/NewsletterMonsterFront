// src/pages/_app.tsx
import { SessionProvider } from "next-auth/react";
import '../styles/globals.css';
import { ThemeProvider } from "@/components/theme-provider";
import type { AppProps } from "next/app";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <SessionProvider session={pageProps.session}>
      <ThemeProvider attribute="class" defaultTheme="system">
        <Component {...pageProps} />
      </ThemeProvider>
    </SessionProvider>
  );
};

export default MyApp;
