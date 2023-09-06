import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import TopBar from "./components/TopBar";
import MyFooter from "./components/MyFooter";
import Welcome from "./components/Welcome";
// import AllBooks from "./components/AllBooks";
import { Container } from "react-bootstrap";
// import SingleBook from "./components/SingleBook";
import BookList from "./components/BookList";
import fantasy from "./Data/books/fantasy.json";

function App() {
  return (
    <Container>
      <TopBar brand="React Library" />
      <Welcome />
      {/* <AllBooks /> */}
      {/* <SingleBook /> */}
      <BookList books={fantasy} />
      <MyFooter />
    </Container>
  );
}

export default App;
