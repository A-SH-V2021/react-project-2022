import { Button, Card } from "react-bootstrap";
import { useShoppingCart } from "../context/shoppingCartContext";
import { formatCurrency } from "../utilities/formatCurrency";

type StoreItemProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};
const StoreItem = ({ id, name, price, imgUrl }: StoreItemProps) => {
  
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();

  const quntity = getItemQuantity(id);

  return (
    <Card className="h-100">
      <Card.Img
        variant="top"
        src={imgUrl}
        height="300px"
        style={{ objectFit: "cover" }}
      ></Card.Img>
      <Card.Body>
        <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
          <span>{name}</span>
          <span className="text-muted">{formatCurrency(price)}</span>
        </Card.Title>
        {quntity === 0 ? (
          <Button className="w-100" onClick={()=>increaseCartQuantity(id)}>ADD TO CART</Button>
        ) : (
          <div
            className="d-flex flex-column align-items-center"
            style={{ gap: 3 }}
          >
            <div
              className="d-flex justify-content-center align-items-center"
              style={{ gap: 3 }}
            >
              <Button onClick={() => increaseCartQuantity(id)}>+</Button>
              <div className="">
                <span className="fs-3">{quntity}</span>in cart
              </div>
              <Button onClick={() => decreaseCartQuantity(id)}>-</Button>
            </div>
            <Button
              variant="danger"
              size="sm"
              onClick={() => removeFromCart(id)}
            >
              Remove
            </Button>
          </div>
        )}
      </Card.Body>
    </Card>
  );
};

export default StoreItem;
