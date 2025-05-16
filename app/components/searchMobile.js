import { useState } from 'react';
import Link from 'next/link';
import { Search, X } from 'lucide-react';

import SearchC from './searchBar';

export default function SearchMobile() {
  const [clicked, setClicked] = useState(false);
  return (
    <div className="search-mobile align-middle flex">
      <button onClick={() => setClicked(!clicked)} className="align-middle">
        {clicked ? <X size={18} /> : <Search size={18} />}
      </button>
      {clicked && (
        <div className="absolute top-0 left-0 w-screen h-screen z-1001 bg-amber-400 ">
          <header>
            <button onClick={() => setClicked(!clicked)}>
              {clicked ? <X size={18} /> : <Search size={18} />}
            </button>
          </header>
          <SearchC />
        </div>
      )}
    </div>
  );
}
