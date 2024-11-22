import axios, { AxiosInstance } from 'axios'

export const externalApi: AxiosInstance = axios.create({
  timeout: 6000,
})
