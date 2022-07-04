import { Card } from "react-bootstrap";
import {formatCurrency} from "../utilities/formatCurrency";

type StoreItemProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};
const StoreItem = ({ id, name, price, imgUrl }: StoreItemProps) => {
  return (
    <Card>
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
      </Card.Body>
    </Card>
  );
};

export default StoreItem;
