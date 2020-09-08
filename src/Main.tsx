import React from 'react'
import { useAuth } from './contexts/AuthContext'
import { Login, Register } from './routes/Auth'
import { Home } from './routes/Home'
import { Navbar } from './components/Navbar'
import styled from 'styled-components'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
const Container = styled.div`
  width: 95%;
  margin: auto;
  position: relative;
`

export const Main: React.FC = () => {
  const { token } = useAuth()
  return (
    <Router>
      {token ? (
        <Container>
          <Navbar />
          <Switch>
            <Route path={'/home'} exact component={Home}></Route>
          </Switch>
        </Container>
      ) : (
        <Switch>
          <Route path={['/', '/login']} exact component={Login}></Route>
          <Route path="/signup" component={Register}></Route>
        </Switch>
      )}
    </Router>
  )
}
