import React from 'react'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'

import Link from 'components/Link'
import { useCartContext } from 'context/CartContext'

import * as S from './styles'

const Cart = () => {
  const [{ cartSkuQuantity }] = useCartContext()

  return (
    <Link to="/cart">
      <S.Badge badgeContent={cartSkuQuantity} color="secondary">
        <ShoppingCartIcon />
      </S.Badge>
    </Link>
  )

  // const [anchorEl, setAnchorEl] = React.useState(null)
  // const open = Boolean(anchorEl)
  // const popoverId = 'mouse-over-popover'

  // const handlePopoverOpen = event => {
  //   setAnchorEl(event.currentTarget)
  // }

  // const handlePopoverClose = () => {
  //   setAnchorEl(null)
  // }

  // return (
  //   <>
  //     <Button
  //       aria-describedby="open-cart"
  //       aria-haspopup="true"
  //       aria-owns={open ? popoverId : undefined}
  //       onMouseEnter={handlePopoverOpen}
  //       onMouseLeave={handlePopoverClose}
  //     >
  //       <ShoppingCartIcon />
  //     </Button>
  //     <S.Popover
  //       id={popoverId}
  //       open={open}
  //       anchorEl={anchorEl}
  //       onClose={handlePopoverClose}
  //       disableRestoreFocus
  //       anchorOrigin={{
  //         vertical: 'bottom',
  //         horizontal: 'right',
  //       }}
  //       transformOrigin={{
  //         vertical: 'top',
  //         horizontal: 'right',
  //       }}
  //     >
  //       <CartPreview />
  //     </S.Popover>
  //   </>
  // )
}

export default Cart
