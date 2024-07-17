// src/app/layout.tsx
import "@/styles/globals.css"; // Import the global styles
import { ThemeProvider } from "@/components/theme-provider";
import SessionWrapper from "@/components/SessionWrapper";
import Footer from "@/components/Footer"; // Import the Footer component
import { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body>
        <SessionWrapper>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
            <div className="min-h-screen flex flex-col">            
              <main className="flex-grow">
                {children}
              </main>
              <Footer /> {/* Include the Footer component */}
            </div>
          </ThemeProvider>
        </SessionWrapper>
      </body>
    </html>
  );
}
