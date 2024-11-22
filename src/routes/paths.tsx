import { RouteObject } from 'react-router-dom'

import { HomeLayout } from '../layouts'
import { ExampleButtons, Home, NotFound, Projects, Puzzle } from '../views'

export const URLS = {
  home: '/',
  projects: '/projects',
  examples: '/examples',
  examplesButtons: '/examples/buttons',
  puzzles: '/puzzles',
  puzzleFifteen: '/puzzles/fifteen',
  gameMemory: '/games/memory',
}

export const routes: Array<RouteObject> = [
  {
    path: '/',
    element: <HomeLayout />,
    children: [
      {
        path: URLS.home,
        element: <Home />,
      },
      {
        path: URLS.projects,
        element: <Projects />,
      },
      {
        path: URLS.puzzleFifteen,
        element: <Puzzle />,
      },
      {
        path: URLS.examplesButtons,
        element: <ExampleButtons />,
      },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
]
