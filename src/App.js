import Container from "./Container";
import Head from "./Head";
import Main from "./Main";
import Button from "./Button";
import Recipe from "./Recipe";
import Bottom from "./Bottom";

function App() {
  return (
    <Container>
    <Head
      title="Co na Obiad"
    />
    <Main>
      <Button/>
      <Recipe/>
    </Main>
    <Bottom/>
    </Container>
  );
}

export default App;
