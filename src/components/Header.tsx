"use client";

import React from "react";
import Image from "next/image";
import { FaBars } from "react-icons/fa";
import { UseSiteContext } from "@/SiteContext/SiteContext";
import Link from "next/link";

const navItems = [
  { title: "Home", href: "/" },
  { title: "About", href: "/#about-us" },
  { title: "Services", href: "/#services" },
  { title: "Contact", href: "/#footer" },
];

export default function Header() {
  const { bargerMenuToggle } = UseSiteContext();

  return (
    <header className="sticky top-0  bg-amber-500 shadow-md">
      <div className="max-w-[1280px] mx-auto flex items-center justify-between py-3 px-4 md:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo-man-brar.png"
            alt="Man Brar Construction Ltd."
            width={150}
            height={40}
            className="object-contain h-10  bg-slate-50 rounded-2xl"
            priority
          />
        </Link>

        {/* Navigation */}
        <nav className="hidden lg:block">
          <ul className="flex items-center space-x-6">
            {navItems.map(({ title, href }) => (
              <li key={title}>
                <a
                  href={href}
                  onClick={() => bargerMenuToggle(false)}
                  className="text-gray-700 hover:text-yellow-600 transition font-medium"
                >
                  {title}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Burger Menu */}
        <button
          onClick={() => bargerMenuToggle(true)}
          className="block lg:hidden text-gray-700"
          aria-label="Toggle navigation"
        >
          <FaBars size={28} />
        </button>
      </div>
    </header>
  );
}
