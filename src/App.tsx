import React from 'react'
import './App.css'
import { AuthProvider } from './contexts/AuthContext'
import { Main } from './components/Main'
import styled from 'styled-components'

const Container = styled.div<{
  style: {
    url: string
  }
}>`
  text-align: center;
  height: 100vh;
  width: 100vw;
  background-size: 100% 100%;
  background-image: url(${(props) => props.style.url});
`

function App() {
  return (
    <Container style={{ url: `${window.location.origin}/images/bg.jpg` }}>
      <AuthProvider>
        <Main />
      </AuthProvider>
    </Container>
  )
}

export default App
