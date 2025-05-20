import produtosData from '../../produtos.json';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { slugify } from '@/app/utils/slugify';

export default async function ProdutoPage({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  const produto = produtosData.find((p) => slugify(p.nome) === slug);

  if (!produto) return notFound();

  return (
    <div className="max-w-3xl mx-auto px-4 py-6">
      <h1 className="text-2xl md:text-3xl font-bold mb-4 text-center md:text-left">
        {produto.nome}
      </h1>

      <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
        <div className="w-full md:w-1/2">
          <Image
            src={produto.imagem}
            alt={produto.nome}
            width={500}
            height={500}
            className="rounded-xl border shadow-md w-full h-auto object-contain"
          />
        </div>

        <div className="w-full md:w-1/2 flex flex-col gap-4 text-center md:text-left">
          <p className="text-xl text-gray-700">
            Preço: <span className="font-semibold">R$ {produto.preco.toFixed(2)}</span>
          </p>

          <a
            href={produto.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-all shadow-md"
          >
            Comprar no {produto.link.includes('mercadolivre') ? 'Mercado Livre' : 'Shopee'}
          </a>
        </div>
      </div>
    </div>
  );
}
