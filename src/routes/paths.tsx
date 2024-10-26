import { RouteObject } from 'react-router-dom'

import { Home } from '../views'

export const URLS = {
  home: '/',
}

export const routes: Array<RouteObject> = [
  {
    path: URLS.home,
    element: <Home />,
  },
]
