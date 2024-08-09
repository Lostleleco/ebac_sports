import React, { useEffect } from 'react'
import { Provider } from 'react-redux'
import store from '../src/store/store'
import { useGetProdutosQuery } from '../src/store/produtosApi'
import ProdutoComponent from '../src/containers/Produtos'

export type Produto = {
  id: number
  nome: string
  preco: number
  imagem: string
}
function App() {
  const { data: produtos } = useGetProdutosQuery('esportes')

  useEffect(() => {
    if (produtos) {
      produtos.forEach((produto: Produto) => store.dispatch(produtos(produto)))
    }
  }, [produtos])

  return (
    <Provider store={store}>
      <div className="App">
        <h1>EBAC Sports</h1>
        {produtos &&
          produtos.map((produto: Produto) => (
            <ProdutoComponent key={produto.id} produto={produto} />
          ))}
      </div>
    </Provider>
  )
}

export default App
