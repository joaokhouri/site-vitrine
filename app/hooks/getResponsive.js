'use client';

import { useState, useEffect } from 'react';

const useResponsive = () => {
  const [state, setState] = useState({
    isMobile: false,
    isTablet: false,
    isDesktop: false,
  });
  const [ready, setReady] = useState(false); // Variável de estado para indicar se o hook está pronto
  // Declarando um array no useState para armazenar os valores de isMobile, isTablet e isDesktop
  // e inicializando com valores padrão (false).

  useEffect(() => {
    function onResizeHandler() {
      const isMobile = window.innerWidth <= 815;
      const isTablet = window.innerWidth > 815 && window.innerWidth <= 990;
      const isDesktop = window.innerWidth > 990;

      setState({ isMobile, isTablet, isDesktop });
      setReady(true);
    }

    onResizeHandler(); // Chama a função para definir o estado inicial com base no tamanho da tela atual

    window.addEventListener('resize', onResizeHandler); // Adiciona o listener para o evento de redimensionamento da janela
    // Isso garante que o estado seja atualizado sempre que a janela for redimensionada.

    return () => {
      window.removeEventListener('resize', onResizeHandler); // Remove o listener quando o componente for desmontado
      // Isso evita vazamentos de memória e garante que o listener não continue ativo após o componente ser removido.
    };
  }, []);

  return { ...state, ready }; // Retorna o estado e a variável de prontidão
};

export default useResponsive;
