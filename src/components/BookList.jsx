import { Row } from "react-bootstrap";
import SingleBook from "./SingleBook";

const BookList = (props) => {
  return (
    <Row>
      {props.books.map((book) => {
        return <SingleBook book={book} />;
      })}
    </Row>
  );
};

export default BookList;
