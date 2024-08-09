import { useSelector } from 'react-redux'
import * as S from './styles'

import cesta from '../../assets/cesta.png'
import { paraReal } from '../Produto'

import { rootReducer } from '../../store'
import { Produto } from '../../App'

const Header = () => {
  const itens = useSelector((state: rootReducer) => state.carrinho.itens)
  const valorTotal = itens.reduce((acc: number, item: Produto) => {
    return acc + item.preco
  }, 0)

  return (
    <S.Header>
      <h1>EBAC Sports</h1>
      <div>
        <img src={cesta} alt="Cesta de compras" />
        <span>
          {itens.length} itens, valor total: {paraReal(valorTotal)}
        </span>
      </div>
    </S.Header>
  )
}

export default Header
