import { Card, Col } from "react-bootstrap";

const SingleBook = (props) => {
  return (
    <Col md={4}>
      <Card>
        <Card.Img variant="top" src={props.book.img} style={{ heigh: "200px", objectFit: "content" }} />
        <Card.Body>
          <Card.Title>{props.book.title} </Card.Title>
        </Card.Body>
      </Card>
    </Col>
  );
};
export default SingleBook;
