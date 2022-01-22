/* eslint-disable */
// prettier-ignore
import { AspidaClient, dataToURLString } from 'aspida'
// prettier-ignore
import { Methods as Methods0 } from './people/_id'

// prettier-ignore
const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'https://swapi.dev/api' : baseURL).replace(/\/$/, '')
  const PATH0 = '/people'
  const GET = 'GET'

  return {
    people: {
      _id: (val1: number | string) => {
        const prefix1 = `${PATH0}/${val1}`

        return {
          get: (option?: { query?: Methods0['get']['query'], config?: T }) =>
            fetch<Methods0['get']['resBody']>(prefix, prefix1, GET, option).json(),
          $get: (option?: { query?: Methods0['get']['query'], config?: T }) =>
            fetch<Methods0['get']['resBody']>(prefix, prefix1, GET, option).json().then(r => r.body),
          $path: (option?: { method?: 'get'; query: Methods0['get']['query'] }) =>
            `${prefix}${prefix1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
        }
      }
    }
  }
}

// prettier-ignore
export type ApiInstance = ReturnType<typeof api>
// prettier-ignore
export default api
