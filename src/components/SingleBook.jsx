import { Card } from "react-bootstrap";

const SingleBook = (props) => {
  return (
    <Card>
      <Card.Img variant="top" src={props.book.img} style={{ heigh: "200px", objectFit: "content" }} />
      <Card.Body>
        <Card.Title>{props.book.title} </Card.Title>
      </Card.Body>
    </Card>
  );
};
export default SingleBook;
