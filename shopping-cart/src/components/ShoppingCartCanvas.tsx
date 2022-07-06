import { Offcanvas, OffcanvasHeader, OffcanvasTitle } from "react-bootstrap";
import { useShoppingCart } from "../context/shoppingCartContext";

const ShoppingCartCanvas = () => {

  const { isOpenCart, closeCart } = useShoppingCart();

  return (
    <Offcanvas show={isOpenCart} onHide={closeCart} placement='end'>
      <OffcanvasHeader closeButton>
        <OffcanvasTitle>Cart</OffcanvasTitle>
      </OffcanvasHeader>
    </Offcanvas>
  );
};

export default ShoppingCartCanvas;
