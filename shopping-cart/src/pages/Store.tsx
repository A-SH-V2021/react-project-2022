import { Col, Row } from "react-bootstrap";
import StoreItem from "../components/StoreItem";
import data from "../data/items.json";

const Store = () => {
  return (
    <>
      <h2>Store</h2>
      <Row md={2} xs={1} lg={3} className="g-3">
        {data.map((item) => (
          <Col key={item.id}>
            <StoreItem {...item} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Store;
