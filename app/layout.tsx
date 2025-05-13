import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import NavLinks from "./components/NavLinks";

export const metadata: Metadata = {
  title: "Tirmidzi Ahmad 👋",
  description: "Miji's Portfolio",
};

const footerLinks = [
  { name: "Email", href: "/about" },
  { name: "Linkedin", href: "/" },
  { name: "Github", href: "/" },
  { name: "Instagram", href: "/" },
];

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="antialiased flex flex-col justify-center items-center min-h-screen">
        <nav className="w-full flex justify-between items-center absolute top-0 px-5 md:px-10 py-4 z-50">
          {/* logo */}
          <Link className="text-2xl" href="/">
            MIJI<span className="text-sm">®</span>
          </Link>
          {/* Link Navigasi */}
          <NavLinks />
        </nav>

        {/* content */}
        <div className="flex-grow flex flex-col justify-center items-center z-30 px-5 md:px-10">
          {children}
        </div>

        {/* footer */}
        <footer className="w-full flex flex-col bg-[#EDEDED] h-[70vh] text-[#1E201E] justify-center items-center gap-10">
          <a href="mailto:tirmidziahmad.work@gmail.com">LETS TALK</a>
          <div className="flex flex-col items-center">
            {footerLinks.map((item) => (
              <Link key={item.name} href={item.href}>
                {item.name}
              </Link>
            ))}
          </div>
        </footer>
      </body>
    </html>
  );
}
