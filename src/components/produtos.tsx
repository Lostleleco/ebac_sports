import React from 'react'
import { Produto } from '../types'

interface ProdutosProps {
  produtos: Produto[]
  favoritos: Produto[]
  favoritar: (produto: Produto) => void
  adicionarAoCarrinho: (produto: Produto) => void
}

const Produtos: React.FC<ProdutosProps> = ({
  produtos,
  favoritos,
  favoritar,
  adicionarAoCarrinho
}) => {
  return (
    <div>
      <h1>Produtos</h1>
      {produtos.map((produto) => (
        <div key={produto.id}>
          <h2>{produto.nome}</h2>
          <p>Preço: {produto.preco}</p>
          <img src={produto.imagem} alt={produto.nome} />
          <button onClick={() => adicionarAoCarrinho(produto)}>
            Adicionar ao Carrinho
          </button>
          <button onClick={() => favoritar(produto)}>
            {favoritos.some((f) => f.id === produto.id)
              ? 'Desfavoritar'
              : 'Favoritar'}
          </button>
        </div>
      ))}
    </div>
  )
}

export default Produtos
