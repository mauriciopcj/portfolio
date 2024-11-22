import { FC } from 'react'

export const NotFound: FC = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-40">
      <div className="text-text">
        <p className="text-[210px] font-bold leading-none">404</p>
        <p className="text-5xl font-bold">Page not found!</p>
      </div>
      <div className="h-[30px] w-[400px] rounded-[50%] bg-black/20 blur-lg"></div>
    </div>
  )
}
