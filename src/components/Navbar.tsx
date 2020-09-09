import React from 'react'
import styled from 'styled-components'
import { useAuth } from '../contexts/AuthContext'
import { useHistory } from 'react-router-dom'

const Container = styled.nav`
  height: 5%;
  width: 100%;
  position: fixed;
  background-color: red;
`

export const Navbar: React.FC = () => {
  const history = useHistory()

  const handleLogout = () => {
    history.push('/login')
    window.location.reload()
  }
  return (
    <Container>
      <button onClick={handleLogout}>logout</button>
    </Container>
  )
}
