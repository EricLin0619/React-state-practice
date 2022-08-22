import React from "react";
import styled from "styled-components";
import Item from "./Item";

function List({ data, delData }) {
  return (
    <Container>
      {data.map((item) => {
        const { id, note = "你好", date = "" } = item;
        return (
          <Item key={id} id={id} note={note} date={date} delData={delData} />
        );
      })}
    </Container>
  );
}

export default List;

const Container = styled.div`
  width: 100%;
  margin-top: 30px;
`;
