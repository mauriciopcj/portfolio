import { BrowserRouter, Route, RouteObject, Routes } from 'react-router-dom'

import { routes } from './paths'

export const AppRouter = () => {
  const renderRoute = ({ children, element, path }: RouteObject) => (
    <Route element={element} path={path} key={path}>
      {children?.map(renderRoute)}
    </Route>
  )

  return (
    <BrowserRouter>
      <Routes>{routes.map(renderRoute)}</Routes>
    </BrowserRouter>
  )
}
