"use client"
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
  {
    name: 'home',
    link: '#'
  },
  {
    name: 'projects',
    link: '#projects'
  },
  {
    name: 'about',
    link: '#about'
  },
  {
    name: 'contacts',
    link: '#contacts'
  },
];

export const Header = () => {
  const pathName = usePathname()

  return (
    <div className="flex justify-center items-center top-10 w-full z-10 sticky">
      <nav className="gap-1 flex p-0.5 border border-white/15 rounded-full absolute bg-white/10 backdrop-blur">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.link}
            className={`nav-item ${pathName === link.link ? 'bg-white text-gray-900 hover:bg-white/70' : ""}`}>
            {link.name}
          </Link>
        ))}
      </nav>
    </div>
  );
};
