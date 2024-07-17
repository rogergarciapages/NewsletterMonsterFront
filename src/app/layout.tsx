import '../styles/globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import SessionWrapper from '@/components/SessionWrapper';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <SessionWrapper>
            {children}
          </SessionWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}
