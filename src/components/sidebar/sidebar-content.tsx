import { FC, ReactNode } from 'react'

interface SidebarContentProps {
  children?: ReactNode | Array<ReactNode>
}

export const SidebarContent: FC<SidebarContentProps> = ({ children }) => {
  return (
    <div className="no-scrollbar flex h-[calc(100%-55px)] flex-col justify-between overflow-y-scroll">
      {children}
    </div>
  )
}
