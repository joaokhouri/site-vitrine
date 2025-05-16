'use client';

import { useState, useEffect, useRef } from 'react';
import produtosData from '../produtos.json';
import Link from 'next/link';
import { slugify } from '@/app/utils/slugify';
import { Search } from 'lucide-react';

export default function SearchBarResponsive(props) {
  const [produtos, setProdutos] = useState([]);
  const [busca, setBusca] = useState('');
  const [filtrados, setFiltrados] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [showSearchBarMobile, setShowSearchBarMobile] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    setProdutos(produtosData);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setShowResults(false);
        setShowSearchBarMobile(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (busca.trim() === '') {
      setFiltrados([]);
    } else {
      const results = produtos.filter((item) =>
        item.nome.toLowerCase().includes(busca.toLowerCase())
      );
      setFiltrados(results);
    }
  }, [busca, produtos]);

  return (
    <div className={`relative w-full max-w-xl mx-auto px-4 pt-2 ${props.port}`}>
      {/* Mobile: botão de lupa */}
      <div className="flex md:hidden justify-end">
        {!showSearchBarMobile && (
          <button
            onClick={() => setShowSearchBarMobile(true)}
            className="p-2 rounded-full bg-gray-200"
          >
            <Search className="w-5 h-5 text-gray-700" />
          </button>
        )}
      </div>

      {/* Input visível em desktop ou quando botão é clicado no mobile */}
      {(showSearchBarMobile || (typeof window !== 'undefined' && props.port === 'desktop')) && (
        <div ref={containerRef} className="relative">
          <input
            type="text"
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
            onFocus={() => setShowResults(true)}
            placeholder="Buscar produtos..."
            className="w-full px-4 py-2 border bg-white border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {showResults && (
            <div className="absolute z-30 top-full left-0 right-0 mt-2 bg-white border border-gray-300 rounded-lg shadow-lg max-h-64 overflow-y-auto">
              {filtrados.length > 0 ? (
                filtrados.map((item) => (
                  <Link
                    key={item.id}
                    href={`/produto/${slugify(item.nome)}`}
                    onClick={() => {
                      setShowResults(false);
                      setShowSearchBarMobile(false);
                      setBusca('');
                    }}
                  >
                    <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">{item.nome}</div>
                  </Link>
                ))
              ) : (
                <div className="px-4 py-2 text-gray-500 italic">Nenhum produto encontrado.</div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
