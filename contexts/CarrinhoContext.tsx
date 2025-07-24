import React, { createContext, useContext, useState } from 'react';

export interface Produto {
  id: string;
  nome: string;
  preco: number;
  unidade: string;
  quantidade?: number;
}

interface CarrinhoContextData {
  itens: Produto[];
  adicionar: (produto: Produto) => void;
  remover: (id: string) => void;
  limpar: () => void;
}

const CarrinhoContext = createContext<CarrinhoContextData | undefined>(undefined);

export function CarrinhoProvider({ children }: { children: React.ReactNode }) {
  const [itens, setItens] = useState<Produto[]>([]);

  function adicionar(produto: Produto) {
    setItens((prev) => {
      const existe = prev.find((p) => p.id === produto.id);
      if (existe) {
        return prev.map((p) =>
          p.id === produto.id ? { ...p, quantidade: (p.quantidade ?? 1) + 1 } : p
        );
      }
      return [...prev, { ...produto, quantidade: 1 }];
    });
  }

  function remover(id: string) {
    setItens((prev) => prev.filter((p) => p.id !== id));
  }

  function limpar() {
    setItens([]);
  }

  return (
    <CarrinhoContext.Provider value={{ itens, adicionar, remover, limpar }}>
      {children}
    </CarrinhoContext.Provider>
  );
}

export function useCarrinho() {
  const context = useContext(CarrinhoContext);
  if (!context) throw new Error('useCarrinho must be used within CarrinhoProvider');
  return context;
}