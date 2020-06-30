import React from 'react'
import { useCartContext } from 'context/CartContext'

const CartPage = () => {
  // eslint-disable-next-line no-unused-vars
  const [_, dispatch] = useCartContext()

  React.useEffect(() => {
    dispatch({ type: 'EMPTY_CART', payload: {} })
  }, [])
  return <div>Thank you for your purchase!</div>
}

export default CartPage
