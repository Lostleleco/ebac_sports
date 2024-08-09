import React from 'react'
import { Produto } from '../App'
import * as S from './styles'

type Props = {
  produto: Produto
}

const ProdutoComponent: React.FC<Props> = ({ produto }) => {
  return (
    <S.Card>
      <h2>{produto.nome}</h2>
      <p>Preço: {produto.preco}</p>
      <img src={produto.imagem} alt={produto.nome} />
    </S.Card>
  )
}

export default ProdutoComponent
