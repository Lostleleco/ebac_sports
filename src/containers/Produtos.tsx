import React from 'react'
import {
  Produtos as ProdutosContainer,
  Produto,
  Titulo,
  Capa,
  Prices,
  Tag,
  BtnComprar
} from './styles'
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
    <ProdutosContainer>
      {produtos.map((produto) => (
        <Produto key={produto.id}>
          <Capa>
            <img src={produto.imagem} alt={produto.nome} />
            {favoritos.some((f) => f.id === produto.id) && <Tag>Favorito</Tag>}
          </Capa>
          <Titulo>{produto.nome}</Titulo>
          <Prices>
            <strong>{produto.preco}</strong>
            {/* Adicione um preço antigo aqui, se necessário */}
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
    </ProdutosContainer>
  )
}

export default Produtos
