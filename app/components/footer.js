'use client';

import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#1E1B4B] text-indigo-100 py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Coluna 1 */}
        <div>
          <h3 className="text-xl font-semibold mb-3 text-white">Universo Compras</h3>
          <p className="text-sm text-indigo-200">
            Seu marketplace de produtos variados. Qualidade, preço e praticidade em um só lugar.
          </p>
          <div className="flex gap-4 mt-4">
            <a href="#" className="text-blue-400 hover:text-violet-400 transition">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="text-blue-400 hover:text-violet-400 transition">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="text-blue-400 hover:text-violet-400 transition">
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Coluna 2 */}
        <div>
          <h4 className="text-lg font-semibold mb-3 text-white">Links úteis</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="text-blue-400 hover:text-violet-400 transition">
                Sobre nós
              </a>
            </li>
            <li>
              <a href="#" className="text-blue-400 hover:text-violet-400 transition">
                Política de privacidade
              </a>
            </li>
            <li>
              <a href="#" className="text-blue-400 hover:text-violet-400 transition">
                Termos de uso
              </a>
            </li>
            <li>
              <a href="#" className="text-blue-400 hover:text-violet-400 transition">
                Fale conosco
              </a>
            </li>
          </ul>
        </div>

        {/* Coluna 3 */}
        <div>
          <h4 className="text-lg font-semibold mb-3 text-white">Contato</h4>
          <ul className="space-y-3 text-sm text-indigo-200">
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-blue-400" />
              contato@universocompras.com
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-blue-400" />
              (00) 90000-0000
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-blue-400" />
              Rua Exemplo, 123 - Cidade
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-10 border-t border-violet-800 pt-6 text-center text-sm text-indigo-300">
        &copy; 2025 Universo Compras. Todos os direitos reservados.
      </div>
    </footer>
  );
}
