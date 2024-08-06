import React from 'react'
import { Produto as ProdutoType } from '../types'

type Props = {
  produto: ProdutoType
  aoComprar: (produto: ProdutoType) => void
  favoritar: (produto: ProdutoType) => void
  estaNosFavoritos: boolean
}

const Produto = ({
  produto,
  aoComprar,
  favoritar,
  estaNosFavoritos
}: Props) => {
  return (
    <div>
      <h2>{produto.nome}</h2>
      <p>Preço: {produto.preco}</p>
      <img src={produto.imagem} alt={produto.nome} />
      <button onClick={() => aoComprar(produto)}>Adicionar ao Carrinho</button>
      <button onClick={() => favoritar(produto)}>
        {estaNosFavoritos ? 'Desfavoritar' : 'Favoritar'}
      </button>
    </div>
  )
}

export default Produto
