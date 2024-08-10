import React from 'react'
import ProdutoComponent from '../../containers/Produtos'
import { Produto } from '../../App'

type Props = {
  produtos: Produto[]
  favoritos: Produto[]
  favoritar: (produto: Produto) => void
  adicionarAoCarrinho: (produto: Produto) => void
}

const Produtos: React.FC<Props> = ({
  produtos,
  favoritos,
  favoritar,
  adicionarAoCarrinho
}) => {
  return (
    <div>
      {produtos.map((produto) => (
        <ProdutoComponent
          key={produto.id}
          Produto={produto}
          favoritar={favoritar}
          adicionarAoCarrinho={adicionarAoCarrinho}
        />
      ))}
    </div>
  )
}

export default Produtos
