import Link from 'next/link';

// pages/404.tsx ou app/not-found.tsx (dependendo da estrutura do seu projeto)

export default function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center bg-gray-100 px-4">
      <svg
        width="200"
        height="200"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="mb-6"
      >
        <circle cx="12" cy="12" r="10" fill="#6d9fce" />
        <path
          d="M9 10c-.5-.5-1.5-.5-2 0"
          stroke="#3e30a0"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M17 10c-.5-.5-1.5-.5-2 0"
          stroke="#3e30a0"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M9 16c1.5-1.5 4.5-1.5 6 0"
          stroke="#3e30a0"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
      <h1 className="text-3xl font-bold text-[#3e30a0] mb-2">Produto não encontrado</h1>
      <p className="text-gray-700 mb-6">
        A página que você está procurando pode ter sido removida ou nunca existiu. 😢
      </p>
      <Link
        href="/"
        className="px-4 py-2 bg-[#3e30a0] text-white rounded hover:bg-[#3e30a0] transition"
      >
        Voltar para a página inicial
      </Link>
    </div>
  );
}
