import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  addProduct,
  removeProduct,
  selectProducts
} from '../../store/carrinhoSlice'
import { RootState } from '../../store/store'

interface Product {
  id: number
  name: string
  price: number
}

const ProductComponent: React.FC = () => {
  const dispatch = useDispatch()
  const products = useSelector((state: RootState) => selectProducts(state))

  const handleAddProduct = (product: Product) => {
    dispatch(addProduct(product))
  }

  const handleRemoveProduct = (productId: number) => {
    dispatch(removeProduct(productId))
  }

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price}
            <button onClick={() => handleRemoveProduct(product.id)}>
              Remove
            </button>
          </li>
        ))}
      </ul>
      <button
        onClick={() =>
          handleAddProduct({ id: 1, name: 'New Product', price: 100 })
        }
      >
        Add Product
      </button>
    </div>
  )
}

export default ProductComponent
