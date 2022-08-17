import React from 'react'
import styled from 'styled-components'

function Edit() {
  return (
    <Container>
      <Title>備忘錄</Title>
      <CT>記事:</CT>
      <Input></Input>
      <CT >時間:</CT>
      <Input type="date"></Input>
      <Add>新增</Add>
      
    </Container>
  )
}

export default Edit

const Container = styled.div`
  width: 100%;
`
const Title = styled.div`
    font-size: 50px;
    text-align: center;
`

const Input = styled.input`
    margin-top: 10px;
    width: 100%;
    height: 40px;
`
const CT = styled.div`
    margin-top: 5px;
    position: relative;
`

const Add = styled.button`
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-top:30px;
    height: 40px;
    width: 70%;
    border-radius: 6px;
    font-size: larger;
    cursor:pointer;

    
`