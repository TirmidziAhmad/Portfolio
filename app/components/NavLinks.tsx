"use client";

import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const links = [
  { name: "About", href: "/about" },
  { name: "My Work", href: "/work" },
  { name: "Contact", href: "/contact" },
];

function NavLinks() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="flex">
      {/* Desktop links */}
      <div className="hidden md:flex gap-7">
        {links.map((item, index) => (
          <Link className="flex" key={index} href={item.href}>
            {item.name}
          </Link>
        ))}
      </div>

      {/* Hamburger menu icon for mobile */}
      <div className="md:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)} className="text-black">
          {menuOpen ? (
            <XMarkIcon className="w-6 h-6 text-white" />
          ) : (
            <Bars3Icon className="w-6 h-6 text-white" />
          )}
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-white z-40 shadow-md flex flex-col items-center gap-4 py-4 text-black">
          {links.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              onClick={() => setMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
export default NavLinks;
