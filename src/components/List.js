import React from 'react'
import styled from 'styled-components'
import Item from './Item'

function List() {
  return (
    <Container>
      List
      <Item/>
      <Item/>
      <Item/>
    </Container>
  )
}

export default List

const Container = styled.div`
    width: 100%;
    margin-top: 30px;
`