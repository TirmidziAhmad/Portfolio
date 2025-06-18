import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import NavLinks from "./components/NavLinks";

export const metadata: Metadata = {
  title: "Tirmidzi Ahmad 👋",
  description: "Miji's Portfolio",
};

const footerLinks = [
  {
    name: "Email",
    href: "mailto:tirmidziahmad.work@gmail.com",
    external: true,
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/tirmidziahmad/",
    external: true,
  },
  { name: "Github", href: "https://github.com/TirmidziAhmad", external: true },
];

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="antialiased flex flex-col justify-center items-center min-h-screen">
        <nav className="w-full flex justify-between items-center absolute top-0 px-5 md:px-10 py-4 z-50">
          {/* logo - kept original styling */}
          <Link className="text-2xl" href="/">
            MIJI<span className="text-sm">®</span>
          </Link>

          {/* Link Navigasi - kept original component */}
          <NavLinks />
        </nav>

        {/* content - kept original styling */}
        <div className="flex-grow flex flex-col justify-center items-center z-30 px-5 md:px-10">
          {children}
        </div>

        {/* footer - maintained original colors exactly */}
        <footer className="w-full flex flex-col bg-[#EDEDED] h-[70vh] text-[#1E201E] justify-center items-center gap-10">
          <p className="hover:underline underline-offset-4">LETS TALK</p>

          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
            {footerLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                className="hover:underline underline-offset-4"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Added copyright without changing colors */}
          <p className="text-[#1E201E] mt-10 text-sm">
            © {new Date().getFullYear()} Tirmidzi Ahmad
          </p>
        </footer>
      </body>
    </html>
  );
}
