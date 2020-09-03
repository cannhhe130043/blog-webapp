import React from 'react'
import styled from 'styled-components'
import { useAuth } from '../../contexts/AuthContext'
import { Login } from '../Auth'
import { Home } from '../Home'

export const Main: React.FC = () => {
  const { token } = useAuth()
  return token ? <Home /> : <Login />
}
