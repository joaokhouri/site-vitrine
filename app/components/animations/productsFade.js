// components/ProductList.tsx
'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { slugify } from '../../utils/slugify';

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2, // tempo entre os itens
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const ProductList = ({ produtos, className = '' }) => {
  return (
    <motion.div variants={containerVariants} initial="hidden" animate="show">
      <motion.div key={produtos.id} className={className} variants={itemVariants}>
        <Image
          src={produtos.imagem}
          alt={produtos.nome}
          width={500}
          height={500}
          className="h-48 w-auto object-contain mb-4"
        />
        <Link key={produtos.id} href={`/produto/${slugify(produtos.nome)}`}>
          <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">{produtos.nome}</div>
        </Link>
        <p className="text-blue-600 font-semibold mb-2">R$ {produtos.preco.toFixed(2)}</p>
        <Link
          href={produtos.link}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition"
        >
          Comprar no {produtos.link.includes('mercadolivre') ? 'Mercado Livre' : 'Shopee'}
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default ProductList;
