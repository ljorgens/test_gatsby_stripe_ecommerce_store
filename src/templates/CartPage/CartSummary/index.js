import React from 'react'
import Typography from '@material-ui/core/Typography'

import { useCartContext } from 'context/CartContext'
import { useProductsContext } from 'context/ProductsContext'
import priceFormat from 'utils/priceFormat'

import * as S from './styles'
import getCartSubtotal from './getCartSubtotal'
import CheckoutButton from './CheckoutButton'

const CartSummary = () => {
  const { skus } = useProductsContext()
  const [{ cartSkuList }] = useCartContext()

  const cartSubtotal = getCartSubtotal({ skus, cartSkuList })

  return (
    <>
      <Typography variant="h5">Total</Typography>
      <S.Row>
        <Typography>Subtotal</Typography>
        <Typography>{priceFormat(cartSubtotal)}</Typography>
      </S.Row>
      <S.Row>
        <Typography>Total (VAT Included)</Typography>
        <Typography>{priceFormat(cartSubtotal)}</Typography>
      </S.Row>
      <S.Row>
        <input
          id="coupon-input"
          className="MuiTypography-root MuiTypography-body1"
          type="text"
          placeholder="Your Coupon Code"
          style={{ borderWidth: 2, borderRadius: 5 }}
        />
      </S.Row>
      <S.Row>
        <CheckoutButton />
      </S.Row>
    </>
  )
}

export default CartSummary
