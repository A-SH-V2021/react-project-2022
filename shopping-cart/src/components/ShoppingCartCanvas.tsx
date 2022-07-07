import data from "../data/items.json";
import CartItemDetail from "../components/CartItemDetail";
import {
  Offcanvas,
  OffcanvasBody,
  OffcanvasHeader,
  OffcanvasTitle,
  Stack,
} from "react-bootstrap";
import { useShoppingCart } from "../context/shoppingCartContext";
import { formatCurrency } from "../utilities/formatCurrency";

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
          <div className="ms-auto fs-3">
            Total:{" "}
            {formatCurrency(
              cartItems.reduce((total, cartItem) => {
                console.log(total);

                const item = data.find((i) => i.id === cartItem.id);
                console.log(total);
                return total + (item?.price || 0) * cartItem.quantity;
              }, 0)
            )}
          </div>
        </Stack>
      </OffcanvasBody>
    </Offcanvas>
  );
};

export default ShoppingCartCanvas;
