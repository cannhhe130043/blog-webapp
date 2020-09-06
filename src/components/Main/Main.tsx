import React from 'react'
import { useAuth } from '../../contexts/AuthContext'
import { Login } from '../Auth'
import { Home } from '../Home'
import { Navbar } from '../Nav'
import styled from 'styled-components'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Register } from '../Auth/Register'
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
    <Router>
      <Switch>
        <Route path="/login" exact component={Login}></Route>
        <Route path="/signup" component={Register}></Route>
      </Switch>
    </Router>
  )
}
