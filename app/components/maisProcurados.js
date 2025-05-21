import products from '../maisProdurados.json';
import Image from 'next/image';

export default function PopularProducts() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-2xl font-bold mb-4">Produtos mais procurados</h2>

      <div className="flex overflow-x-auto space-x-4 scrollbar-hide">
        {products.map((product) => (
          <div
            key={product.id}
            className="min-w-[180px] sm:min-w-[200px] bg-white shadow-md rounded-lg p-4 flex-shrink-0"
          >
            <Image
              src={product.imagem}
              alt={product.nome}
              width={140}
              height={200}
              className="object-cover rounded-xl sm:w-[180px] sm:h-[240px] md:w-[220px] md:h-[280px]"
            />
            <h3 className="text-sm font-semibold">{product.nome}</h3>
            <p className="text-blue-600 font-bold">{product.preco}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
