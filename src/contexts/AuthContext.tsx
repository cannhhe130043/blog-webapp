import React from 'react'
import * as dotenv from 'dotenv'
import { login, register } from '../services/auth.service'
dotenv.config()

type AuthContext = {
  onLogin(username: string, password: string): Promise<void>
  onSignup(username: string, password: string): Promise<void>
  onLogout(): void
  token: string | undefined
}

const AuthContext = React.createContext<AuthContext | string>(
  'useAuth should be used inside AuthProvider'
)

type Props = {}

export const AuthProvider: React.FC<Props> = ({ children }) => {
  const [token, setToken] = React.useState<string>()

  React.useEffect(() => {
    setToken(sessionStorage.getItem('token') || undefined)
  }, [])

  const handleLogin = async (username: string, password: string) => {
    const response = await login(username, password)
    const token = response.data
    setToken(token)
    sessionStorage.setItem('token', token)
  }

  const handleSignup = async (username: string, password: string) => {
    const response = await register(username, password)
    const token = response.data
    setToken(token)
    sessionStorage.setItem('token', token)
  }

  const handleLogout = () => {
    setToken(undefined)
    sessionStorage.setItem('token', '')
  }

  const value: AuthContext = {
    onLogin: handleLogin,
    onSignup: handleSignup,
    onLogout: handleLogout,
    token,
  }

  return <AuthContext.Provider {...{ value, children }} />
}

export const useAuth = (): AuthContext => {
  const context = React.useContext(AuthContext)
  if (typeof context === 'string') {
    throw new Error(context)
  }
  return context
}
