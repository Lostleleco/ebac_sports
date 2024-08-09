import React, { useEffect } from 'react'
import { Provider } from 'react-redux'
import store from '../src/store/store'

import { useGetProdutosQuery } from '../src/store/produtosApi'
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
      produtos.forEach((produto) => store.dispatch(produto(produto)))
    }
  }, [produtos])

  return (
    <Provider store={store}>
      <div className="App">
        <h1>EBAC Sports</h1>
      </div>
    </Provider>
  )
}

export default App
