import React from 'react'
import { useAuth } from '../../contexts/AuthContext'
import styled from 'styled-components'
import { BigFoot } from '../../components/BigFoot'
import { useHistory } from 'react-router-dom'
import { Loading } from '../../components/Loading'

const Container = styled.div`
  width: 100%;
  height: 100%;
`

const Form = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  display: block;
  width: 100%;
  max-width: 400px;
  background-color: #fff;
  margin: 0;
  padding: 2.25em;
  box-sizing: border-box;
  border: solid 1px #ddd;
  border-radius: 0.5em;
  font-family: 'Source Sans Pro', sans-serif;
  .inputGroup1.focusWithText .helper {
    -webkit-transform: translate(1em, 1.55em) scale(0.6);
    transform: translate(1em, 1.55em) scale(0.6);
    opacity: 1;
  }
  .inputGroup2 #showPasswordToggle input:checked ~ .indicator:after {
    visibility: visible;
  }
  .inputGroup2 #showPasswordToggle input:focus ~ .indicator,
  .inputGroup2 #showPasswordToggle input:hover ~ .indicator {
    border-color: #4eb8dd;
  }
  .inputGroup2 #showPasswordToggle input:disabled ~ .indicator {
    opacity: 0.5;
  }
  .inputGroup2 #showPasswordToggle input:disabled ~ .indicator:after {
    visibility: hidden;
  }
`

const InputGroup = styled.div`
  margin: 0 0 2em;
  padding: 0;
  position: relative;
  margin-bottom: 5%;
`

const Label = styled.label`
  margin: 0 0 12px 0;
  display: block;
  font-size: 1em;
  color: #217093;
  font-weight: 700;
  font-family: inherit;
`

const Button = styled.button`
  display: block;
  margin: 0;
  padding: 0.65em 1em 1em;
  background-color: #4eb8dd;
  border: none;
  border-radius: 4px;
  box-sizing: border-box;
  box-shadow: none;
  width: 100%;
  height: 65px;
  font-size: 1.55em;
  color: #fff;
  font-weight: 600;
  font-family: inherit;
  -webkit-transition: background-color 0.2s ease-out;
  transition: background-color 0.2s ease-out;
  :hover,
  :active {
    background-color: #217093;
  }
`

const Helper = styled.p`
  margin: 0;
  top: 8.5%;
  left: 2%;
  transform: translate(1em, 2.2em) scale(1);
  transform-origin: 0 0;
  color: #217093;
  font-size: 1.2em;
  font-weight: 400;
  opacity: 0.65;
  pointer-events: none;
  transition: transform 0.2s ease-out, opacity 0.2s linear;
  position: absolute;
  z-index: 1;
  font-family: inherit;
`

const Input = styled.input`
  display: block;
  margin: 0;
  padding: 0 1em 0;
  padding: 0.875em 1em 0;
  background-color: #f3fafd;
  border: solid 2px #217093;
  border-radius: 4px;
  box-sizing: border-box;
  width: 100%;
  height: 65px;
  font-size: 1.55em;
  color: #353538;
  font-weight: 600;
  font-family: inherit;
  transition: box-shadow 0.2s linear, border-color 0.25s ease-out;
  :focus {
    outline: none;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
    border: solid 2px #4eb8dd;
  }
`

const Indicator = styled.div`
  position: absolute;
  top: -5px;
  left: -35px;
  height: 0.85em;
  width: 0.85em;
  background-color: #f3fafd;
  border: solid 2px #217093;
  border-radius: 3px;
  :after {
    content: '';
    position: absolute;
    left: 0.25em;
    top: 0.025em;
    width: 0.2em;
    height: 0.5em;
    border: solid #217093;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
    visibility: hidden;
  }
