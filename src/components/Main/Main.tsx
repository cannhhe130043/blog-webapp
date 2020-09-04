import React from 'react'
import { useAuth } from '../../contexts/AuthContext'
import { Login } from '../Auth'
import { Home } from '../Home'
import { Navbar } from '../Nav'
import styled from 'styled-components'
const Container = styled.div`
  width: 95%;
  margin: auto;
  position: relative;
`

export const Main: React.FC = () => {
  const { token } = useAuth()
  return token ? (
    <Container>
      <Navbar />
      <Home />
    </Container>
  ) : (
    <Login />
  )
}
