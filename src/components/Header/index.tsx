import React from 'react'
import * as S from './styles'
import { Produto } from '../../../types/types'
import cesta from '../../assets/cesta.png'
import { paraReal } from '../Produto'
import { useSelector } from 'react-redux'
import { RootState } from '../../../store/store'

type Props = {
  favoritos: Produto[]
}

const Header = ({ favoritos }: Props) => {
  const itensNoCarrinho = useSelector(
    (state: RootState) => state.carrinho.itens
  )

  const valorTotal = itensNoCarrinho.reduce((acc: number, item: Produto) => {
    acc += item.preco
    return acc
  }, 0)

  return (
    <S.Header>
      <h1>EBAC Sports</h1>
      <div>
        <span>{favoritos.length} favoritos</span>
        <img src={cesta} alt="Cesta" />
        <span>
          {itensNoCarrinho.length} itens, valor total: {paraReal(valorTotal)}
        </span>
      </div>
    </S.Header>
  )
}

export default Header
