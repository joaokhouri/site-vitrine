// app/busca/page.tsx
import { supabase } from '@/app/lib/supabase';
import NotFoundPage from '../not-found';

type SearchParams = Promise<{ q: string[] }>;

export default async function BuscaPage({ searchParams }: { searchParams: SearchParams }) {
  const resolvedSearchParams = await searchParams;
  const query = resolvedSearchParams.q || '';

  const { data, error } = await supabase.from('products').select('*').ilike('name', `%${query}%`);

  if (error) {
    return <NotFoundPage />;
  }

  return (
    <div className="p-4">
      <h1 className="text-xl mb-4">{data?.length === 0 ? null : `Resultados para: ${query}`}</h1>
      {data?.length === 0 ? (
        <NotFoundPage />
      ) : (
        <ul className="grid grid-cols-2 gap-4">
          {data?.map((produto) => (
            <li key={produto.id} className="border rounded p-2">
              <a href={`/produto/${produto.slug}`} className="font-semibold">
                {produto.name}
              </a>
              <p>{produto.description}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
