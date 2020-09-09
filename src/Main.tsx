import React from 'react'
import { useAuth } from './contexts/AuthContext'
import { Login, Register } from './routes/Auth'
import { Home } from './routes/Home'
import { Navbar } from './components/Navbar'
import styled from 'styled-components'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Error } from './routes/Error'
const Container = styled.div`
  width: 100%;
  margin: auto;
  position: relative;
`

export const Main: React.FC = () => {
  const { token, onLogout } = useAuth()
  const [path] = React.useState(window.location.pathname)
  const [authUrls] = React.useState(['/login', '/signup', '/'])
  const [urls] = React.useState([...authUrls, '/home'])
  const [isErrorPage, setIsErrorPage] = React.useState(false)

  React.useEffect(() => {
    if (authUrls.includes(path)) {
      onLogout()
    } else if (!urls.includes(path)) {
      setIsErrorPage(true)
    }
  }, [])

  return isErrorPage ? (
    <Error />
  ) : (
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
