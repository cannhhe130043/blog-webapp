import api from './common'
import { AxiosResponse } from 'axios'

export const login = async (
  username: string,
  password: string
): Promise<AxiosResponse> => {
  return api.post('/auth/login', {
    username,
    password,
  })
}

export const register = async (
  username: string,
  password: string
): Promise<AxiosResponse> => {
  return api.post('/auth/register', {
    username,
    password,
  })
}
