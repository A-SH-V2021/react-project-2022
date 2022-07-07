import CartItemDetail from "../components/CartItemDetail";
import {
  Offcanvas,
  OffcanvasBody,
  OffcanvasHeader,
  OffcanvasTitle,
  Stack,
} from "react-bootstrap";
import { useShoppingCart } from "../context/shoppingCartContext";

const ShoppingCartCanvas = () => {
  const { isOpenCart, closeCart, cartItems } = useShoppingCart();

  return (
    <Offcanvas show={isOpenCart} onHide={closeCart} placement="end">
      <OffcanvasHeader closeButton>
        <OffcanvasTitle>Cart</OffcanvasTitle>
      </OffcanvasHeader>
      <OffcanvasBody>
        <Stack gap={3}>
          {cartItems.map((item) => {
            return <CartItemDetail key={item.id} {...item}></CartItemDetail>;
          })}
        </Stack>
      </OffcanvasBody>
    </Offcanvas>
  );
};

export default ShoppingCartCanvas;
