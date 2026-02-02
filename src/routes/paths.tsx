import { RouteObject } from 'react-router-dom'

import { HomeLayout } from '../layouts'
import {
  ExampleButtons,
  GameMemory,
  Home,
  NotFound,
  Projects,
  Puzzle,
  TimeRecord,
} from '../views'
import { DarkWarSurvival } from '../views/games/dark-war-survival'

export const URLS = {
  home: '/',
  projects: '/projects',
  examples: '/examples',
  examplesButtons: '/examples/buttons',
  puzzles: '/puzzles',
  puzzleFifteen: '/puzzles/fifteen',
  gameMemory: '/games/memory',
  timeRecord: '/time-record',
  darkWarSurvival: '/games/dark-war-survival',
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
        path: URLS.gameMemory,
        element: <GameMemory />,
      },
      {
        path: URLS.examplesButtons,
        element: <ExampleButtons />,
      },
      {
        path: URLS.timeRecord,
        element: <TimeRecord />,
      },
      {
        path: URLS.darkWarSurvival,
        element: <DarkWarSurvival />,
      },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
]
