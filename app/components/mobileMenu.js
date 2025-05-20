'use client';
import { useState } from 'react';
import produtos from '../produtos.json';
import { ChevronDown } from 'lucide-react';
import { slugify } from '../utils/slugify';
import { Fade as Hamburger } from 'hamburger-react';
import FadeIn from './animations/fadeIn';

import Link from 'next/link';

const categorias = [...new Set(produtos.map((p) => p.categoria))];

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  return (
    <div className="mobile-menu text-xl leading-none">
      <Hamburger toggled={open} toggle={setOpen} size={18} color="#364156" />
      {open && (
        <FadeIn className=" bg-white px-4 pb-4 space-y-3 absolute top-0 left-0 w-full h-screen z-50">
          <header className="flex flex-col-reverse items-end py-2">
            <Hamburger toggled={open} toggle={setOpen} size={18} />
          </header>
          <div className="flex flex-col gap-4">
            {categorias.map((cat) => (
              <Link key={cat} href={`/categoria/${slugify(cat)}`} className="hover:underline">
                <button
                  className={`w-full text-left flex items-center justify-between px-4 py-2 rounded-md bg-gray-100 text-gray-800 hover:bg-blue-100 transition ${
                    cat.index === 0 ? 'bg-(--primary) text-white' : 'bg-gray-100 text-gray-800'
                  } hover:bg-blue-100 transition whitespace-nowrap`}
                  onClick={() => setOpen(false)}
                >
                  {cat}
                  <ChevronDown className="w-4 h-4" />
                </button>
              </Link>
            ))}
          </div>
        </FadeIn>
      )}
    </div>
  );
}
