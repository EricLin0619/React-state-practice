import React from "react";
import styled from "styled-components";

const arr = ["123", "456", "789"];

function Item({ id, note, date, delData }) {
  const deleteItem = () => {
    delData((prev) => {
      return prev.filter((item) => item.id != id);
    });
  };

  return (
    <Container>
      <Wrap>
        <div>
          <Content>{note}</Content>
          <Content>{date}</Content>
        </div>
        <Delete onClick={deleteItem}>刪除</Delete>
      </Wrap>
    </Container>
  );
}

export default Item;

const Container = styled.div``;
const Wrap = styled.div`
  background-color: antiquewhite;
  color: black;
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  padding: 15px;
  border-radius: 4px;
`;
const Delete = styled.button`
  background-color: #ff7575;
  border-radius: 4px;
  width: 60px;
  cursor: pointer;
  transition-duration: 200ms;
  &:hover {
    background-color: #ff0000;
  }
`;

const Content = styled.p`
  margin: 0;
`;
