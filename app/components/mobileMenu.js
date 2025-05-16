'use client';
import { useState } from 'react';
import Link from 'next/link';
import SearchC from './searchBar';

import { Fade as Hamburger } from 'hamburger-react';

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  return (
    <div className="mobile-menu">
      <Hamburger toggled={open} toggle={setOpen} size={18} />
      {open ? (
        <div className="absolute top-0 left-0 z-1000 bg-black/20 backdrop-blur-2xl shadow-none transition w-screen h-screen">
          <header className="flex flex-col-reverse items-end px-6 py-2">
            <Hamburger toggled={open} toggle={setOpen} size={18} />
          </header>
          <ul className="flex flex-col w-full align-middle justify-center gap-5 text-center">
            <Link href="/" onClick={() => setOpen(false)}>
              Início
            </Link>
            <Link href="/" onClick={() => setOpen(false)}>
              Destaques
            </Link>
            <Link href="/" onClick={() => setOpen(false)}>
              Produtos
            </Link>
            <Link href="/" onClick={() => setOpen(false)}>
              Sobre
            </Link>
            <Link href="/" onClick={() => setOpen(false)}>
              Contato
            </Link>
          </ul>
        </div>
      ) : null}
    </div>
  );
}
