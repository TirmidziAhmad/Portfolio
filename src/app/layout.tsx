import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import Link from 'next/link';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'Tirmidzi Ahmad 👋',
  description: "Miji's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col justify-center items-center min-h-screen`}>
        <nav className='w-full flex justify-between items-center absolute top-0 px-5 md:px-10 md:pt-4'>
          <Link className='text-2xl' href='/'>
            MIJI
          </Link>
          <div className='flex gap-7 justify-center items-center display-none'>
            <Link href='/about'>About</Link>
            <Link href='/'>My Work</Link>
            <Link href='/'>Contact</Link>
          </div>
        </nav>
        <div className='flex-grow flex flex-col justify-center items-center z-50'>{children}</div>
        <footer>
          <p>lets chat</p>
        </footer>
      </body>
    </html>
  );
}
