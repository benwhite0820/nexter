import type { Metadata } from 'next';
import { Nunito_Sans } from 'next/font/google';
import './globals.scss';

const nunito = Nunito_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Nexter',
  description: 'practice my scss skill',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <div className="container">{children}</div>
      </body>
    </html>
  );
}
