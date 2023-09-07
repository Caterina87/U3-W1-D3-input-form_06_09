import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import TopBar from "./components/TopBar";
import MyFooter from "./components/MyFooter";
import Welcome from "./components/Welcome";
import { Container } from "react-bootstrap";
import BookListClass from "./components/BookListClass";

import fantasy from "./Data/books/fantasy.json";

function App() {
  return (
    <Container>
      <TopBar brand="React Library" />
      <Welcome />
      <BookListClass books={fantasy} />
      <MyFooter />
    </Container>
  );
}

export default App;
