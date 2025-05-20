import Image from 'next/image';
import Link from 'next/link';
import produtosData from '../../produtos.json';
import { slugify } from '../../utils/slugify';
import ProductList from '../../components/animations/productsFade';

export async function generateStaticParams() {
  const categorias = [...new Set(produtosData.map((p) => slugify(p.categoria)))];
  return categorias.map((slug) => ({ slug }));
}

export default async function CategoriaPage({ params }) {
  const resolvedParams = await params;
  const categoriaSlug = resolvedParams.slug;

  const produtos = produtosData.filter((p) => slugify(p.categoria) === categoriaSlug);

  if (produtos.length === 0) {
    return (
      <p className="text-center text-red-500 text-xl mt-10">
        Nenhum produto encontrado nessa categoria.
      </p>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold mb-6 capitalize">
        Categoria: {categoriaSlug.replace(/-/g, ' ')}
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {produtos.map((produto) => (
          <ProductList
            produtos={produto}
            key={produto.nome}
            className="border rounded-lg shadow-md p-4 flex flex-col items-center"
          ></ProductList>
        ))}
      </div>
    </div>
  );
}

// <Image
//   src={produto.imagem}
//   alt={produto.nome}
//   width={500}
//   height={500}
//   className="h-48 w-auto object-contain mb-4"
// />
// <Link key={produto.id} href={`/produto/${slugify(produto.nome)}`}>
//   <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">{produto.nome}</div>
// </Link>
// <p className="text-blue-600 font-semibold mb-2">R$ {produto.preco.toFixed(2)}</p>
// <a
//   href={produto.link}
//   target="_blank"
//   rel="noopener noreferrer"
//   className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition"
// >
//   Comprar no {produto.link.includes('mercadolivre') ? 'Mercado Livre' : 'Shopee'}
// </a>
