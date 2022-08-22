import React, { useState } from "react";
import styled from "styled-components";
import { v4 } from "uuid";

function Edit({ add }) {
  //note state
  const [note, setNote] = useState("");
  const enterNote = (e) => {
    setNote(e.target.value);
  };

  // date state
  const [date, setDate] = useState("");
  const enterDate = (e) => {
    setDate(e.target.value);
  };

  // to add note
  const addNote = () => {
    add((prev) => {
      return [
        {
          id: v4(),
          note,
          date,
        },
        ...prev,
      ];
    });
  };

  return (
    <Container>
      <Title>備忘錄</Title>
      <CT>記事:</CT>
      <Input value={note} onChange={enterNote}></Input>
      <CT>時間:</CT>
      <Input type="date" value={date} onChange={enterDate}></Input>
      <Add onClick={addNote}>新增</Add>
    </Container>
  );
}

export default Edit;

const Container = styled.div`
  width: 100%;
`;
const Title = styled.div`
  font-size: 50px;
  text-align: center;
`;

const Input = styled.input`
  margin-top: 10px;
  width: 100%;
  height: 40px;
  border-radius: 4px;
`;
const CT = styled.div`
  margin-top: 5px;
  position: relative;
`;

const Add = styled.button`
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 30px;
  height: 40px;
  width: 70%;
  border-radius: 6px;
  font-size: larger;
  cursor: pointer;
  background-color: #e6caff;
  transition-duration: 200ms;
  &:hover {
    background-color: #ca8eff;
  }
`;
