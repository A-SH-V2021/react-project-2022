import data from "../data/items.json";
import {  Button, Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/shoppingCartContext";
import { formatCurrency } from "../utilities/formatCurrency";

type CartItemDetailProps = {
  id: number;
  quantity: number;
};

const CartItemDetail = ({ id, quantity }: CartItemDetailProps) => {
  const { removeFromCart } = useShoppingCart();

  const item = data.find((i) => i.id === id);
  const totalPrice = quantity * (item?.price || 0);
  if (item === null) return null;

  return (
    <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
      <img
        src={item?.imgUrl}
        alt={item?.name}
        style={{ width: "125px", height: "85px", objectFit: "cover" }}
      />
      <div className="me-auto">
        <div className="d-flex flex-column">
          <div className="fs-5">
            {item?.name}
            {quantity > 1 && ` x${quantity}`}
          </div>
          <div className="">
            {formatCurrency(item?.id || 0)}
            {/* <span>{item?.price}</span> */}
          </div>
        </div>
      </div>
      <div className="">{formatCurrency(totalPrice)}</div>
      <Button
        variant="outline-danger"
        size="sm"
        onClick={() => removeFromCart(item?.id || 0)}
      >
        &times;
      </Button>
    </Stack>
  );
};

export default CartItemDetail;
