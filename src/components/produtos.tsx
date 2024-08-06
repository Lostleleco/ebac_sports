import React from 'react'
import {
  Produto,
  Titulo,
  Capa,
  Prices,
  Tag,
  BtnComprar
} from '../components/Produto/styles'
import { Produto as ProdutoType } from '../types'

interface ProdutosProps {
  produtos: ProdutoType[]
  favoritos: ProdutoType[]
  favoritar: (produto: ProdutoType) => void
  adicionarAoCarrinho: (produto: ProdutoType) => void
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
        <Produto key={produto.id}>
          <Capa>
            <img src={produto.imagem} alt={produto.nome} />
            {favoritos.some((f) => f.id === produto.id) && <Tag>Favorito</Tag>}
          </Capa>
          <Titulo>{produto.nome}</Titulo>
          <Prices>
            <strong>{produto.preco}</strong>
          </Prices>
          <BtnComprar onClick={() => adicionarAoCarrinho(produto)}>
            Adicionar ao Carrinho
          </BtnComprar>
          <button onClick={() => favoritar(produto)}>
            {favoritos.some((f) => f.id === produto.id)
              ? 'Desfavoritar'
              : 'Favoritar'}
          </button>
        </Produto>
      ))}
    </div>
  )
}

export default Produtos
