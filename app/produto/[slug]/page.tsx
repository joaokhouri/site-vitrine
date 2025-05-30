import Image from 'next/image';
import Link from 'next/link';
import { supabase } from '../../lib/supabase';
import NotFound from '../../not-found';

type Params = Promise<{ slug: string[] }>;

export default async function ProdutoPage({ params }: { params: Params }) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  const { data: produto, error } = await supabase
    .from('products')
    .select('*')
    .eq('slug', slug)
    .single();

  if (!produto || error) return <NotFound />;

  // Buscar produtos relacionados da mesma categoria, mas com slug diferente
  const { data: relacionados } = await supabase
    .from('products')
    .select('id, name, price, img_url, slug')
    .eq('category', produto.category)
    .neq('slug', produto.slug)
    .limit(4);

  return (
    <div className="max-w-3xl mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold mb-4">{produto.name}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <Image
            src={produto.image_url}
            alt={produto.name}
            width={600}
            height={600}
            className="rounded-2xl shadow"
          />
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-2xl font-semibold text-green-600">R$ {produto.price.toFixed(2)}</p>
          <p className="text-gray-700">{produto.description}</p>
          <ul className="mt-4 list-disc list-inside text-sm text-gray-600">
            <li>Cor: {produto.color}</li>
          </ul>
          <Link
            href={produto.link}
            target="_blank"
            className="mt-4 inline-block bg-yellow-400 text-black font-bold px-6 py-3 rounded-lg shadow hover:bg-yellow-500 transition"
          >
            Comprar agora
          </Link>
        </div>
      </div>
      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-2">Avaliações</h2>
        <p className="text-sm text-gray-500">⭐️⭐️⭐️⭐️☆ (4.5/5 com base em 123 avaliações)</p>
      </div>
    </div>
  );
}
