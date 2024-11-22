import { FC, ReactNode } from 'react'

import { cn } from '../../utils'

interface Props {
  close?: boolean
  children?: ReactNode | Array<ReactNode>
}

export const SidebarRoot: FC<Props> = ({ close, children }) => {
  return (
    <nav
      className={cn(
        'transition-3 fixed left-0 top-0 z-50 h-full w-[250px] px-[14px] py-[10px] shadow-md',
        'bg-sidebar text-text',
        'dark:bg-sidebar-dark dark:text-text-dark',
        { 'w-[88px]': close },
      )}
    >
      {children}
    </nav>
  )
}
