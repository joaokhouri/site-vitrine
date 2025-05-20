'use client';
import produtos from '../produtos.json';
import { ChevronDown } from 'lucide-react';
import { slugify } from '../utils/slugify';

import Link from 'next/link';

const categorias = [...new Set(produtos.map((p) => p.categoria))];

export default function ResponsiveCategoryMenu({ isScrolled, port }) {
  return (
    <div className="w-full border-b-violet-200 border-b-2">
      {/* Desktop Menu */}
      {port === 'desktop' ? (
        <div className="hidden md:flex gap-3 px-4 py-3 overflow-x-auto justify-center">
          {categorias.map((cat) => (
            <Link key={cat} href={`/categoria/${slugify(cat)}`}>
              <button
                className={`flex items-center gap-1 px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-100 transition whitespace-nowrap cursor-pointer`}
              >
                {cat}
                <ChevronDown className="w-4 h-4" />
              </button>
            </Link>
          ))}
        </div>
      ) : null}
    </div>
  );
}
