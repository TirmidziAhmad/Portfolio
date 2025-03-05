import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tirmidzi Ahmad 👋",
  description: "Miji's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased flex flex-col justify-center items-center min-h-screen`}>
        <nav className="w-full flex justify-between items-center absolute top-0 px-5 md:px-10 md:pt-4 lg:px-15">
          <Link className="text-2xl" href="/">
            MIJI<span className="text-sm pt-auto">®</span>
          </Link>
          <div className="flex gap-7 justify-center items-center display-none">
            <Link href="/about">About</Link>
            <Link href="/">My Work</Link>
            <Link href="/">Contact</Link>
          </div>
        </nav>
        <div className="flex-grow flex flex-col justify-center items-center z-50 px-5 md:px-10 md:pt-4 lg:px-15">{children}</div>
        <footer className="w-full flex flex-col bg-[#EDEDED] h-[70vh] text-[#1E201E] justify-center items-center gap-10">
          <button className="text-8xl font-bold pt-1 hover:underline">
            <a href="mailto:tirmidziahmad.work@gmail.com">LETS TALK</a>
          </button>
          <div>
            <div className="flex flex-col">
              <button>
                <a href="mailto:tirmidziahmad.work@gmail.com">Email</a>
              </button>
              <button>
                <a href="https://www.linkedin.com/in/tirmidziahmad/">Linkedin</a>
              </button>
              <button>
                <a href="https://github.com/TirmidziAhmad">Github</a>
              </button>
              <button>
                <a href="https://www.instagram.com/tirmidziahmd/">Instagram</a>
              </button>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
