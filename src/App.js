import { Container } from "@chakra-ui/react";
import PizzaList from "./Components/PizzaList";
import MainContainer from "./Components/MainContainer";
import Header from "./Components/Header";

function App() {
  return (
    <Container maxW={"100%"} bgColor={"red.300"}>
      <Header />
      <MainContainer />
    </Container>
  );
}

export default App;
