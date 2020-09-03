import React from 'react'
import axios from 'axios'
import * as dotenv from 'dotenv'
dotenv.config()

type AuthContext = {
  onLogin(username: string, password: string): Promise<void>
  token: string | undefined
}

const AuthContext = React.createContext<AuthContext | string>(
  'useAuth should be used inside AuthProvider'
)

type Props = {}

export const AuthProvider: React.FC<Props> = ({ children }) => {
  const [token, setToken] = React.useState<string>()
  const handleLogin = async (username: string, password: string) => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}auth/login`,
        {
          username,
          password,
        }
      )
      setToken(response.data)
    } catch {
      setToken(undefined)
    }
  }

  const value: AuthContext = {
    onLogin: handleLogin,
    token: token,
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
