import React from 'react'
import styled from 'styled-components'

const arr = ["123","456","789"]



function Item() {
  return (
    <Container>
      <Wrap>
        123
        <Delete>刪除</Delete>
      </Wrap>
      
    </Container>
  )
}

export default Item

const Container = styled.div`

`

const Wrap = styled.div`
  background-color: antiquewhite;
  color:black;
  margin-top: 20px;
  position: relative;
  padding: 20px;
  border-radius:4px;
`
const Delete = styled.button`
  position: absolute;
  width: 80px;
  height: 80%;
  right: 5px;
  top:5px;
  background-color: #FF7575;
  border-radius: 4px;
  cursor: pointer;
  transition-duration: 200ms;
  &:hover{
    background-color:#FF0000;
  }
`