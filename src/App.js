import React from "react";
import styled from "styled-components";
import Edit from "./components/Edit";
import List from "./components/List";

function App() {
  return (
    <Container>
      <Edit/>
      <hr style={{marginTop:"30px"}} />
      <List/>
    </Container>
  );
}

export default App;

const Container = styled.div`
  width: 50vw;
  margin: 30px auto;
`