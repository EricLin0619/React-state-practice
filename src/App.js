import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Edit from "./components/Edit";
import List from "./components/List";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);

  const [apiData, setApi] = useState("");

  const get = async () => {
    // const res = await fetch("https://graduate-project-api.herokuapp.com/get-lipstick")
    // const data = await res.json()
    // setApi(data)
    const res = await axios.get("http://127.0.0.1:5000/get-lipgloss");
    console.log(typeof res.data[0]);

    setApi(JSON.stringify(res.data[0]));
  };

  useEffect(() => {
    get();
  }, []);

  return (
    <Container>
      <Edit add={setData} />
      <List data={data} delData={setData} />
      {/* <Api>
        {apiData}
      </Api> */}
    </Container>
  );
}

export default App;

const Container = styled.div`
  width: 50vw;
  margin: 30px auto;
`;

const Api = styled.div`
  width: 100%;
  word-wrap: break-word;
`;
