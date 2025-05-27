'use client';

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { supabase } from '@/app/lib/supabase';
import { Search } from 'lucide-react';

export default function SearchBarResponsive(props: { port: 'desktop' | 'mobile' }) {
  const [busca, setBusca] = useState('');
  const [filtrados, setFiltrados] = useState<any[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [showSearchBarMobile, setShowSearchBarMobile] = useState(false);
  const containerRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    const fetchResultados = async () => {
      if (busca.trim() === '') {
        setFiltrados([]);
        return;
      }

      const { data, error } = await supabase
        .from('products')
        .select('id, name, slug')
        .ilike('name', `%${busca}%`)
        .limit(5);

      if (!error) {
        setFiltrados(data || []);
        setShowResults(true);
      }
    };

    const debounce = setTimeout(fetchResultados, 300);
    return () => clearTimeout(debounce);
  }, [busca]);

  useEffect(() => {
    const handleClickOutside = (e: any) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setShowResults(false);
        setShowSearchBarMobile(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (busca.trim()) {
      router.push(`/busca?q=${encodeURIComponent(busca.trim())}`);
      setShowResults(false);
      setShowSearchBarMobile(false);
    }
  };

  return (
    <div className="relative w-full max-w-xl mx-auto">
      <div className={`flex ${props.port === 'desktop' ? 'hidden' : null} justify-end`}>
        {!showSearchBarMobile && (
          <button onClick={() => setShowSearchBarMobile(true)} className="p-2 rounded-full ">
            <Search className="w-5 h-5 text-gray-700" />
          </button>
        )}
      </div>
      {(showSearchBarMobile || (typeof window !== 'undefined' && props.port === 'desktop')) && (
        <form onSubmit={handleSubmit}>
          <div ref={containerRef} className="relative">
            <input
              type="text"
              value={busca}
              onChange={(e) => setBusca(e.target.value)}
              onFocus={() => setShowResults(true)}
              placeholder="Buscar produtos..."
              className={`w-full px-4 ${
                props.port === 'desktop' ? 'py-2' : 'py-1'
              } border bg-white border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500`}
            />

            {showResults && (
              <div
                className={`absolute z-50 top-full left-0 right-0 mt-2 bg-white border border-gray-300 rounded-lg shadow-lg max-h-64 overflow-y-auto ${
                  props.port === 'mobile' ? 'w-full' : ''
                }`}
              >
                {filtrados.length > 0 ? (
                  filtrados.map((item) => (
                    <Link
                      key={item.id}
                      href={`/produto/${item.slug}`}
                      onClick={() => {
                        setShowResults(false);
                        setShowSearchBarMobile(false);
                        setBusca('');
                      }}
                    >
                      <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">{item.name}</div>
                    </Link>
                  ))
                ) : (
                  <div className="px-4 py-2 text-gray-500 italic">
                    Nenhuma sujestão encontrada, pressione ENTER para buscar.
                  </div>
                )}
              </div>
            )}
          </div>
        </form>
      )}
    </div>
  );
}
