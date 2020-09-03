import React from 'react'
import styled from 'styled-components'
import { useAuth } from '../../contexts/AuthContext'

const Container = styled.div`
  width: 30%;
  height: 50%;
  position: absolute;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  border: 1px solid;
`

export const Login: React.FC = () => {
  const [username, setUsername] = React.useState('')
  const [password, setPassword] = React.useState('')

  const { onLogin } = useAuth()

  const handleLogin = async () => {
    if (username.trim() && password.trim()) {
      try {
        await onLogin(username, password)
      } catch (e) {}
    } else {
      alert('Please enter your username or password')
    }
  }

  return (
    <Container>
      <p>Username:</p>
      <input
        onChange={(e) => {
          setUsername(e.target.value)
        }}
        required={true}
        style={{ width: '30%' }}
      />
      <p>Password:</p>
      <input
        onChange={(e) => {
          setPassword(e.target.value)
        }}
        required={true}
        style={{ width: '30%' }}
      />
      <br />
      <button onClick={handleLogin}>Login</button>
    </Container>
  )
}
