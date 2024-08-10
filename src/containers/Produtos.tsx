import React from 'react'
import ProdutoComponent from '../components/Produto/index'
import { Produto } from '../App'

type Props = {
  produtos: Produto[]
  favoritos: Produto[]
  favoritar: (produto: Produto) => void
  adicionarAoCarrinho: (produto: Produto) => void
}
const Produtos: React.FC<Props> = ({
  produtos,
  favoritar,
  adicionarAoCarrinho
}) => {
  return (
    <div>
      {produtos.map((produto) => (
        <ProdutoComponent
          key={produto.id}
          produto={produto}
          aoComprar={adicionarAoCarrinho}
          favoritar={favoritar}
          estaNosFavoritos
        />
      ))}
    </div>
  )
}

export default Produtos