`

const ErrorDiv = styled.div<{
  style: {
    visibility: string
  }
}>`
  width: 40%;
  margin: 50px auto;
  background: #ffffff;
  text-align: center;
  font-weight: 900;
  color: #fff;
  font-family: arial;
  position: absolute;
  padding-top: 2.5%;
  top: -7.5%;
  border-radius: 0.5em;
  border: 1px solid #4eb8dd;
  right: 0;
  z-index: 99;
  visibility: ${(props) => props.style.visibility};
  :before {
    content: '';
    width: 0px;
    height: 0px;
    position: absolute;
    border-left: 10px solid #4eb8dd;
    border-right: 10px solid transparent;
    border-top: 10px solid #4eb8dd;
    border-bottom: 10px solid transparent;
    left: 15px;
    bottom: -20px;
  }
`

const ErrorContent = styled.div`
  width: 80%;
  margin: auto;
  color: red;
  font-size: 0.8em;
  margin-bottom: 5%;
`

const SignUp = styled.a`
  color: blue;
  text-decoration: none;
  :hover {
    cursor: pointer;
  }
`

export const Login: React.FC = () => {
  const history = useHistory()
  const [username, setUsername] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [error, setError] = React.useState('')
  const [loading, setLoading] = React.useState(false)
  const [hiddenError, setHiddenError] = React.useState(true)
  const [isShowPassword, setShowPassword] = React.useState(false)
  const { onLogin } = useAuth()

  const handleLogin = async () => {
    if (!username.trim() || !password.trim()) {
      setError('Enter your info')
    } else {
      try {
        setLoading(true)
        await onLogin(username, password)
        history.push('/home')
      } catch (e) {
        setError('Incorrect!!!')
      }
    }
    setLoading(false)
    setHiddenError(false)
    await new Promise((resolve) => setTimeout(resolve, 3000))
    setHiddenError(true)
  }

  const toggleShowPassword = async () => {
    setShowPassword(!isShowPassword)
    setError('Aha i know pass')
    setHiddenError(false)
    if (isShowPassword) {
      setHiddenError(true)
    }
  }

  return (
    <Container>
      <Loading loading={loading} />
      <Form style={{ visibility: loading ? 'hidden' : 'visible' }}>
        <ErrorDiv style={{ visibility: hiddenError ? 'hidden' : 'visible' }}>
          <ErrorContent>{error}</ErrorContent>
        </ErrorDiv>
        <BigFoot />
        <InputGroup className="inputGroup1">
          <Label htmlFor="loginUsername" id="loginUsernameLabel">
            Username
          </Label>
          <Input
            onChange={(e) => {
              setUsername(e.target.value)
            }}
            type="text"
            id="loginUsername"
            maxLength={254}
          />
          <Helper className="helper">Username</Helper>
        </InputGroup>
        <InputGroup className="inputGroup2">
          <Label htmlFor="loginPassword" id="loginPasswordLabel">
            Password
          </Label>
          <Input
            onChange={(e) => {
              setPassword(e.target.value)
            }}
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                handleLogin()
              }
            }}
            style={{
              padding: '0.4em 1em 0.5em',
            }}
            type="password"
            id="loginPassword"
          />
          <Label
            style={{
              display: 'block',
              padding: ' 0 0 0 1.45em',
              position: 'absolute',
              top: '0.25em',
              right: 0,
              fontSize: '1em',
            }}
            id="showPasswordToggle"
            htmlFor="showPasswordCheck"
          >
            <span style={{ position: 'absolute', top: '-5px', left: '-17px' }}>
              Show
            </span>
            <Input
              style={{
                position: 'absolute',
                zIndex: -1,
                opacity: 0,
              }}
              id="showPasswordCheck"
              type="checkbox"
              onClick={toggleShowPassword}
            />
            <Indicator className="indicator" />
          </Label>
        </InputGroup>
        <InputGroup className="inputGroup3">
          <Button onClick={handleLogin}>Login</Button>
        </InputGroup>
        <SignUp href="/signup">Sign up</SignUp>
      </Form>
    </Container>
  )
}
