// src/app/layout.tsx
import '@/styles/globals.css'; // Import the global styles
import { ThemeProvider } from '@/components/theme-provider';
import SessionWrapper from '@/components/SessionWrapper';
import Footer from '@/components/Footer'; // Import the Footer component
import { inter } from '@/styles/fonts'; // Import the Inter font
import { ReactNode } from 'react';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} font-sans`} suppressHydrationWarning>
      <head />
      <body className="min-h-screen flex flex-col">
        <SessionWrapper>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
            <div className="flex-grow w-full">
              <main>{children}</main>
              <Footer /> {/* Include the Footer component */}
            </div>
          </ThemeProvider>
        </SessionWrapper>
      </body>
    </html>
  );
}
