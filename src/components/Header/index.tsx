import React from 'react'
import { useSelector } from 'react-redux'
import * as S from './styles'
import cesta from '../../assets/cesta.png'
import paraReal from '../../utils/formatters'
import { RootState } from '../../store/store'

const Header = () => {
  const itens = useSelector((state: RootState) => state.carrinho.itens)

  const valorTotal = itens.reduce((acc, item) => {
    acc += item.preco
    return acc
  }, 0)

  return (
    <S.Header>
      <h1>EBAC Sports</h1>
      <div>
        <span>
          {itens.length} itens, valor total: {paraReal(valorTotal)}
        </span>
        <img src={cesta} alt="Cesta de compras" />
      </div>
    </S.Header>
  )
}

export default Header
