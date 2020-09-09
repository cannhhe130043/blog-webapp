import React from 'react'
import styled from 'styled-components'
import { Yeti, Light } from './components'

const Container = styled.div`
  margin: 0;
  padding: 0;
  font-size: 16px;
  -webkit-font-smoothing: antialiased;
  background-color: #09334f;
  position: relative;
  width: 100vw;
  height: 100vh;
`

const Content = styled.div`
  padding: 5rem 3rem 0 25rem;
  position: relative;
  z-index: 10;
  font-family: 'Source Sans Pro', sans-serif;
  color: #fff;
  h3 {
    margin: 0 0 0.8rem;
    font-size: 2.625rem;
    font-weight: 900;
    line-height: 120%;
  }
  p {
    font-size: 1.25rem;
    font-weight: normal;
    line-height: 150%;
    color: #d1e2ed;
    span {
      text-decoration: line-through;
    }
  }
`

export const Error: React.FC = () => {
  return (
    <Container>
      <Yeti />
      <Light />
      <Content>
        <h3>Hello?? Is somebody there?!?</h3>
        <p>
          We know it’s scary, but the page you’re trying to reach can’t be
          found. Perhaps it was just a bad <span>link</span> dream?
        </p>
      </Content>
    </Container>
  )
}
