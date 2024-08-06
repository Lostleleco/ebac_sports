import React, { useEffect } from 'react'
import { Provider } from 'react-redux'
import store from '../store'
import { useGetProdutosQuery } from '../store/produtosApi'

function App() {
  const { data: produtos, error, isLoading } = useGetProdutosQuery()

  useEffect(() => {
    if (produtos) {
      produtos.forEach((produto: (arg0: any) => any) =>
        store.dispatch(produto(produto))
      )
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
